// a react component HAS to start with a UPPER CASE LETTER, other wise it won't render


// const obj = {
//     name:'Vikram',
//     getName() {
//         return this.name;
//     }
// }
// console.log(obj.getName()) //this works fine

// // const getName = obj.getName
// //console.log(getName()) 

// // the above line is broken, as 'this' is undefined. it is because the context 
// // where 'getName' and 'obj.getName' ran are different. 'obj.getName' ran in the 'obj' context 
// // and so has the 'this' binding. But, 'getName' ran in the gloabl context just like the below 
// // example where 'this' is not defined. So, we need to set the 'this' binding using the 'bind' method
// // like below

// const getName = obj.getName.bind(obj)
// console.log(getName()) 


// const getName2 = obj.getName.bind({name: 'Suresh'})
// console.log(getName2()) 

// const func = function() {
//     console.log(this)
// }
// func()


class IndecisionApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            options: this.props.options
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOpption = this.handleAddOpption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        
    }

    componentDidMount() {
        
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(()=>({options: options}))
            }
        }catch (e) {
                //do nothing
        }
        
    }

    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            console.log('Saving Data')
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
     
    }

    componentWillUnmount() {
        console.log('componentWillUnmount') 
    }

    // handleDeleteOptions () {
    //     this.setState(()=>{
    //         return {
    //             options: []
    //         }
    //     })
    // }
    handleDeleteOptions () {
        this.setState(() =>({ options:[] }))
    }

    handleDeleteOption (optionToRemove) {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove !== option )
        }))
    }
    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        console.log('handlePick', this.state.options)
        alert(option)
    }

    handleAddOpption (option) {
        if(!option) {
            return 'Enter valid value to add item'
        } else if( this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }


        // this.setState((prevState)=>{
        //    // const newArr = prevState.options.concat([option])
        //     const newArr = prevState.options.concat(option)
        //     console.log('new Aarr', newArr)
        //     return {
        //         options: newArr
        //     }
        // })

        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }
    render() {
        const title = 'Indeciddsion'
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header subtitle={subtitle}></Header>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                ></Action>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AdddOption handleAddOOption={this.handleAddOpption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

// class IndecisionApp extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header title="Test value"></Header>
//                 <Action></Action>
//                 <Options />
//                 <AdddOption />
//             </div>
//         );
//     }
// }

// class Header extends React.Component {

//     render () {

//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }

// }

const Header = (props) =>{
    return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
}

Header.defaultProps = {
    title: 'Indecision'
}

// class Header extends React.Component {

//     render () {
//         return <p>This is from Header</p>
//     }

// }
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I do?
            </button>
        </div>
    );  
}

// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handlePick')
//     // }
//     render () {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What Should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// class Options extends React.Component {
//     // constructor (props) {
//     //     super(props)
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this)
//     // }
    
//     // handleRemoveAll() {
//     // ******************************************************************************************************
//     // **************** because of using 'this' in this statement, 'this' binding in the constructor is 
//     // needed (last line in constructor). If there is no reference to 'this' in the callback, no need for 'this'
//     // binding in the constructor.
//     // ******************************************************************************************************
//     //     console.log(this.props.options) 
//     //      alert('handleRemoveAll')
//     // }
    
//     render () {
//         return (
//             <div>
//                 {   // <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> 
//                     // instead of binding 'this' like the above which will bind everytime the 
//                     // componenet re-renders. we can do it just once in the construction
//                 }
                
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                

//                 {
//                     // this.props.options.map((option)=>{
//                     //     return <p key={option}> {option}</p>
//                     // }) 
//                    // this.props.options.map((option)=> {return <Option option={option}/>})
                   
//                     this.props.options.map((option, index)=> <Option key={index }option={option}/>)
//                 }

//             </div>
//         );
//     }
// }
const Options = (props)=>{
    return (
            <div>
               
                <button onClick={props.handleDeleteOptions}>Remove All</button> 
                {props.options.length === 0 && <p>Please add an options to get started!</p>}               
                {                    
                    props.options.map((option, index)=> (
                        <Option 
                            key={index } 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }

            </div>
        );
}

// class Option extends React.Component {
//     render () {
//         return (
//             <div>
//                 {this.props.option}
//             </div>
//         );
//     }
// }
const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    );
}


class AdddOption extends React.Component {
    constructor (props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }

    }
    
    handleAddOption (e) {
        e.preventDefault()

        const option = e.target.elements.optionnn.value.trim();

        const error = this.props.handleAddOOption(option)
       // console.log('hanleAddOption-eerr', error)
        // this.setState(()=>{
        //     return {
        //        error : error
        //     }
        // })
        this.setState(()=>({error}))

        if (!error) {
            e.target.elements.optionnn.value = ''
        }

    }
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type = "text" name= "optionnn"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


// const jsx = (
//     <div>
//         <Header></Header>
//         <Action></Action>
//         <Options />
//         <AdddOption />
//     </div>
// )

// ReactDOM.render(jsx, document.getElementById('app'))


// const User = (props) => {
//     return (
//         <div>
//             <p> Name: {props.name}</p>
//             <p> Name: {props.age}</p>            
//         </div>
//     )
// }

// ReactDOM.render(<User name="Suresh" age="22" />, document.getElementById('app'))

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))