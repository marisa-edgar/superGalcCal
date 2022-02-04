export default class User{
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.mercury = Math.floor(this.age/.24);
    this.venus = Math.floor(this.age/.62);
    this.mars = Math.floor(this.age/1.88);
    this.jupiter = Math.floor(this.age/11.86);
    this.expectancy= 72;
    this.yearsLeft= this.expectancy -this.age;
  }
}