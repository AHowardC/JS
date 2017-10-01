dog = {
	sound: 'woof',
	talk: function(){
		console.log(this.sound)
	}
}

let button = document.getElementById('myButton')

button.addEventListener('click', dog.talk.bind(dog))
