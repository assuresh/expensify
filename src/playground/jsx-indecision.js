console.log("app.js is running!!!")

const app = {
    title: 'Indecision App',
   // subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) =>{
    e.preventDefault()

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        render()
    }
}

const onRemoveAll = (e) =>{
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app');

// JSX doesn't supppor objects, it does support numbers, strings, arrays
// JSX doesn't render these - null, undefined, true
// {
//     [99, 98, 1001, 'Suresh', null, undefined, true]
// }
const numbers = [55, 1010, 119]
const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p> }
            <p> {app.options.length >0 ? 'Here are your options' :'No options' }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                // numbers.map((number)=>{
                //     return <p key={number}>Number: {number}</p>
                // })
            }
            <ol>
            {
                app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <p>{true}</p>
            <form onSubmit={onFormSubmit}>
                <input type = "text" name= "option"/>
                <button>Add option</button>
            </form>
        </div> 
    )
    ReactDOM.render(template, appRoot);
}


render()





