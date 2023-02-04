import "reflect-metadata";
import { AppDataSource } from "./db-config";
import { User } from "./entity/User";

export async function initDB(){
    await AppDataSource.initialize();
}

export async function createNewUser() {
    const user = new User();
    user.firstName = "Ludwig";
    user.lastName = "Wittgenstein";
    user.age = 22;

    const userRegistory = AppDataSource.getRepository(User);
    
    await userRegistory.save(user);
    console.log("User has been saved.");

    const savedUsers = await userRegistory.find();
    console.log("All users from db: " + savedUsers)
}

export async function readUser(): Promise<any>{
//    await AppDataSource.initialize();
    const userRegistory = AppDataSource.getRepository(User);
/*     const user = await userRegistory.findOneBy({
        id: 0,
    })
 */
    const user = await userRegistory.find({});
    return user;
}