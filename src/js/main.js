export default class User{
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.mercury = Math.floor(this.age/.24);
    this.venus = Math.floor(this.age/.62);
    this.mars = Math.floor(this.age/1.88);
    this.jupiter = Math.floor(this.age/11.86);
    this.expectancy = 72;
    this.yearsLeft = this.expectancy -this.age;
    this.exMercury = Math.floor(this.expectancy/.24);
    this.exVenus = Math.floor(this.expectancy/.62);
    this.exMars = Math.floor(this.expectancy/1.88);
    this.exJupiter = Math.floor(this.expectancy/11.86);
    this.leftMercury = this.exMercury - this.mercury;
    this.leftVenus = this.exVenus - this.venus;
    this.leftMars = this.exMars - this.mars;
    this.leftJupiter = this.exJupiter - this.jupiter;
    this.overAge = this.age - this.expectancy;
    this.overMercury = Math.floor(this.overAge/.24);
    this.overVenus= Math.floor(this.overAge/.62);
    this.overMars= Math.floor(this.overAge/1.88);
    this.overJupiter= this.overAge/11.86;
  } 
  mercuryAge(){
    return Math.floor(this.age/.24);
  }
  venusAge(){
    // return this.age/.62
  }
  // marsAge(){
  //   return this.age/1.88
  // }
  // jupiterAge(){
  //   return this.age/11.86
  // }
  // yearsPastExpectancy(){
  //   if (this.age < this.expectancy){
  //     return this.expectancy -this.age;
  //   } else{
  //     return this.age -this.expectancy
  //   }
}
