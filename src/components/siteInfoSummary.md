### Summary

This static site is generated by [React Static](https://github.com/react-static/react-static).
I would like to add an editing feature, so that I might add entries from some web gui.

There are many [headless CMS](https://headlesscms.org/) nowadays.
I decided to use [Cockpit CMS](https://getcockpit.com/) because of its simplicity.
Actually, Cockpit is easy to handle and it works well if you change several parameters from GUI.

Finally, when you update entries from Cockpit, you have to rebuild the site.
Once Static site generators build the site, generated files never change unless
you prompt SSG to rebuild. That is to say, you need an automation tool.
I chose [Jenkins](https://jenkins.io/) so as to automate processes of build and uploading.
