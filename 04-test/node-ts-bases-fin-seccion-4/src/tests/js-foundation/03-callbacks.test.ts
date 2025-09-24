import { getUserById } from "../../js-foundation/03-callbacks";


describe('js-foundation/03-callbacks.ts', () => { 
  
  test('getUserById should return an error if user not found', (done) => { 
    const id = 10; // Este id solo se usa para la primera prueba
    getUserById( id, (err, user) => {
      expect(user).toBeUndefined();
      expect(err).toBe(`User not found with id ${id}`);
      
      done(); 
    });
  });

  test('getUserById should return user with id 1', (done) => { 

    const expectedUser = {
      id: 1,
      name: 'John Doe',
    }
    
    // ✅ Pasar  el id 1 directamente en lugar de usar la variable 'id' global
    getUserById( expectedUser.id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual(expectedUser);

      done(); 
    });
  });
});