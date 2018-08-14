import * as React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

type TodoListProps = ReturnType<typeof mapStateToProps>;

class TodoList extends React.Component<TodoListProps> {
    render() {
        return (
            <ul>{this.props.todos.map((todo, index) => (
                <TodoItem key={index} index={index} content={todo} />
            ))}</ul>
        );
    }
}

export default connect(mapStateToProps)(TodoList);