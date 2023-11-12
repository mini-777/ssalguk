module.exports = (function() {
    return {
        dev: { // localhost
            host: 'test.c1uttv6i1din.ap-northeast-2.rds.amazonaws.com',  //엔드포인트입력
            port: '3306',  //myql포트입력
            user: 'admin',    //마스터유저입력
            password: 'abcd1234',  //마스터유저비밀번호입력
            database: 'dofarming_app' //데이터베이스 인스턴스입력
        }
    }
})();