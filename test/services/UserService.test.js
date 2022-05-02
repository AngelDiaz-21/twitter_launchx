const UserService = require ('./../../app/services/UserService')

describe('Tests for UserService', () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1, "AngelDiaz", "Angel")

        expect(user.username).toBe("AngelDiaz")
        expect(user.name).toBe("Angel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    }); 

    test('2. Get all user data in a list', () => {
    
        const user = UserService.create(1, "AngelDiaz", "Angel")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("AngelDiaz")
        expect(userInfoInList[2]).toBe("Angel")
        expect(userInfoInList[3]).toBe("Sin bio")
    }); 

    test('3. Update username', () => {
        const user = UserService.create(1, "AngelDiaz", "Angel")
        UserService.updateUserUsername(user, "AngelC")
        expect(user.username).toBe("AngelC")
    });

        test('4. Given a list of users give me the list of usernames', () => {
            const user1 = UserService.create(1, "AngelDiaz1", "Angel")
            const user2 = UserService.create(1, "AngelDiaz2", "Angel")
            const user3 = UserService.create(1, "AngelDiaz3", "Angel")

            const usernames = UserService.getAllUsernames([user1, user2, user3])

            expect(usernames).toContain("AngelDiaz1")
            expect(usernames).toContain("AngelDiaz2")
            expect(usernames).toContain("AngelDiaz3")

        }) 
})