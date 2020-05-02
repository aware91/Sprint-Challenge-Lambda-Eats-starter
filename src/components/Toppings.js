// import React, { useState } from 'react';
// import * as yup from 'yup';

// const Toppings = () => {

//     const initialFormState = {
//         toppings: ''
//     }

//     const [errors, setErrors] = useState(initialFormState);
//     const [formState, setFormState] = useState(initialFormState)

//     const formSchema = yup.object().shape({
//         toppings: yup.boolean().oneOf([true], 'Please Choose a Topping')
//     })

//     const validateChange = e => {
//         yup
//             .reach(formSchema, e.target.name)
//             .validate(e.target.value)
//             .then(valid => {
//                 setErrors({ ...errors, [e.target.name]: '' })
//             })
//             .catch(err => {
//                 console.log('error', err);
//                 setErrors({ ...errors, [e.target.name]: err.errors[0] })
//             })
//     }

//     const inputChange = e => {
//         e.persist();
//         const newFormData = {
//             ...initialFormState, 
//             [e.target.name]: 
//                 e.target.type === 'checkbox' ? e.target.checked : e.target.value
//         }
//         validateChange(e);
//         setFormState(newFormData);
//     }

//     return (
//         <div>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Pepperoni
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Sausage
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Canadian Bacon
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Spicy Italian Sausage
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Grilled Chicken
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Onions
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Green Pepper
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Diced Tomatoes
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Black Olives
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Roasted Garlic
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Artichoke Hearts
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Three Cheese
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Pineapple
//             </label>
//             <label htmlFor='toppings' className='toppings'>
//                 <input 
//                     type='checkbox' 
//                     name='toppings' 
//                     checked={initialFormState.toppings}
//                     onChange={inputChange}
//                 />
//                 Extra Cheese
//             </label>
//         </div>
//     )
// }

// export default Toppings;