pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'pipeline', url: 'https://github.com/lsantos08qa/teste-e2e-ebac.git'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'NO_COLOR=1 npm test'
            }
        }
    }
}