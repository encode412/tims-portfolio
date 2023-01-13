import { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { name, email, message } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  
  return (
    <div name='contact' className='w-full pt-48 md:pt-[26rem] bg-[#0a192f] flex justify-center items-center p-4'>
        <form action='https://getform.io/f/ac34a35f-b9a5-46e2-83aa-5a3a43769cd9' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - encode.dev.tech@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 outline-none' type="text" placeholder='Name' name='name' value={name} onChange={onChange} />
            <input className='my-4 p-2 bg-[#ccd6f6] outline-none' type="email" placeholder='Email' name='email' value={email} onChange={onChange} />
            <textarea className='bg-[#ccd6f6] p-2 outline-none' name="message" rows="10" placeholder='Message' value={message} onChange={onChange} ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact