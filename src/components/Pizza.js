import React, { useState, useEffect } from 'react';
import Topping from './Topping'


const Pizza = () => {


    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <img src='' alt='You Pizza Topping' />
            <Topping />
        </div>
    )
}

export default Pizza;