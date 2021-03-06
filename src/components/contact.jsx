import React, { useState } from 'react'

const Contact = () => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [subject, setSubject] = useState()

  const sendMail = async () => {
    if (email && message) {
      // eslint-disable-next-line
      const response = await fetch('https://cyftime.de/php/email.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message, subject }),
      })

      setEmail('')
      setSubject('')
      setMessage('')
    }
  }

  return (
    <div className="mx-8 my-8 lg:mx-64">
      <h2
        id="contact"
        className="text-green-200 text-3xl font-bold mb-2 inline-block mr-2"
      >
        Contact
      </h2>
      <h1 className="text-green-200 text-3xl font-bold mb-2 inline-block">
        CYF
      </h1>
      <form id="contact-form" className="mt-6 md:mx-24 lg:mx-6 xl:mx-48">
        <label htmlFor="email" className="block mb-6">
          <input
            type="text"
            aria-label="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="E-Mail"
            className="appearance-none bg-opacity-12 shadow-inner py-2 px-2 rounded-md w-full text-sm placeholder-opacity-59 focus:text-green-200 focus:outline-none"
          />
        </label>
        <label htmlFor="subject" className="block mb-6">
          <input
            type="text"
            aria-label="subject"
            id="subject"
            onChange={e => setSubject(e.target.value)}
            placeholder="Subject"
            className="appearance-none bg-opacity-12 shadow-inner py-2 px-2 rounded-md w-full text-sm placeholder-opacity-59 focus:text-green-200 focus:outline-none"
          />
        </label>
        <label htmlFor="message" className="block mb-6">
          <textarea
            id="message"
            aria-label="message"
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
            className="h-32 lg:h-64 appearance-none bg-opacity-12 shadow-inner py-2 px-2 rounded-md w-full text-sm placeholder-opacity-59 focus:text-green-200 focus:outline-none"
            style={{ resize: 'none' }}
          />
        </label>
        <div className="text-center mt-4">
          <button
            type="button"
            className="text-white bg-green-700 tracking-wide rounded-full py-2 px-12 hover:bg-green-800 font-bold focus:outline-none"
            onClick={() => sendMail()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
