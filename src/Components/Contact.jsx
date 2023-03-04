import { useState } from 'react'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ firstName, lastName, mobile, email, message }) // handle form submission here
  }

  return (
    <div className="m-auto max-w-[1140px] w-full p-4 flex-col">
      <h2 className='text-center mb-2'>Drop us a message!</h2>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1581890774144-dd6b92f1c08b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1764&q=80"
          alt="/"
          className="w-full object-cover h-[100px] md:h-full"
        ></img>
        <form>
          <div className="grid grid-cols-2">
            <div className="p-2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstName}
                onChange={(e) => firstName(e.target.value)}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="p-2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-400 p-2 w-full"
              />
            </div>

            <div className="p-2">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="p-2">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Mobile
              </label>
              <input
                type="number"
                name="mobile"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="border border-gray-400 p-2 w-full"
              />
            </div>
            <div className="col-span-2 p-2 grid">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="col-span-2 border border-gray-400 h-32 resize-none rounded-[5px]"
              />
            </div>
            <button className="col-span-2 m-2" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
