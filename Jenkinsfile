pipeline {
    agent any

    tools {
        nodejs 'node-20' 
    }

    stages {
        stage('1. 코드 가져오기 (Checkout)') {
            steps {
                checkout scm
            }
        }

        stage('2. 패키지 설치 (Install)') {
            steps {
                echo '이전 북마크 앱의 npm 패키지를 설치합니다...'
                sh 'npm install'
            }
        }

        stage('3. 넥스트 빌드 (Build)') {
            steps {
                echo 'Next.js App Router 프로젝트를 컴파일합니다...'
                sh 'npm run build'
            }
        }

        stage('4. 백그라운드 배포 (Deploy)') {
            steps {
                echo '서버를 백그라운드에서 실행합니다...'
                sh '''
                    export BUILD_ID=dontKillMe
                    npx pm2 delete next-app || true
                    npx pm2 start npm --name "next-app" -- run start
                '''
            }
        }
    }
}