
class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        
        this.state =  {
            //count: props.defaultCount,
            count: 0,
            name: 'Suresh'
        };
    }
    
    handleAddOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            }
        })
    };
    handleMinusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count -1
            }
        })
    }
    componentDidMount() {
        

            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10)
            if (!isNaN(count)) {
                this.setState(()=>({count:count}))
            }

        
    }

    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            console.log('Saving Data')
            localStorage.setItem('count', this.state.count)
        }
     
    }

    componentWillUnmount() {
        console.log('componentWillUnmount') 
    }

    handleReset() {
        this.setState((prevState)=>{
            return {
                count: 0
            }
        })
    }


    render(){
     

        return (
            <div>
                <p>{this.state.name}</p>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     defaultCount : 0
// }

ReactDOM.render(<Counter defaultCount={0}/>, document.getElementById('app'))

// let count = 0;
//  const addOne = () =>{
//     count++
    
//     console.log('addOne')
//     console.log(count)
//     renderCounderApp()
// }

// const minusOne = () =>{
//     count--
//     console.log('minusOne', count)
//     renderCounderApp()
// }

// const reset = () => {
//     count = 0;
//     console.log('reset', count)
//     renderCounderApp()
// }

// // function addOne(){
// //     count++
// //     console.log(count)
// // }


// const appRoot = document.getElementById('app');


// const renderCounderApp = () =>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
            
//         </div>
//     )
//     console.log('templateTwo', templateTwo)
//     ReactDOM.render(templateTwo, appRoot);
// }
// renderCounderApp()


// const user = {
//     //name: 'Suresh',
//     age: '6',
//     //location: 'Reno, Nevda'
// }

// // function getLocation (location) {
// //     if (location) {
// //         return location
// //     }  else {
// //         return 'Unknown'
// //     } 

// // }

// // function getLocation2 (location) {
// //     if (location) {
// //         return <p>Location: {location}</p>
// //     }  else { //This else returning undefined in NOT needed, at all
// //         return undefined
// //     } 

// // }

// // const template2 = (
// //     <div>
// //         <h1>{user.name? user.name : 'Anonymous'} </h1>
// //         {(user.age && user.age >= 10 )&& <p>Age: {user.age}</p>}
// //         <p>Location: {getLocation(user.location)}</p>
// //         {<h1>Some ddheader</h1>}
// //         {getLocation2(user.location)}
// //     </div>
// // );