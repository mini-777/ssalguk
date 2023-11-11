module.exports = (function() {
    return {
        dev: { // localhost
            host: 'dofaming-mysql.co4ylmymttoe.ap-northeast-2.rds.amazonaws.com',  //엔드포인트입력
            port: '3306',  //myql포트입력
            user: 'root',    //마스터유저입력
            password: 'Tkfrnrtn',  //마스터유저비밀번호입력
            database: 'dofaming-mysql' //데이터베이스 인스턴스입력
        }
    }
})();