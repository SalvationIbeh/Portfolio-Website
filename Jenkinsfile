pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SalvationIbeh/Portfolio-Website.git', credentialsId: 'github-credentials-id'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-credentials-id', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS')]) {
                    sh '''
                        git config --global user.email "salvationibeh@gmail.com"
                        git config --global user.name "Salvation Ibeh"
                        git remote set-url origin https://${GIT_USER}:${GIT_PASS}@github.com/SalvationIbeh/Portfolio-Website.git
                        git checkout gh-pages || git checkout -b gh-pages
                        cp -r dist/* .
                        git add -A
                        git commit -m "Jenkins Deploy to GitHub Pages"
                        git push origin gh-pages --force
                    '''
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
