class BMI
{
    constructor(height, weight)
    {
        this.height = height; //local instance of height in class
        this.weight = weight; //local instance of weight in class
    }
    calculateBMI() // add method
    {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}
let MyBmi = new BMI(1.77,71.0) //invoke instance of class
let calcBMI = MyBmi.calculateBMI();
console.log(calcBMI);