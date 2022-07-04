import { Component } from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage'

class ErrorBoundary extends Component {
	state = {
		error: false,
	}

	componentDidCatch() {
		this.setState({
			error: true,
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />
		} else {
			return this.props.children
		}
	}
}

export default ErrorBoundary
