const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User (id, username, name, "Sin bio")
    }

    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }

    static updateUserUsername(user, newUsername){
        return  user.username = newUsername;
    }

    static getAllUsernames(listOfUsers){
        let usernames = []
        listOfUsers.forEach(user => {
            usernames.push(user.getUsername)
        });

        return usernames
    }
}

module.exports = UserService;