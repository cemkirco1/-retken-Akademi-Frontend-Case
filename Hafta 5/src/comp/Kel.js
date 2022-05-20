import React, { Component } from 'react'

export class Kel extends Component {
    render() {
        let a = this.props.sayac
        return (
            <div>
                <div>{this.props.data.kel} : {a+273.15}</div>
            </div>
        )
    }
}

export default Kel