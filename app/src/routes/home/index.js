// 사용자가 접속했을 때, 홈 화면을 보여주는 라우터
"use strict";

const express = require("express"); // express 모듈 불러오기
const router = express.Router(); // express 모듈의 라우터 기능 불러오기

const ctrl = require("./home.ctrl"); // home.ctrl.js 불러오기

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login); // /login 경로로 POST 방식으로 접속했을 때, ctrl.process.login 함수 실행

module.exports = router;