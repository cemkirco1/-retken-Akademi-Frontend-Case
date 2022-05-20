import React, { Component } from 'react'
import { } from 'reactstrap'
import '../assets/style/main.css';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'C' };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }



    render() {
        let v = this.props.sayac
        let a = {
            a: v,
            b: (1.8 * v) + 32,
            c: v + 273.15
        }
        var r =""


        return (
            <div>
                <form class="main">
                    <label>
                        Şuanki derece : {r}
                        <select class="select" value={this.state.value} onChange={this.handleChange}>
                            <option value="a">{a.a} Celcius</option>
                            <option value="b">{a.b} Fahrenheit</option>
                            <option value="c">{a.c} Kelvin</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}
