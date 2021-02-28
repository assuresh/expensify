import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './Components/Indecision'


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))


// //const template = React.createElement('p', {}, 'testing 124')
//  const template = <p>Testing the 12333344</p>;


// class OldSyntax {
//     constructor() {
//         this.name = 'Suresh'
//         this.getGreeting = this.getGreeting.bind(this)
//     }
//     getGreeting () {
//         return `Hi. My name is ${this.name}.`
//     }
// }
// const oldsyntax = new OldSyntax()
// // console.log(oldsyntax)
// console.log(oldsyntax.getGreeting())

// //we get an error with this
// const getGreet = oldsyntax.getGreeting
// console.log(getGreet())
// //To fix the error, we need a this binding in the constructor

// /****************************** */
// class NewSyntax {
//     name = 'Jan'
//     getGreeting = () =>{
//         return `Hi. My name is ${this.name}.`
//     }
// }
// const newsyntax = new NewSyntax()
// //console.log(newsyntax)

// const getGreetNew = newsyntax.getGreeting
// console.log(getGreetNew())

// // ReactDOM.render(template, document.getElementById('app'))

// //import validator from 'validator';
// //console.log(validator.isEmail('tests@dfdesf.com'))

// //import subtractt, {square, add} from './utils.js'
// // console.log('app.js is urnn444ign!!')
// // console.log(square(4))
// // console.log(add(400, 23))
// // console.log(subtractt(400, 20))


// // import isSenior, {canDrink, isAdult  } from "./person.js";
// // console.log(canDrink(4))
// // console.log(isAdult(400))
// // console.log(isSenior(4))

// const template = (
//     <div>
//         <h1>Page Title!!</h1>
//         <p>This is my page</p>
//     </div>
// )

// // const Layout = (props) =>{
// //     return (
// //         <div>
// //         <p>Header</p>
// //         {props.content} 
// //         <p>Footer</p>
// //         </div>
// //     )
// // }
// // ReactDOM.render((<Layout content={template} />), document.getElementById('app'))


// const Layout = (props) =>{
//     return (
//         <div>
//         <p>Header</p>
//         {props.children} 
//         <p>Footer</p>
//         </div>
//     )
// }
// //ReactDOM.render((<Layout><p>This in inside</p></Layout>), document.getElementById('app'))



// // ReactDOM.render((
// //     <Layout>
// //         <div>
// //             <h1>Page Title*!!</h1>
// //             <p>This is my page</p>
// //         </div>
// //     </Layout>
// //     ), document.getElementById('app'))


// ReactDOM.render((
//     <Layout>
//         <h1>Page Title!*!!</h1>
//         <p>This is my page</p>
//     </Layout>
//     ), document.getElementById('app'))



// // ReactDOM.render((
// //     <Layout>
// //         {template}
// //     </Layout>
// //     ), document.getElementById('app'))
