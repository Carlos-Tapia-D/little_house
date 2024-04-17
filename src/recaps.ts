const myName:string = 'Carlos';
const myAge:number = 29;
const suma = (a:number) => {
  return a + a;
};

console.log('hi');
console.log(suma(3));

class Persona {
  private name;
  private age;
  constructor(name: string, age: string) {
    this.age = age;
    this.name = name;
  }
  getSummary() {
    return 'algo';
  }
}

console.log(new Persona('carlos', '12').getSummary());
