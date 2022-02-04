import  User  from './../src/js/main.js';

describe('User',()=>{
  test('should correctly create an object for user', () =>{
    const user1 = new User("bob", 25);
    expect(user1.name).toEqual("bob");
    expect(user1.age).toEqual(25);
  });
});
describe('User',()=>{
  test('should correctly return life expectancy on mercury', () =>{
    const user1 = new User("bob", 25);
    expect(user1.mercury).toEqual(104.16666666666667);
  });
});
describe('User',()=>{
  test('should correctly return life expectancy on venus', () =>{
    const user1 = new User("bob", 25);
    expect(user1.venus).toEqual(40.32258064516129);
  });
});
describe('User',()=>{
  test('should correctly return life expectancy on mars', () =>{
    const user1 = new User("bob", 25);
    expect(user1.mars).toEqual(13.297872340425533);
  });
});
describe('User',()=>{
  test('should correctly return life expectancy on jupiter', () =>{
    const user1 = new User("bob", 25);
    expect(user1.jupiter).toEqual(2.1079258010118043);
  });
});
