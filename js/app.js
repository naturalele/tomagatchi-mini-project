
class Tomagatchi {
	constructor(name){
		this.name = name;
		this.hunger = 0
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
	}
	eat(){
		if(this.hunger > 0){
		this.hunger -=1;
		}
	}
	sleep(){
		if(this.sleepiness > 0){
			this.sleepiness -=1;
		}
	}
	play(){
		if(this.boredom > 0){
			this.boredom -=1;
		}
	}
	// age(){
		
	// }
};

let meme = new Tomagatchi("Meme");

function moveRight() {
	$(".animate").animate({left: "+=50"}, 2000, function() {
		moveLeft();
	});
}

function moveLeft(){
	$(".animate").animate({left: "-=50"}, 2000, function () {
		setTimeout(moveRight, 50);
	});
}

setTimeout(moveRight, 50);


$('#submit').on('click', () => {

	console.log('click')
	console.log($('#character').val());
	const name = ($('#character').val());
	$(".name").hide();

	$('.character').append(`Your name is ${name}`);
	



let seconds = 0; 
const timePassing = () => {
	seconds++;
	if(seconds % 3 == 0){
		meme.age++;
	}
	meme.hunger++;
	console.log(`hunger: ${meme.hunger}`)
	meme.boredom++;
	console.log(`boredom: ${meme.boredom}`)
	meme.sleepiness++;
	console.log(`sleepiness: ${meme.sleepiness}`)
	if(meme.hunger > 9 || meme.boredom > 9 || meme.sleepiness > 9 || meme.age > 9){
		alert(`${name} has passed on to the next life. Blessed be the fruit!`);
		$(".animate").attr("src", "puke-rainbows-gif-10.gif").css("height", 400).css("width", 400).css("background-color", "white");
		$(".name").hide();

		clearInterval(timePasses);
	}
	displayStats();
};
const timePasses = setInterval(timePassing, 1000);
});



const displayStats = () => {
	$("span#hunger").text(meme.hunger);
	$("span#sleepiness").text(meme.sleepiness);
	$("span#boredom").text(meme.boredom);
	$("span#age").text(meme.age);
}

$("#food-button").on ('click', () => {
	meme.eat();
	$("span#hunger").text(meme.hunger);
	console.log("thank you for feeding me!");
});

$("#sleep-button").on ('click', () => {
	meme.sleep();
	$("span#sleepiness").text(meme.sleepiness);
	console.log("thank you for turning off the light!");
});

$("#play-button").on ('click', () => {
	meme.play();
	$("span#boredom").text(meme.boredom);
	console.log("thank you for playing with me!");
});








// Clear name after, append to character div in fun text/ change box to green










