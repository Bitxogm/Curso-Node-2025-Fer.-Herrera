import { getUUID } from "../../plugins";

describe('plugins/get-id.plugin', () => { 
  test('getUUID() should return a UUID', () => {
    const uuid = getUUID();
    expect(uuid).toBeDefined();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  })

 });