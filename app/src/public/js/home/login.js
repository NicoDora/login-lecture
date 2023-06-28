// 로그인 버튼 클릭 시 실행되는 함수
"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

console.log(id);

loginBtn.addEventListener("click", login); // 로그인 버튼 클릭 시 login 함수 실행

function login() { // 로그인 요청 처리
    const req = {
        id: id.value,
        password: password.value,
    };

    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", { // /login 경로로 POST 방식으로 요청
        method: "POST",
        headers: {
            "Content-Type": "application/json", // JSON 형식으로 데이터 전달
        },
        body: JSON.stringify(req), // req 객체를 JSON 형식으로 변환하여 전달
    })
    .then((res) => res.json()) // 응답 데이터를 JSON 형식으로 변환
    .then((res) => {
        if (res.success) { // 로그인 성공 시
            location.href = "/";
        }
        else { // 로그인 실패 시
            alert(res.msg);
        }
    })
    .catch((err) => { // 로그인 중 에러 발생 시
        console.error("로그인 중 에러 발생");
    });
}