import React from 'react';

function Logout(props) {
    // console.log(props)
    return (
        <div>
            <h1>Welcome </h1>
            <button onClick={()=> props.history.push('/')} className="btn btn-dark">Logout</button>
        </div>
    );
}

export default Logout;