import React from 'react'

interface Props {
  username: string;
  email: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<Props>> = ({ username, email, message }) => {
  return (
    <div>
      <div>Sender Name: {username}</div>
      <div>Sender Email: {email}</div>
      <div>Message: {message}</div>
    </div>
  )
}

export default EmailTemplate