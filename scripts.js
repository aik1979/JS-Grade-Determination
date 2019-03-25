for (let stuNum = 1; stuNum < 21; stuNum++) {
	let score = Math.floor(Math.random() * 51) + 50;
	if (score >= 93) {
		console.log('Student #' + stuNum + "'s score of " + score + ' is an A.');
	} else {
		if (score >= 83) {
			console.log('Student #' + stuNum + "'s score of " + score + ' is an B.');
		} else {
			if (score >= 73) {
				console.log('Student #' + stuNum + "'s score of " + score + ' is an C.');
			} else {
				if (score >= 66) {
					console.log('Student #' + stuNum + "'s score of " + score + ' is an D.');
				} else {
					console.log('Student #' + stuNum + "'s score of " + score + ' is an F.');
				}
			}
		}
	}
}
