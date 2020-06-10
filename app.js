
// ///////////////////////////////////////////////////////////////////////////
// web worker has no access to: window object, document object, parent object.
// but it has access to 
// - navigator object, 
// - location object, 
// - XMLHttpRequest(ajax)
// - setTimeout()/clearTimeout() and setInterval/clearInterval()
// - application cache
// - import external scripts
//  spawning other web workers
// ///////////////////////////////////////////////////////////////////////////


// JS is single treaded app. You cannot run more than one script at the same time.
// ajax is non blocking, not multi treading.

// check if webworker func is available for this browser
if(window.Worker){
	// create new webworker. Worker code goes in this separate file
	var myWorker = new Worker('webworker.js');
	// create message
	var message = {
		addThis: {
			num1: 1,
			num2: 1
		}
	};

	// send message to webworker
	myWorker.postMessage(message);

	// waits responce from the worker
	myWorker.onmessage = function(e){
		const re = e.data.result;
		console.log('result: ', re);
		alert('result is ', re);
	}

	// to stop it
	// myWorker.terminate();

}