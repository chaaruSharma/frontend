
//parent class

class laptop{
    constructor(ram,processor,generation){
        this.ram=ram;
        this.processor=processor;
        this.generation=generation;
    }
     displayMessage(){
        console.log(
            `laptop Spec :: RAM ${this.ram}- PROCESSOR ${this.processor}- GEN ${this.generation} - Modelname ${this.modelname} -price ${this.price}`
        );
    }
    
}

// child class
class Dell extends laptop{
    constructor(ram,processor,generation,modelname,price){
        super(ram,processor,generation)
        this.modelname=modelname;
        this.price=price;
    }
   
}
const Dell1= new Dell("8GB","intel","i5","3000","80000");
console.log(Dell1);
const Dell2= new Dell("34Gb","linux","i8","15000","58000");
console.log(Dell2);
Dell1.displayMessage();
Dell2.displayMessage();