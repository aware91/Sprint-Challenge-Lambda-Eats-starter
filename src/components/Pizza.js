import React from 'react';
import Topping from './Topping'


const Pizza = () => {


    return (
        <div className='pizza'>
            <h2 className='pizzaHeader'>Build Your Own Pizza</h2>
            <img src='' alt='You Pizza Topping' className='pizzaImg' />
            <Topping />
        </div>
    )
}

export default Pizza;