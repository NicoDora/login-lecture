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

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => { // fields 배열의 요소를 순회하며 newUsers 객체에 추가
            if (users.hasOwnProperty(field)) { // users 객체에 field가 존재하는지 확인
                newUsers[field] = users[field]; // newUsers 객체에 field 추가
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) { // ...fields: 전달받은 인자를 배열로 저장
        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
          .catch(console.error);
        
    }

    static getUserInfo(id) {
        return fs
          .readFile("./src/databases/users.json")
          .then((data) => {
            return this.#getUserInfo(data, id);
        })
          .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success: true};
    }
}

module.exports = UserStorage;