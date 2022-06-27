import React from 'react'

import errorGif from './error.gif'
import './errorMessage.scss'

const ErrorMessage = () => {
	return <img className='error__message' src={errorGif} />
}

export default ErrorMessage
