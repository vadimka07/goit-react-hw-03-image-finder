import { Component } from "react";
import { Header, Form } from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
           value: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value)
    }
    render() {
        return (
            <>
                <Header>
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <button type="submit" className="button">
                            <span className="button-label">Search</span>
                        </button>

                        <input
                            className="input"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            name="search"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="Search images and photos"
                        />
                    </Form>
                </Header>
            </>
        )
    }
}
