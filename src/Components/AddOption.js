
import React from 'react'

export default class AdddOption extends React.Component {
  state = {
      error: undefined 
  }
    
    handleAddOption= (e) => {
        e.preventDefault()
        console.log('sdfasdfsf')
        const option = e.target.elements.optionnn.value.trim();
        const error = this.props.handleAddOOption(option)
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


