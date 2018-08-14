import * as React from 'react';
import { Link } from 'react-router-dom';

const todoItemStyle: React.CSSProperties = {
    color: 'red',
    fontSize: 16
};

interface TodoItemProps {
    content: string;
    index: number;
}
const TodoItem: React.SFC<TodoItemProps> = ({ content, index }) => (
    <li style={todoItemStyle}>
        <Link to={`/todo/${index}`}>{content}</Link>
    </li>
);

export default TodoItem;