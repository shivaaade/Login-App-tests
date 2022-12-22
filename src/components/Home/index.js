// Write your code here

import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {first: 'Please Login', second: 'Login'}

  changeLogin = () => {
    this.setState(prev => {
      if (prev.second === 'Login') {
        return {first: 'Welcome User', second: 'Logout'}
      }
      return {first: 'Please Login', second: 'Login'}
    })
  }

  render() {
    const {first, second} = this.state
    return (
      <div>
        <div>
          <h1>{first}</h1>
          <button onClick={this.changeLogin}>{second}</button>
        </div>
      </div>
    )
  }
}

export default Home
