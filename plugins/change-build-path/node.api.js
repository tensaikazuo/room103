import path from 'path';
import replace from 'replace-in-file';
import jsStringEscape from 'js-string-escape';
import regexStringEscape from 'lodash.escaperegexp';
import fsx from 'fs-extra';

const strCWD = regexStringEscape(jsStringEscape(path.resolve(process.cwd())));
const srcPathParent = './dist/templates';
const srcPath = `${srcPathParent}${strCWD}/src/pages`;
const dstPath = `${srcPathParent}/pages`;

const cleanEmptyFoldersRecursively = (folder) => {

    fsx.readdir(folder, function (err, files) {

        if (files && files.length !== 0) {

            files.forEach(function (fileName) {
                const file = `${folder}/${fileName}`;
                fsx.stat(file, function (err, stats) {
                    if (stats && stats.isDirectory()) {
                        const files = fsx.readdirSync(file);
                        if (files.length > 0) {
                            cleanEmptyFoldersRecursively(file);
                        }
                        if (files.length === 0) {
                            fsx.remove(file);
                            return;
                        }
                    }
                });
            });

        }

    });
}

const traverseDirectory = (dirname, callback) => {
    let directory = [];
    fsx.readdir(dirname, function (err, list) {
        dirname = fsx.realpathSync(dirname);
        if (err) {
            return callback(err);
        }
        let listlength = list.length;
        list.forEach(function (fileName) {
            const file = `${dirname}/${fileName}`;

            fsx.stat(file, function (err, stats) {

                directory.push(file);

                if (stats.isDirectory()) {
                    traverseDirectory(file, function (err, parsed) {
                        directory = directory.concat(parsed);
                        if (!--listlength) {
                            callback(null, directory);
                        }
                    });
                }

                if (stats.isFile()) {
                    if (file.match(/~/)) {
                        try {
                            const fileName = path.basename(file);
                            const fileSufExt = fileName.match(/[0-9a-z]+\.[0-9a-z]+$/);
                            const newName = `functions.${fileSufExt}`;
                            fsx.rename(file, `${srcPathParent}/pages/${newName}`);

                            cleanEmptyFoldersRecursively(dirname);

                            // fix functions.hash.js file links
                            replace({
                                files: path.resolve('./dist/**/*.html'),
                                from: [
                                    /<link.*?\/templates\/pages.*?~.*?\/>/,
                                    /<script.*src=.*\/templates\/pages.*?~.*?~.*?><\/script>/
                                ],
                                to: [
                                    `<link rel="preload" as="script" href="/templates/pages/${newName}"/>`,
                                    `<script defer="" type="text/javascript" src="/templates/pages/${newName}"></script>`
                                ]
                            });
                        } catch (err) {
                            console.error(err);
                        }
                    }
                }

            });
        });
    });
}

const cb = (err, result) => {
    if (err) {
        console.log('error', err);
    }
    return result;
}

export default pluginOptions => ({
    afterBundle: async state => {
        // fix absolute paths in vendors~main.js
        await replace({
            files: path.resolve(`${srcPathParent}/vendors~main*.js`),
            from: new RegExp(strCWD, 'g'),
            to: '.'
        });
        // fix absolute paths in main.js
        await replace({
            files: path.resolve('./dist/main*.js'),
            from: [
                new RegExp(`${strCWD.slice(1)}/src/`, 'g'),
            ],
            to: [
                '',
            ]
        });
        // rewrite path from abc~xyz.[hash].js to /pages/functions.[hash].js
        await replace({
            files: path.resolve('./dist/main*.js'),
            from: /pages\/.*~.*\/.*?[~]\d+\w+/g,
            to: 'pages/functions',
        });
        return state;
    },
    afterExport: async state => {
        await replace({
            files: path.resolve('./dist/**/routeInfo.json'),
            from: new RegExp(`${strCWD}/src/`, 'g'),
            to: '/'
        });

        // replace abs paths in links and scripts (except for abc~xyz file)
        await replace({
            files: path.resolve('./dist/**/*.html'),
            from: [
                new RegExp(`${strCWD}/src/`, 'g'),
            ],
            to: [
                '/',
            ]
        });

        try {
            // console.log(` moving from ${srcPath} into ${dstPath}...`)
            await fsx.move(srcPath, dstPath);
        } catch (err) {
            console.error(err);
        }

        const dir = dstPath;

        try {
            await traverseDirectory(dir, cb);
        } catch (err) {
            console.error(err);
        }

        try {
            await fsx.remove(`${srcPathParent}/Users`);
            await fsx.remove(`${srcPathParent}/home`);
        } catch (err) {
            console.error(err);
        }

        try {
            await cleanEmptyFoldersRecursively(dir);
        } catch (err) {
            console.error(err);
        }

        return state;
    },
});
