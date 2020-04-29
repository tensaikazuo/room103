pipeline {
  agent {
    docker {
      image 'node:12.16-alpine'
      args '-p 3000:3000 -u root:root --network host'
    }
  }
  environment {
    FTP_CREDS = credentials('ftp-creds')
    FTP_HOST = credentials('ftp-host')
    FTP_REMOTE_PATH = credentials('ftp-remote-path')
    COCKPIT_API_KEY = credentials('cockpit-api-key')
  }
  stages {
    stage('Prebuild') {
      steps {
        echo 'Start prebuild process...'
        sh 'npm --cockpit_api_key=${COCKPIT_API_KEY} run prebuild'
      }
    }
    stage('Build') {
      steps {
        echo 'Bonjour, madame !'
        sh 'npm install'
        sh 'node_modules/react-static/bin/react-static --version'
        sh 'npm --cockpit_api_key=${COCKPIT_API_KEY} run build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'npm --ftp_usr=${FTP_CREDS_USR} --ftp_psw=${FTP_CREDS_PSW} --ftp_host=${FTP_HOST} --ftp_remote_path=${FTP_REMOTE_PATH} run deploy'
      }
    }
  }
}
