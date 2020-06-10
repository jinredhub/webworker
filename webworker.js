

// waits for activity from the page
this.onmessage = function(e){
	console.log('e: ', e);
	if(e.data.addThis !== undefined);

	// wrap message with result then send it back
	this.postMessage({
		result: e.data.addThis.num1 + e.data.addThis.num2
	});
}