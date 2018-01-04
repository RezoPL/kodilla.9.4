function drawTree(height) {
	for (var i = 0; i < height; i++) {
		var star = "";
		for (var j = 0; j < height - i; j++) {
			star += " ";
		}
		for (var j = 0; j < 2 * i + 1; j++) {
			star += '*';
		}
		console.log(star);
	}
}
drawTree(7);