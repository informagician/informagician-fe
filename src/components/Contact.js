import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data)

    return(
        <section className="contact">
            <div className="container">
                <h2>Contact Page</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue="Your Name" ref={register} />
                </form>
            </div>
        </section>
    )
}

export default Contact