pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "07kanthraj/docker-jenkin-cicd"
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/07kanthraj/docker-jenkin-cicd.git'
           }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Login to DockerHub') {
            steps {
                script {
                    sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE}:${env.BUILD_NUMBER}").push()
                    // Optionally push 'latest' tag too:
                    docker.image("${DOCKER_IMAGE}:${env.BUILD_NUMBER}").tag('latest')
                    docker.image("${DOCKER_IMAGE}:latest").push()
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
