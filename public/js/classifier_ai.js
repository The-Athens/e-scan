// Original Neural network model. Still in progress but ran out of time for training, and fixing bugs.

// export default class NeuralNetwork{

//     constructor( inpLayer, hidLayer, outLayer ){
//         this.inpLayer = inpLayer
//         this.hidLayer = hidLayer
//         this.outLayer = outLayer

//         // Weights and bias
//         this.weightsIH = Math.random( 1 )
//         this.weightsOH = Math.random( 1 )

//         this.biashIH =  Math.random( 1 )
//         this.biashOH =  Math.random( 1 )

//         this.learningRate = 0.1
//         this.isPredict = true
//     }

//     async getState(){
//         const {
//                 inpLayer, 
//                 hidLayer,
//                 outLayer,
//                 learningRate,
//                 biasIH,
//                 biasOH,
//                 weightsIH,
//                 weightsOH    
//             } = await fetch('/get-neural-state')
//             .then( res => res.json() )
//             .then( data => {
//                 console.log(data)
//                 return data 
//             })
//             .catch( err => { console.log(err) })

//         this.inpLayer = inpLayer
//         this.hidLayer = hidLayer
//         this.outLayer = outLayer

//         // Weights and bias
//         this.weightsIH = weightsIH
//         this.weightsOH = weightsOH

//         this.biashIH =  biasIH
//         this.biashOH =  biasOH

//         this.learningRate = learningRate    
//     }

//     async setState( params ){
//         const response = await fetch('/set-neural-state', {
//             method: 'POST', 
//             mode: 'cors', 
//             cache: 'no-cache', 
//             credentials: 'same-origin', 
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             redirect: 'follow', 
//             referrerPolicy: 'no-referrer', 
//             body: JSON.stringify(params) 
//           });
        
//         return response.json()
//     }

//     getData (){
//         const inpLayer = this.inpLayer
//         const hidLayer = this.hidLayer
//         const outLayer = this.outLayer
//         const learningRate = this.learningRate
//         const biasIH = this.biasIH
//         const biasOH = this.biasOH
//         const wieghtsIH = this.wieghtsIH
//         const wieghtsOH = this.wieghtsOH
        
//         return {
//             inpLayer, 
//             hidLayer,
//             outLayer,
//             learningRate,
//             biasIH,
//             biasOH,
//             wieghtsIH,
//             wieghtsOH    
//         }
//     }

//     oneHot ( desire ){
//         const target = nj.zeros((this.outLayer, 1))
//         target[desire] = 1
//         return target
//     }

//     sigmoid ( x ){
//         return 1 / (1 + nj.exp(-x))
//     }

//     sigmoidDerivative ( x ){
//         return this.sigmoid( x ) * ( 1 - this.sigmoid( x ) )
//     }

//     setIsPredict ( val ){
//         this.isPredict = val
//     }

//     // DIY functions
//     newAxis ( arr ){
//         const newArr = nj.array()
//         for( let i = 0; i < arr.size; i++){
//             newArr.push( [arr[i]] )
//         }
//         return newArr
//     }

//     async feedForward( inp ){
//         await this.getState()

//         let input = this.newAxis( inp )

//         let hidden = nj.dot( this.weightsIH, input )
//         hidden = nj.add( hidden, this.biashIH )
//         hidden = this.sigmoid( hidden )

//         let output = nj.dot( this.weightsOH, hidden )
//         output = nj.add( output, this.biashOH )
//         output = this.sigmoid( output )

//         if( this.isPredict ){
//             return nj.argmax( output.flatten() )
//         }
//         else{
//             return { output, hidden, input }
//         }
//     }

//     trainAlgo ( inp, desire ){
//         this.isPredict = false

//         const { output, hidden, input } = this.feedForward( inp )
//         const target = desire

//         const Oerr = nj.subtract( target, output )

//         let gradientOH = this.sigmoidDerivative( inp )
//         gradientOH = nj.multiply( gradientOH, Oerr )
//         gradientOH = nj.multiply( gradientIH, this.learningRate )

//         const deltaWHO = nj.dot( gradientOH, nj.transpose(hidden) )
        
//         this.weightsOH = nj.add( this.gradientOH, deltaWHO )

//         this.biasHO = nj.add( this.biashOH, gradientOH )

//         const Herr = nj.dot( nj.transpose( this.weightsOH ), Oerr )

//         let gradientIH = this.sigmoidDerivative( hidden )
//         gradientIH = nj.multiply( gradientIH, Herr )
//         gradientIH = nj.multiply( gradientIH, this.learningRate )

//         const deltaWIH = nj.dot( gradientIH, np.transpose( input ) )

//         this.weightsIH = nj.add( this.weightIH, deltaWIH )
//         this.biasIH = nj.add( this.biasIH, gradientIH )

//         // Saving state of the Neural Network
//         const data = this.getData()
//         this.setState( data )
//     }

//     predict ( xtest ){
//         const m = xtest.shape[0]
//         const y = nj.zeros((m, 0))

//         for(let i = 0; i < y.size; i++){
//             y[i] = this.feedForward( xtest[i] )
//         }

//         return y
//     }
// }


// // export default class Classifier{
// //     constructor(data, desiredOutput){
// //         this.data = data
// //         this.desire = desiredOutput

// //         this.options = {
// //             task: 'classification',
// //             debug: true
// //           }
          
// //         this.nn = ml5.neuralNetwork(this.options);
          
          
// //         this.data.forEach(item => {
// //             this.inputs = {
// //               r: item.r, 
// //               g: item.g, 
// //               b: item.b
// //             };
          
// //             this.nn.addData(this.inputs, this.desire);
// //         });
          
// //         this.nn.normalizeData();
        
// //         this.trainingOptions = {
// //         epochs: 32,
// //         batchSize: 12
// //         }
        
// //         this.nn.train(this.trainingOptions, this.finishedTraining);
        
          
// //     }

// //     finishedTraining(){
// //         this.classify();
// //     }
      
// //     classify(){
// //         this.input = {
// //           r: 255, 
// //           g: 0, 
// //           b: 0
// //         }
// //         this.nn.classify(this.input, this.handleResults);
// //     }
      
// //     handleResults(error, result) {
// //         if(error){
// //         console.error(error);
// //         return;
// //         }
// //         console.log(result); 
// //     }

// // }
