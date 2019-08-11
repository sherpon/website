pipeline {
  agent {
    docker {
      image 'brucegroverlee/docker-firebase'
      args '-p 5011:5011'
    }
  }
  environment {
    CI = 'true'
    FIREBASE_DEPLOY_TOKEN = credentials('firebase-deploy-token')
    SHERPON_WEBSITE_PRODUCTION_ENV = credentials('sherpon-website-production-env')
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh './jenkins/scripts/production.build.sh'
      }
    }
    stage('Deploy to production') {
      steps {
        sh './jenkins/scripts/production.deploy.sh'
      }
    }
  }
}