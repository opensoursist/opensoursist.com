import * as React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/todos';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch);
};

type TodoInputProps = ReturnType<typeof mapDispatchToProps> & {
    color?: string;
};

interface TodoInputState {
    value: string;
}

class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
    state: TodoInputState = {
        value: ''
    };
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        console.log(e.target.value);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                    style={{
                        color: this.props.color
                    }}
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                />
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(TodoInput);