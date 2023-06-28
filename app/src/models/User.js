"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { // body 객체를 전달받아 User 모델의 인스턴스 생성
        this.body = body;
    }

    login() { // 로그인 요청 처리
        const body = this.body;
        const {id, password} = UserStorage.getUserInfo(body.id); // UserStorage 모델의 getUserInfo 메서드 실행

        if (id) {
            if (id === body.id && password === body.password) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    }
}

module.exports = User;