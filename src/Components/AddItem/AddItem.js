import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        console.log({ ...data, email: user.email })
        const url = `https://dry-citadel-76897.herokuapp.com/items`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...data, email: user.email })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast("Add a new perfume successfully.")
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h3 className='mt-5'>Add a new perfume</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='supplier Name' {...register("supplierName")} />

                <input className='mb-2' placeholder="Photo url"  {...register("picture")} />
                <input className='mb-2' placeholder="Price" type="number" {...register("price")} />
                <input className='mb-2' placeholder="quantity" type="number" {...register("quantity")} />
                <input className='my-btn mb-5 text-white fw-bold p-2 rounded-pill w-25 mx-auto' type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddItem;