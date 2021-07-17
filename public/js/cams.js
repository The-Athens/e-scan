//import Classifier from '/public/js/classifier_ai.js'

let canvas = document.createElement('canvas').getContext('2d')
let video = document.querySelector("#vid")

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
	navigator.mediaDevices.getUserMedia({video: true}).then((stream) =>{

		video.srcObject = stream
		video.play()

		// const image = new Image()
	});
}