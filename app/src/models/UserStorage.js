"use strict";

const fs = require("fs").promises;
class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id); // 몇 번째 인덱스에 존재하는지 확인
        const userKeys = Object.keys(users) // ["id", "password", "name"]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }

    static getUsers(...fields) { // ...fields: 전달받은 인자를 배열로 저장
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => { // fields 배열의 요소를 순회하며 newUsers 객체에 추가
            if (users.hasOwnProperty(field)) { // users 객체에 field가 존재하는지 확인
                newUsers[field] = users[field]; // newUsers 객체에 field 추가
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
            return this.#getUserInfo(data, id);
        })
          .catch(console.error);
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);

        return {success: true};
    }
}

module.exports = UserStorage;