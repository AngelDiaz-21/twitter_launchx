const User = require ('./../../app/models/User')

describe('Unit Tests for User class', () => {
    test('Create an User object', () => {
        // Aquí invocas el código que vas a usar en la app
        const user = new User(1, "AngelDiaz", "Angel", "Bio")

        // Aquí validas los resultados de ese código
        // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("AngelDiaz")
        expect(user.name).toBe("Angel")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined() //Verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const user = new User (1, "AngelDiaz", "Angel", "Bio")

        expect(user.getUsername).toBe("AngelDiaz")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    }); 

    test('Add setters', () => {
        const user = new User (1, "AngelDiaz", "Angel", "Bio")

        user.setUsername = "Alberto"
        expect(user.username).toBe("Alberto")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    }); 

})