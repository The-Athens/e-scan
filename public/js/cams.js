import Classifier from '/public/js/classifier_ai.js'

let canvas = document.querySelector('#stream-canvas')
let ctx = canvas.getContext('2d')
let video = document.querySelector("#vid")

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
	navigator.mediaDevices.getUserMedia({video: true}).then((stream) =>{

		video.srcObject = stream
		video.play()

		if( video ){
			const requestInterval = setInterval(() => {
				const image = ctx.getImageData(0, 0, 600, 400);
				const pixels = image.data;
		
				let data = []
				let desire = [25, 40]

				for (var i = 0; i < pixels.length; i += 4) {
					data.push({
						r: 255 - pixels[i], 
						g: 255- pixels[i+1], 
						b: 255 - pixels[i+2]
					}) 				
				}
				let model = new Classifier(data, desire)

			}, 2000);
		}
		else{
			clearInterval(requestInterval)
		}
	});
}
