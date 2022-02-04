import  User  from './../src/js/main.js';

describe('User',()=>{
  test('should correctly create an object for user', () =>{
    const user1 = new User("bob", 25);
    expect(user1.name).toEqual("bob");
    expect(user1.age).toEqual(25);
  });
});
describe('User',()=>{
  test('should correctly return age on mercury', () =>{
    const user1 = new User("bob", 25);
    expect(user1.mercury).toEqual(104);
  });
});
describe('User',()=>{
  test('should correctly return age on venus', () =>{
    const user1 = new User("bob", 25);
    expect(user1.venus).toEqual(40);
  });
});
describe('User',()=>{
  test('should correctly return age on mars', () =>{
    const user1 = new User("bob", 25);
    expect(user1.mars).toEqual(13);
  });
});
describe('User',()=>{
  test('should correctly return age on jupiter', () =>{
    const user1 = new User("bob", 25);
    expect(user1.jupiter).toEqual(2);
  });
});
describe('User',()=>{
  test('should correctly return life expectancy', () =>{
    const user1 = new User("bob", 25);
    expect(user1.expectancy).toEqual(72);
  });
});
describe('User',()=>{
  test('should correctly return years left on earth', () =>{
    const user1 = new User("bob", 25);
    expect(user1.yearsLeft).toEqual(47);
  });
});

describe('User',()=>{
  test('should correctly return life expectancy on mercury', () =>{
    const user1 = new User("bob", 25);
    expect(user1.exMercury).toEqual(300);
  });
});

describe('User',()=>{
  test('should correctly return life expectancy on venus', () =>{
    const user1 = new User("bob", 25);
    expect(user1.exVenus).toEqual(116);
  });
});

describe('User',()=>{
  test('should correctly return life expectancy on mars', () =>{
    const user1 = new User("bob", 25);
    expect(user1.exMars).toEqual(38);
  });
});

describe('User',()=>{
  test('should correctly return life expectancy on jupiter', () =>{
    const user1 = new User("bob", 25);
    expect(user1.exJupiter).toEqual(6);
  });
});

describe('User',()=>{
  test('should correctly return years left on mercury', () =>{
    const user1 = new User("bob", 25);
    expect(user1.leftMercury).toEqual(196);
  });
});

describe('User',()=>{
  test('should correctly return years left on venus', () =>{
    const user1 = new User("bob", 25);
    expect(user1.leftVenus).toEqual(76);
  });
});

describe('User',()=>{
  test('should correctly return years left on mars', () =>{
    const user1 = new User("bob", 25);
    expect(user1.leftMars).toEqual(25);
  });
});

describe('User',()=>{
  test('should correctly return years left on jupiter', () =>{
    const user1 = new User("bob", 25);
    expect(user1.leftJupiter).toEqual(4);
  });
});

describe('User',()=>{
  test('should correctly return years over life expectancy on earth', () =>{
    const user2 =new User("Ester",80)
    expect(user2.overAge).toEqual(8);
  });
});

describe('User',()=>{
  test('should correctly return years over life expectancy on mercury', () =>{
    const user2 =new User("Ester",80)
    expect(user2.overMercury).toEqual(33);
  });
});

describe('User',()=>{
  test('should correctly return years over life expectancy on venus', () =>{
    const user2 =new User("Ester",80)
    expect(user2.overVenus).toEqual(12);
  });
});

describe('User',()=>{
  test('should correctly return years over life expectancy on mars', () =>{
    const user2 =new User("Ester",80)
    expect(user2.overMars).toEqual(12);
  });
});