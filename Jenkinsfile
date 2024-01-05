node {
  def commit_id
  stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
  }
  stage('build') {
    nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'npm install --omit=dev'
    }
  }

  stage('test') {
    steps {
      sh 'npm test'
    }
  }

  stage('deploy') {
    steps {
      sh 'npm run deploy'
    }
  }
  
}
