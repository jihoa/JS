class Calculator {
    constructor(){
        this.value=0;
    }


    set(num){
        this.value=num;
    }

    clear(){
        this.value= 0;
    }

    add(num){
        this.value = this.value + num;
    }

    substract(num){
        this.value= this.value - num;
    }

    
    divide(num){
        this.value = this.value / num;
    }
}