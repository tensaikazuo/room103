const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.npm_config_ftp_usr,
  password: process.env.npm_config_ftp_psw,
  host: process.env.npm_config_ftp_host,
  port: 21,
  localRoot: "./dist/",
  remoteRoot: process.env.npm_config_ftp_remote_path,
  include: ["*", "**/*"],
  exclude: null,
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
