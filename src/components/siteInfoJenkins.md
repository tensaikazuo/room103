### Jenkins Setting

I refer just important points. I use Docker to test in local.

- Launch Docker container of Jenkins and Blueocean
    - Please refer [official tutorial](https://jenkins.io/doc/book/installing/)
    - I use local port 8081 for mapping of port 80 of Blueocean
- Install Generic Webhook Trigger on Plugin Manager  
- Add global credentials
    - In username with password format, create credentials with ID 'ftp-creds'
    - In secret text format, create credential with ID 'ftp-host'
    - In secret text format, create credential with ID 'ftp-remote-path'
    - In secret text format, create credential with ID 'cockpit-api-key'  
- Create a new job named Cockpit with Pipeline format
    - Choose Generic Webhook Trigger on Build Trigger
        - Add a token if you need
    - Choose Pipeline script from SCM on Pipeline
        - Select Git on SCM
        - Specify your project URL, in my case https://github.com/tensaikazuo/room103
- Create Jenkinsfile in root directory of your project
- Everytime webhook reaches Jenkins, it builds the site and upload files automatically
    - Please check [Jenkinsfile](https://github.com/tensaikazuo/room103/blob/master/Jenkinsfile) of my project         
