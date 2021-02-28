//arguments object - no longer bound with arrow functions
// const add = function (a, b) {
//     console.log(arguments);
//     return a +b;
// }

const add = (a, b) => {
    //console.log(arguments); //This will throw an run time error
    return a +b;
}
console.log(add(455,1, 3300))

//this keyword- no longer bound

const user = {
    name: 'Andrew',
    cities: ['philaelphia', 'Reno', 'Nellore'],
    //printPlacesLived: function ( ) {
    printPlacesLived() {    
        // //regular anonymous function, there is no this bound, it is set equal to undefined 
        // // The below gives an error as 'this' is undefined
        // this.cities.forEach( function (city) {
        //     console.log(this.name + ' has lived in ' + city)
        // })

        //ES6 arrow functions no longer bind their own 'this' value 
        //but they get their 'this' value from the context they were created in (parents 'this' value)
        
        // const cityMessages = this.cities.map((city)=>{
        //     return this.name + ' has lived in ' + city
        // })
        //return cityMessages;
        return this.cities.map((city)=> this.name + ' has lived in ' + city )
        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })

        // Can't use arrow functions for methods at the arrow functions don't bound their own this value
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1 , 2, 3],
    multiplyBy: 20,
    multiply () {
        return this.numbers.map((num)=> num * this.multiplyBy)
    }
}

console.log(multiplier.multiply())