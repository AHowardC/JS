function talk() {
	console.log(this)
	console.log(this.sound)	
}
let animal = {
	talk 
}
let cat = {
	sound: 'meow'
}
let dog = {
	sound: 'woof'
}
Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)
cat.talk()
dog.talk()