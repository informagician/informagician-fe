import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data)

    return(
        <section className="contact" id="contact">
            <div className="container">
                <h2>Contact Page</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" placeholder="Your Name" ref={register} />
                    <input name="email" placeholder="Email Address" ref={register} />
                    <textarea placeholder="Message">

                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact