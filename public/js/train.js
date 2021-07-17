// Original Neural network model. Still in progress but ran out of time for training, and fixing bugs.

// import NeuralNetwork from '/public/js/classifier_ai.js'

// const BASE_PATH = '/train_dataset/x'

// let nn
// let imgs_HDPE
// let imgs_PET
// let canvas, ctx

// function init() {
//     canvas = document.createElement('canvas')
//     ctx = canvas.getContext('2d')    

//     const inpLayer = 40000
//     const hidLayer = 200
//     const outLayer = 2
    
//     nn = new NeuralNetwork( inpLayer, hidLayer, outLayer )

//     train('HDPE', 76)
//     train('PET', 76)
    
// }

// function train( type , total ){
//     const WIDTH = 200
//     const HEIGHT = 200

//     for( let i = 1; i <= total; i++ ){
//         const image = new Image(WIDTH, HEIGHT)
//         image.src = `${BASE_PATH}/${type}/${i}.png` 
        
//         ctx.drawImage( image, 0, 0, WIDTH, HEIGHT )

//         const image_data = ctx.getImageData(0, 0, WIDTH, HEIGHT);
//         const pixels = image_data.data;

//         let data = []

//         let desire = type === 'HDPE' ? [1, 0] : [0, 1]
//         let count = 0

//         for (var j = 0; j < pixels.length; j += 4) {
//             count = pixels[j] + pixels[j + 1] + pixels[j + 2]
//             count = count > 510 ? 255 : count > 255 ? 127.5 : 0

//             data.push(count)
//         }

//         data = data.map(item => item / 255)
//         data = nj.array(data)

//         nn.trainAlgo(data, desire)
//     }
// }


// $(function(){
//     init()
// })