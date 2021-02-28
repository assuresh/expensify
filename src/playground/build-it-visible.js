
class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

        this.state = {
            visibility: false
        }

    }
    
    handleToggleVisibility () {
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render () {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>


                {this.state.visibility && ( 
                    <div>
                        <p>Hey There. These are some details</p>    
                    </div>
                )}


            </div>
            )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let show = true;

// const onClickButton= (e) =>{
//     show = !show
//     render()
// }


// const appRoot = document.getElementById('app');

// const render = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClickButton}>{show ?'Show Details':'Hide Details'}</button>
//             {!show && ( 
//                 <div>
//                     <p>Hey. These are some details</p>    
//                 </div>
//             )}
//             { console.log('show ', show) }
//             { console.log('{show}', {show}) }
//             {console.log('Type of show', typeof(show))}
//             {console.log('Type of {show}', typeof({show}))}
            
//         </div> 
//     )
//     ReactDOM.render(template, appRoot);
    
// }

// render()

