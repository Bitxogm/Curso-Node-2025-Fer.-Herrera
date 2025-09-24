import exp from 'constants';
import { httpClientPlugin } from './../../plugins/http-client.plugin';


describe('Test in plugins/http-client.plugin', () => {
  
  test('httpClientPlugin.get() should return a string', async () => {
    // Ponemos esta url de prueba , podiamos poner cualquier url por ejemplo la depokemonapi,
    // siempre que miremos en postman que responde y devuelve
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const resp = await httpClientPlugin.get(url);
    expect(resp).toBeInstanceOf(Object);
    expect(resp).toEqual({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      completed: expect.any(Boolean)
    });
  });

  test('httpClientPlugin.get() should have GET, POST, DELETE methods', () => { 


    expect(typeof httpClientPlugin.get).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    // Amobos expect serian correctos el de arriba mas conciso
    expect(httpClientPlugin.post).toBeInstanceOf(Function);
    expect(httpClientPlugin.delete).toBeInstanceOf(Function);

   });

}); 
