import React, { useState, useEffect } from 'react';
import Toppings from './Toppings'
import axios from 'axios';
import * as yup from 'yup';

const Topping = () => {
    const [post, setPost] = useState([])
    const [serverError, setServerError] = useState('')
    const [formState, setFormState] = useState(initialFormState)
    const [isButtonDisabled, seIsButtonDisabled] = useState(true)
    const [error, setError] = useState(initialFormState)

    const initialFormState = {
        size: '',
        sauce: '',
        toppings: '',
        instructions: '',
        quantity: '',
    }

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({ ...error, [e.target.name]: '' })
            })
            .catch(err => {
                console.log('error', err);
                setError({ ...errors, [e.target.name]: err.errors[0] })
            })
    }

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log('valid', valid);
            seIsButtonDisabled(!valid);
        })
    }, [formState])

    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
            setPost(res.data);
            console.log('success', post)
            setFormState({
            size: '',
            sauce: '',
            toppings: '',
            instructions: '',
            quantity: '',
            });
            setServerError(null);
            })
            .catch(err => {
            setServerError("oops! something happened!");
        });
    };

    const formSchema = yup.object().shape({
        size: yup.string().required('Must Choose a Size'),
        sauce: yup.string().required('Must Choose a Sauce'),
        instructions: yup.boolean().oneOf([true], 'Please Choose a Topping'),
        quantity: yup.string().required(),
    })

    return (
        <form onSubmit={formSubmit}>
            {serverError ? <p className='error'>{serverError}</p> : null}
            <h3>Build Your Own Pizza</h3>
            <div>
                <h4>Choice of Size</h4>
                <label htmlFor='size'>
                    Required
                    <select id='size' name='size' onChange={inputChange}>
                        <option value=''>Select</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>
                <fieldset>
                    <legend>Choice of Sauce</legend>
                    <p>Required</p>
                    <input type='radio' id='original' name='sauce' value='original'>
                        <label for='original'>Original Red</label>
                    </input><br></br>
                    <input type='radio' id='garlic' name='sauce' value='garlic'>
                        <label for='garlic'>Garlic Ranch</label>
                    </input><br></br>
                    <input type='radio' id='bbq' name='sauce' value='bbq'>
                        <label for='bbq'>BBQ Sauce</label>
                    </input><br></br>
                    <input type='radio' id='spinach' name='sauce' value='spinach'>
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
                        max='20'
                        value='1'
                        />
                </label>
                <button disabled={isButtonDisabled} type='submit'>
                    Add to Order
                </button>
            </div>
        </form>
    )
}

export default Topping;