import { characters } from "../../js-foundation/02-destructuring";

describe('/js-foundation/02-destructuring', () => {  

  test('characters should contain Flash , Superman ', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  });

  test(' first character should be Flash and second Superman', () => { 
    expect(characters[0]).toEqual('Flash');
    expect(characters[1]).toBe('Superman');

   });
    
});
    
  

