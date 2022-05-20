import React, { Component } from 'react'

export class Cel extends Component {
  render() {
      let a= this.props.sayac
    return (
      <div>{this.props.data.cel} : {a}</div>
    )
  }
}

export default Cel