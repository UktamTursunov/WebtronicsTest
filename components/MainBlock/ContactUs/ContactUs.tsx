import React from 'react';
import styles from '../../../styles/Main/ContactUs.module.scss'
import {SecondTitle} from "../../Titles/SecondTitle/SecondTitle";
import {Input} from "../../Input/Input";
import {Button} from "../../Button/Button";
import { useForm } from "react-hook-form";
import {fetchPostsRequest} from "../../../store/contacts/action";
import { useDispatch } from 'react-redux';

export const ContactUs = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        dispatch(fetchPostsRequest(data))
    }

    return (
        <div id='GetInTouch' className={styles.contactUsBlock}>
            <SecondTitle>Contact Us</SecondTitle>
            <p className={styles.contactUsDescription}>Do you have any kind of help please contact with us.</p>
            <div >
                <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
                    <Input label="name" type='text' register={register} required placeholder='name'/>
                    <Input label="phone" type='phone' register={register} required placeholder='phone'/>
                    <Input label="email" type='email' register={register} required placeholder='email'/>
                    <Button type='submit' value='Send' width='493'/>
                </form>
            </div>
        </div>
    );
};