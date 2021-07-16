
export default class Classifier{
    constructor(data, desiredOutput){
        this.data = data
        this.desire = desiredOutput

        this.options = {
            task: 'classification',
            debug: true
          }
          
          // Step 3: initialize your neural network
        this.nn = ml5.neuralNetwork(this.options);
          
          
          // Step 4: add data to the neural network
        this.data.forEach(item => {
            this.inputs = {
              r: item.r, 
              g: item.g, 
              b: item.b
            };
          
            this.nn.addData(this.inputs, this.desire);
        });
          
          // Step 5: normalize your data;
        this.nn.normalizeData();
        
        // Step 6: train your neural network
        this.trainingOptions = {
        epochs: 32,
        batchSize: 12
        }
        
        this.nn.train(this.trainingOptions, this.finishedTraining);
        
        // Step 7: use the trained model
          
    }

    finishedTraining(){
        this.classify();
    }
      
      // Step 8: make a classification
    classify(){
        this.input = {
          r: 255, 
          g: 0, 
          b: 0
        }
        this.nn.classify(this.input, this.handleResults);
    }
      
      // Step 9: define a function to handle the results of your classification
    handleResults(error, result) {
        if(error){
        console.error(error);
        return;
        }
        console.log(result); // {label: 'red', confidence: 0.8};
    }

}
