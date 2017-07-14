pipeline {

  stages {
    stage('Install') {
      steps {
        if (isUnix()) {
          sh "npm install"
        } else {
         bat("npm install")
        }
		  }
    }
    stage('Build') {
      steps {
        if (isUnix()) {
          sh "npm run build"
        } else {
         bat("npm run build")
        }
		  }
    }
    stage('Test') {
      steps {
        if (isUnix()) {
          sh "npm test"
        } else {
         bat("npm test")
        }      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
}
