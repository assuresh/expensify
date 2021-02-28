
// with 'var', we can both redeclare and reassign both
// with 'let', we can not redeclare, but can reassign
// with 'const', we can not redeclare, and also can not reassign

// 'let' and 'const' are block scoped, but not 'var'
var nameVar = 'Andrew'
var nameVar = 'Mike';
console.log('nameVar', nameVar)

let nameLet = 'Jan';
//let nameLet = "Julie";
nameLet = "Julie";
console.log('nameLet', nameLet)

const nameConst = 'Frank'
//nameConst = 'Gunther'
console.log('nameConst', nameConst)