// function talk() {
// 	console.log(this)
// 	console.log(this.sound)	
// }
// let animal = {
// 	talk 
// }
// let cat = {
// 	sound: 'meow'
// }
// let dog = {
// 	sound: 'woof!!'
// }
// let prarieDog = {
// 	howl: function(){
// 		console.log(this.sound.toUpperCase())
// 	}
// }
// Object.setPrototypeOf(cat, animal)
// Object.setPrototypeOf(dog, animal)
// Object.setPrototypeOf(prarieDog, dog)
// cat.talk()
// dog.talk()
// prarieDog.howl()

// function Person(saying) {
// 	this.saying = saying
// }

// Person.prototype.talk = function(){
// 	console.log('I say:', this.saying)
// }
// function new(constructor){
// 	var obj = {}
// 	Object.setPrototypeOf(obj, constructor.prototype)
// 	constructor.apply(obj, [])
// }
// var	crockford = new (Person,'Semicolans! 1one1')
// crockford.talk()
var greetings = {
	greet1: 'wassup',
	greet2: 'hi',
	greet3: 'hello'

}
// console.dir(greetings)

var goodbyes = {
	goodbyes1: 'goodbye',
	goodbyes2: 'bye-bye',
	goodbyes3: 'bye',
	goodbyes4: 'see ya later',
	goodbyes5: 'later'
}
HiAndByes = [greetings, goodbyes]

console.dir(HiAndByes[1])























