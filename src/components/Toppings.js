import React from 'react';

const Toppings = () => {

    return (
        <div>
            <label htmlFor='toppings' className='toppings'>
                <input 
                    type='checkbox' 
                    name='toppings' 
                checked={initialFormState.toppings}
                        onChange={inputChange}
                />
                Pepperoni
            </label>
            <label htmlFor='toppings' className='toppings'>
                <input 
                    type='checkbox' 
                    name='toppings' 
                checked={initialFormState.toppings}
                        onChange={inputChange}
                />
                Sausage
            </label>
            <label htmlFor='toppings' className='toppings'>
                <input 
                    type='checkbox' 
                    name='toppings' 
                checked={initialFormState.toppings}
                        onChange={inputChange}
                />
                Canadian Bacon
            </label>
            <label htmlFor='toppings' className='toppings'>
                <input 
                    type='checkbox' 
                    name='toppings' 
                checked={initialFormState.toppings}
                        onChange={inputChange}
                />
                Spicy Italian Sausage
            </label>
        </div>
    )
}

export default Toppings;