export default class User{
  constructor(name, age) {
    this.name =name;
    this.age = age;
    this.mercury = this.age/.24;
  }
}