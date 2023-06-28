"use strict";

const User = require("../../models/User"); // User 모델 불러오기

const output = {
    hello: (req, res) => {
        res.render("home/index"); // home/index.ejs 렌더링
    },
    login: (req, res) => {
        res.render("home/login"); // home/login.ejs 렌더링
    },
}

const process = {
    login: (req, res) => { // 로그인 요청 처리
        const user = new User(req.body); // User 모델 인스턴스 생성
        const response = user.login(); // login 메서드 실행
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
};