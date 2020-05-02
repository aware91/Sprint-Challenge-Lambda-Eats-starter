import React from 'react';

const Topping = () => {
    const initialFormState = {
        position: '',
        sauce: '',
        toppings: '',
        instructions: '',
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
            </div>
        </div>
    )
}

export default Topping;