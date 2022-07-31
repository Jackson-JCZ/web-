class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
     }
}
const snake = new Animal('lily')
//继承的特性
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

//重写构造函数，在子类的构造函数中必须使用super调用父类的方法，否则会出错
class Cat extends Animal {
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    run() {
        return 'Meow, ' + super.run()
    }
}
const small_cat = new Cat('mao')
console.log(small_cat.run())