import React from 'react';
import Toppings from './Toppings'

const Topping = () => {
    const initialFormState = {
        position: '',
        sauce: '',
        toppings: '',
        instructions: '',
        quantity: '',
        number: '',
    }

    

    return (
        <div>
            <h3>Build Your Own Pizza</h3>
            <div>
                <h4>Choice of Size</h4>
                <label htmlFor='positions'>
                    Required
                    <select id='positions' name='positions' onChange={inputChange}>
                        <option value=''>Select</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>
                <fieldset>
                    <legend>Choice of Sauce</legend>
                    <p>Required</p>
                    <input type='radio' id='original' name='sauce'>
                        <label for='original'>Original Red</label>
                    </input><br></br>
                    <input type='radio' id='garlic' name='sauce'>
                        <label for='garlic'>Garlic Ranch</label>
                    </input><br></br>
                    <input type='radio' id='bbq' name='sauce'>
                        <label for='bbq'>BBQ Sauce</label>
                    </input><br></br>
                    <input type='radio' id='spinach' name='sauce'>
                        <label for='spinach'>Spinach Alfredo</label>
                    </input>
                </fieldset>
                <h4>Add Toppings</h4>
                <Toppings />
                <h4>Special instructions</h4>
                <label htmlFor='instructions'>
                    <textarea 
                        name='instructions' 
                        onChange={inputChange}
                        value={initialFormState.instructions}
                    />
                    {errors.motivation.length > 0 ? (
                        <p className="error">{errors.motivation}</p>
                    ) : null}
                </label>
                <label for='quantity'>
                    <input 
                        type='number' 
                        id='quantity' 
                        name='quantity' 
                        min='1' 
                        max='20' />
                </label>
                <button disabled={isButtonDisabled} type='submit'>
                    Add to Order
                </button>
            </div>
        </div>
    )
}

export default Topping;