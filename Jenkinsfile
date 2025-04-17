pipeline {
  agent any

  environment {
    BACKEND_DIR = './backend'
    FRONTEND_DIR = './frontend'
  }

  stages {
    stage('Clone Repo') {
      steps {
        echo "Code already available in Jenkins workspace"
      }
    }

    stage('Build Backend') {
      steps {
        dir("${env.BACKEND_DIR}") {
          sh 'docker build -t dev-backend .'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir("${env.FRONTEND_DIR}") {
          sh 'docker build -t dev-frontend .'
        }
      }
    }

    stage('Run Containers') {
      steps {
        sh 'docker-compose -f docker-compose.yml up -d'
      }
    }
  }
}
