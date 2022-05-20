import React, { Component } from 'react'

export class Fah extends Component {
    render() {
        let a = this.props.sayac
        return (
            <div>
                <div>{this.props.data.fah}  : {(1.8 * a) + 32}</div>
            </div>
        )
    }
}

export default Fah