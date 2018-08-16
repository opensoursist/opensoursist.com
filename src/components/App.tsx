import * as React from 'react';
import { Route } from 'react-router-dom';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Header from './Header';
import TodoDetail from './TodoDetail';
import Footer from './Footer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Route path="/" component={Header} />
                <Route exact path="/" component={TodoInput} />
                <Route exact path="/" component={TodoList} />
                <Route exact path="/todo/:id" component={TodoDetail} />
                <Footer />
            </div>
        );
    }
}