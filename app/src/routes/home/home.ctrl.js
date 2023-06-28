"use strict";

const User = require("../../models/User"); // User 모델 불러오기

const output = {
    hello: (req, res) => {
        res.render("home/index"); // home/index.ejs 렌더링
    },
    login: (req, res) => {
        res.render("home/login"); // home/login.ejs 렌더링
    },
    register: (req, res) => {
        res.render("home/register"); // home/register.ejs 렌더링
    },
}

const process = {
    login: async (req, res) => { // 로그인 요청 처리
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: ((req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }),
}

module.exports = {
    output,
    process,
};