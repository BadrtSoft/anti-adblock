
	function adBlockNotDetected() {
		document.querySelector('#XGT-AdBlock-etkin').style.display = 'none';
		document.querySelector('#XGT-AdBlock-etkin-degil').style.display = 'block';
	}
	function adBlockDetected() {
		document.querySelector('#XGT-AdBlock-etkin').style.display = 'block';
		document.querySelector('#XGT-AdBlock-etkin-degil').style.display = 'none';
	}
	if(typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
		adBlockDetected();
	} else {
		var importFAB = document.createElement('script');
		importFAB.onload = function() {
			fuckAdBlock.onDetected(adBlockDetected)
			fuckAdBlock.onNotDetected(adBlockNotDetected);
		};
		importFAB.onerror = function() {
			adBlockDetected(); 
		};
		importFAB.integrity = 'sha256-4/8cdZfUJoNm8DLRzuKwvhusQbdUqVov+6bVj9ewL7U=';
		importFAB.crossOrigin = 'anonymous';
		importFAB.src = 'https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.js';
		document.head.appendChild(importFAB);
	}
