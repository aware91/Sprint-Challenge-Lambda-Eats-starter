import React, { useState, useEffect } from 'react';
// import Toppings from './Toppings'
import axios from 'axios';
import * as yup from 'yup';
import { CustomInput, FormGroup, Label } from 'reactstrap';
import '../App.css';

const Topping = () => {

    const initialFormState = {
        name: '',
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
                name: '',
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
        name: yup.string().required("Name is a required field"),
        size: yup.string().required('Must Choose a Size'),
        sauce: yup.string().required('Must Choose a Sauce'),
        toppings: yup.boolean().oneOf([true], 'Please Choose a Topping'),
        instructions: yup.string().required('Please Input your Special Instructions'),
        quantity: yup.string().required(),
    })

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
            e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }; 
        validateChange(e); 
        setFormState(newFormData);
    }

    return (
        <form onSubmit={formSubmit} className='form'>
            {serverError ? <p className='error'>{serverError}</p> : null}
            <label htmlFor="name" className='name'>
                <h4 className='nameHeader'>Name</h4>
                <input
                id="name"
                type="text"
                name="name"
                onChange={inputChange}
                value={formState.name}
                data-cy="name"
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </label>
            <div className='formWidth'>
                {/* Size of Pizza */}
                <label htmlFor='size' className='size'>
                <h4 className='sizeHeader'>Choice of Size</h4>
                    <p>Required</p>
                    <select 
                        id='size' 
                        name='size' 
                        onChange={inputChange} 
                        data-cy="size">
                        <option value='select'>Select</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                {/* Sauce Choice */}
                <label htmlFor='sauce' className='sauce'>
                    <h4 className='sauceHeader'>Choice of Sauce</h4>
                    <p>Required</p>
                    {/* Original Sauce */}
                    <input 
                        type='radio' 
                        id='original' 
                        name='sauce' 
                        value='original'
                        onChange={inputChange}
                        />
                    <label htmlFor='original'>Original Red</label><br/>
                    {/* Garlic Sauce */}
                    <input 
                        type='radio' 
                        id='garlic' 
                        name='sauce' 
                        value='garlic'
                        onChange={inputChange}
                        />
                    <label htmlFor='garlic'>Garlic Ranch</label><br/>
                    {/* BBQ Sauce */}
                    <input 
                        type='radio' 
                        id='bbq' 
                        name='sauce' 
                        value='bbq'
                        onChange={inputChange}
                        />
                    <label htmlFor='bbq'>BBQ Sauce</label><br/>
                    {/* Spinach Sauce */}
                    <input 
                        type='radio' 
                        id='spinach' 
                        name='sauce' 
                        value='spinach'
                        onChange={inputChange}
                        />
                    <label htmlFor='spinach'>Spinach Alfredo</label>
                </label>
                {/* ReactStrape checkboxes */}
                    <FormGroup className='toppings'>
                        <Label htmlFor='toppings' className='toppingsHeader'>
                            Add Toppings
                        </Label>
                        <div className='toppingsCheckbox'>
                            <CustomInput
                                type='checkbox'
                                id='pepperoni'
                                label='Pepperoni'
                                className='topping'
                                name='toppings'
                                value='pepperoni'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='sausage'
                                label='Sausage'
                                className='topping'
                                name='toppings'
                                value='sausage'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='canadianbacon'
                                label='Canadian Bacon'
                                className='topping'
                                value='canadianbacon'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='spicysausage'
                                label='Spicy Italian Sausage'
                                className='topping'
                                value='spicysausage'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='grilledchicken'
                                label='Grilled Chicken'
                                className='topping'
                                value='grilledchicken'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='onions'
                                label='Onions'
                                className='topping'
                                value='onions'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='greenpepper'
                                label='Green Pepper'
                                className='topping'
                                value='greenpepper'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='dicedtomatoes'
                                label='Diced Tomatoes'
                                className='topping'
                                value='dicedtomatoes'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='blackolives'
                                label='Black Olives'
                                className='topping'
                                value='blackolives'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='garlic'
                                label='Roasted Garlic'
                                className='topping'
                                value='garlic'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='artichoke'
                                label='Artichoke Hearts'
                                className='topping'
                                value='artichoke'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='threecheese'
                                label='Three Cheese'
                                className='topping'
                                value='threecheese'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='pineapple'
                                label='Pineapple'
                                className='topping'
                                value='pineapple'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                            <CustomInput
                                type='checkbox'
                                id='extracheese'
                                label='Extra Cheese'
                                className='topping'
                                value='extracheese'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                        </div>
                        <CustomInput
                                type='checkbox'
                                id='notoppings'
                                label='No Toppings'
                                value='notoppings'
                                checked={formState.toppings}
                                onChange={inputChange}
                            />
                    </FormGroup>
                {/* Instructions for extra order */}
                <label htmlFor='instructions' className='instructions'>
                <h4 className='instrHeader'>Special instructions</h4>
                    <textarea 
                        name='instructions' 
                        onChange={inputChange}
                        value={formState.instructions}
                        data-cy="instructions"
                        className='instrBox'
                    />
                </label>
                {/* Quantity of Pizza's */}
                <label htmlFor='quantity' className='quantity'>
                    <h4>Quantity</h4>
                <select id='quantity' name='quantity' onChange={inputChange} data-cy="quantity">
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
            <button disabled={isButtonDisabled} type='submit'>Add to Order</button>
            </div>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </form>
    )
}

export default Topping;