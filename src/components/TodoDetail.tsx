import * as React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router';
import { RootState } from '../';

const mapStateToProps = (state: RootState) => {
    const matchResult = matchPath<{ id: string }>(state.router.location!.pathname, {
        path: '/todo/:id'
    });

    if (matchResult === null) {
        return { todo: [] };
    }

    let id = matchResult.params.id;

    return {
        todo: state.todos![matchResult.params.id]
    };
};

type TodoDetailProps = ReturnType<typeof mapStateToProps>;

class TodoDetail extends React.Component<TodoDetailProps> {
    render() {
        return (
            <div>{this.props.todo}</div>
        );
    }
}

export default connect(mapStateToProps)(TodoDetail);