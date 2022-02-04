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
    expect(user1.venus).toEqual(40.3225806);
  });
});