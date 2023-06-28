"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");
console.log("Hello, register!");

console.log(id);

registerBtn.addEventListener("click", register); // 회원가입 버튼 클릭 시 register 함수 실행

function register() { // 회원가입 요청 처리
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };

    fetch("/register", { // /register 경로로 POST 방식으로 요청
        method: "POST",
        headers: {
            "Content-Type": "application/json", // JSON 형식으로 데이터 전달
        },
        body: JSON.stringify(req), // req 객체를 JSON 형식으로 변환하여 전달
    })
    .then((res) => res.json()) // 응답 데이터를 JSON 형식으로 변환
    .then((res) => {
        if (res.success) { // 회원가입 성공 시
            location.href = "/login";
        }
        else { // 회원가입 실패 시
            alert(res.msg);
        }
    })
    .catch((err) => { // 회원가입 중 에러 발생 시
        console.error("회원가입 중 에러 발생");
    });
}