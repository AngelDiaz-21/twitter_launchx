const UserService = require ('./../../app/services/UserService')

describe('Tests for UserService', () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1, "AngelDiaz", "Angel")

        expect(user.username).toBe("AngelDiaz")
        expect(user.name).toBe("Angel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    }); 
})