  node {
    stage('Install') {
      if (isUnix()) {
        sh "npm install"
      } else {
        bat("npm install")
      }
    }
    stage('Build') {
      if (isUnix()) {
        sh "npm run build"
      } else {
       bat("npm run build")
      }
    }
    stage('Test') {
      if (isUnix()) {
        sh "npm test"
      } else {
        bat("npm test")
      }
    }
    stage('Deploy') {
      echo 'Deploying....'
    }
  }
}
