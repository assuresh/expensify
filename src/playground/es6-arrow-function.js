function square(x) {
    return x * x;
}

console.log(square(3))

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x*x

console.log(squareArrow(35))

const getFirstName = (fullname) =>  fullname.split(' ')[0]

console.log(getFirstName('Mike Smith'))