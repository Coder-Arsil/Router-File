import React from 'react'
import { useState, useReducer } from 'react'
function Hooks() {
    const control = (x, y) => {
        if (y === 'text') {
            return 'password'
        }
        else {
            return 'text'
        }
    }
    const [type, setType] = useReducer(control, 'password')
    return (
        <div>
            <input type={type} />
            <button onClick={() => setType(type)}>Click</button>
        </div>
    )
}
export default Hooks