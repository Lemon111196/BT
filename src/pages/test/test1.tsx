// import React from 'react'

import { useState } from "react"

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if(isSent){
    return <h2>Oke babe</h2>
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        setMessage(message);
      }}
    >
      <textarea
        placeholder="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    <button type="submit">Send</button>
    </form>
  )
  // function sendMessage(message: string) {
  //   console.log(message);
  // }
}
