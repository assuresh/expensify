
import React from 'react';

const EditExpensePage = (props) => {

    console.log(props) //props are coming for react router
    return (
        <div>
            Editing expense with Id: {props.match.params.id}
        </div>
    )
}


export default EditExpensePage;