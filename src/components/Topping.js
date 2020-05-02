import React, { useState, useEffect } from 'react';
// import Toppings from './Toppings'
import axios from 'axios';
import * as yup from 'yup';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import '../App.css';

const Topping = () => {

    const initialFormState = {
        size: '',
        sauce: '',
        toppings: '',
        instructions: '',
        quantity: '',
    }

    const [post, setPost] = useState([])
    const [serverError, setServerError] = useState('')
    const [formState, setFormState] = useState(initialFormState)
    const [isButtonDisabled, seIsButtonDisabled] = useState(true)
    const [errors, setErrors] = useState(initialFormState)

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({ ...errors, [e.target.name]: '' })
            })
            .catch(err => {
                console.log('error', err);
                setErrors({ ...errors, [e.target.name]: err.errors[0] })
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
        toppings: yup.boolean().oneOf([true], 'Please Choose a Topping'),
        instructions: yup.string().required('Please Choose a Topping'),
        quantity: yup.string().required(),
    })

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...initialFormState, 
            [e.target.name]: 
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }
        validateChange(e);
        setFormState(newFormData);
    }

    return (
        <form onSubmit={formSubmit} className='form'>
            {serverError ? <p className='error'>{serverError}</p> : null}
            <h3>Build Your Own Pizza</h3>
            <div className='formWidth'>
                {/* Size of Pizza */}
                <label htmlFor='size' className='size'>
                <h4 className='sizeHeader'>Choice of Size</h4>
                    Required
                    <select 
                        id='size' 
                        name='size' 
                        onChange={inputChange} 
                        data-cy="size">
                        <option value='1'>Select</option>
                        <option value='2'>Small</option>
                        <option value='3'>Medium</option>
                        <option value='4'>Large</option>
                    </select>
                </label>
                {/* Sauce Choice */}
                <label htmlFor='sauce' className='sauce' className='sauce'>
                    <h4 className='sauceHeader'>Choice of Sauce</h4>
                    <p>Required</p>
                    {/* Original Sauce */}
                    <input 
                        type='radio' 
                        id='original' 
                        name='sauce' 
                        value='original' />
                    <label htmlFor='original'>Original Red</label><br/>
                    {/* Garlic Sauce */}
                    <input 
                        type='radio' 
                        id='garlic' 
                        name='sauce' 
                        value='garlic'
                        />
                    <label htmlFor='garlic'>Garlic Ranch</label><br/>
                    {/* BBQ Sauce */}
                    <input 
                        type='radio' 
                        id='bbq' 
                        name='sauce' 
                        value='bbq'
                        />
                    <label htmlFor='bbq'>BBQ Sauce</label><br/>
                    {/* Spinach Sauce */}
                    <input 
                        type='radio' 
                        id='spinach' 
                        name='sauce' 
                        value='spinach'
                        />
                    <label htmlFor='spinach'>Spinach Alfredo</label>
                </label>
                {/* ReactStrape checkboxes */}
                    <FormGroup className='toppings'>
                        <Label for='toppings' className='toppingsHeader'>Add Toppings</Label>
                        <div className='toppingsCheckbox'>
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Pepperoni'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='sausage'
                                label='Sausage'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='canadianbacon'
                                label='Canadian Bacon'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Spicy Italian Sausage'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Grilled Chicken'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Onions'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Green Pepper'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Diced Tomatoes'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Black Olives'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Roasted Garlic'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Artichoke Hearts'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Three Cheese'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Pineapple'
                                className='topping'
                            />
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Extra Cheese'
                                className='topping'
                            />
                        </div>
                        <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='No Toppings'
                            />
                    </FormGroup>
                {/* Toppings div */}
                {/* <div>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="pepperoni"
                        />
                        Pepperoni
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="sausage"
                        />
                        Sausage
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="bacon"
                        />
                        Canadian Bacon
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="spicy"
                        />
                        Spicy Italian Sausage
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="chicken"
                        />
                        Grilled Chicken
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="onions"
                        />
                        Onions
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="pepper"
                        />
                        Green Pepper
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="tomatoes"
                        />
                        Diced Tomatoes
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="olives"
                        />
                        Black Olives
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="garlic"
                        />
                        Roasted Garlic
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="artichoke"
                        />
                        Artichoke Hearts
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="threecheese"
                        />
                        Three Cheese
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="pineapple"
                        />
                        Pineapple
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="extracheese"
                        />
                        Extra Cheese
                    </label>
                    <label htmlFor='toppings' className='toppings'>
                        <input 
                            type='checkbox' 
                            name='toppings' 
                            checked={formState.toppings}
                            onChange={inputChange}
                            value="notoppings"
                        />
                        No Toppings
                    </label>
                </div> */}
                {/* Instructions for extra order */}
                <label htmlFor='instructions'>
                <h4 className='instrHeader'>Special instructions</h4>
                    <textarea 
                        name='instructions' 
                        onChange={inputChange}
                        value={formState.instructions}
                        data-cy="instructions"
                    />
                </label>
                {/* Quantity of Pizza's */}
                <label htmlFor='quantity'>
                <select id='quantity' name='quantity' onChange={inputChange}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        <option value='13'>13</option>
                        <option value='14'>14</option>
                        <option value='15'>15</option>
                    </select>
                </label>
                <button disabled={isButtonDisabled} type='submit'>
                    Add to Order
                </button>
            </div>
        </form>
    )
}

export default Topping;