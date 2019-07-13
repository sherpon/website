pipeline {
  agent {
    docker {
      image 'brucegroverlee/docker-firebase'
      args '-p 5001:5001'
    }
  }
  environment {
    CI = 'true'
    FIREBASE_DEPLOY_TOKEN = credentials('firebase-deploy-token')
    SHERPON_WEBSITE_STAGING_ENV = credentials('sherpon-website-staging-env')
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }
    stage('Build') {
      steps {
        sh './jenkins/scripts/staging.build.sh'
      }
    }
    stage('Deploy to staging') {
      steps {
        sh './jenkins/scripts/staging.deploy.sh'
      }
    }
  }
}