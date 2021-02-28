import React from 'react'

import AdddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         options: this.props.options
    //     };
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOpption = this.handleAddOpption.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
        
    // }
    state = {
        options: this.props.options
    }


    handleDeleteOptions = () => {
        this.setState(() =>({ options:[] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove !== option )
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        console.log('handlePick', this.state.options)
        alert(option)
    }

    handleAddOpption = (option) => {
        if(!option) {
            return 'Enter valid value to add item'
        } else if( this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState)=>({options: prevState.options.concat(option)}))
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


export default IndecisionApp
