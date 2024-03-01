//Part 1:

fetch("http://numbersapi.com/7?json")
	.then((response) => response.json())
	.then((data) => {
		console.log(data.text);
	});

fetch("http://numbersapi.com/1,2,3?json")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		for (let number in data) {
			console.log(data[number].text);
		}
	});

for (let i = 0; i < 4; i++) {
	fetch("http://numbersapi.com/7?json")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.text);
		});
}

//Part 2:

fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
	.then((response) => response.json())
	.then((data) => {
		let card = data.cards[0];
		console.log(`${card.value} of ${card.suit}`);
	});

fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
	.then((response) => response.json())
	.then((data) => {
		let deck_id = data.deck_id;
		let card1 = data.cards[0];
		console.log(`${card1.value} of ${card1.suit}`);
		return fetch(
			`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
		);
	})
	.then((response) => response.json())
	.then((data) => {
		let card2 = data.cards[0];
		console.log(`${card2.value} of ${card2.suit}`);
	});

window.onload = function () {
	let deck_id = null;
	let button = document.querySelector("button");
	let cardImage = document.querySelector("img");

	fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
		.then((response) => response.json())
		.then((data) => {
			deck_id = data.deck_id;
		});

	button.onclick = function () {
		fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
			.then((response) => response.json())
			.then((data) => {
				let card = data.cards[0];
				cardImage.src = card.image;
			});
	};
};
