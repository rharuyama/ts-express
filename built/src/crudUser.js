"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUser = exports.createNewUser = exports.initDB = void 0;
require("reflect-metadata");
const db_config_1 = require("./db-config");
const User_1 = require("./entity/User");
function initDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_config_1.AppDataSource.initialize();
    });
}
exports.initDB = initDB;
function createNewUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = new User_1.User();
        user.firstName = "Ludwig";
        user.lastName = "Wittgenstein";
        user.age = 22;
        const userRegistory = db_config_1.AppDataSource.getRepository(User_1.User);
        yield userRegistory.save(user);
        console.log("User has been saved.");
        const savedUsers = yield userRegistory.find();
        console.log("All users from db: " + savedUsers);
    });
}
exports.createNewUser = createNewUser;
function readUser() {
    return __awaiter(this, void 0, void 0, function* () {
        //    await AppDataSource.initialize();
        const userRegistory = db_config_1.AppDataSource.getRepository(User_1.User);
        /*     const user = await userRegistory.findOneBy({
                id: 0,
            })
         */
        const user = yield userRegistory.find({});
        return user;
    });
}
exports.readUser = readUser;
