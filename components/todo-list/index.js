import React from 'react';

export default (TodoListGUI) => {

    class TodoList extends React.Component {

        _id = 0;

        state = {
            items: []
        };

        /**
         * adds an item to the items data structure
         * @param description - the item we want to add
         */
        addItem = (description) => this.setState({
            items: this.state.items.concat([{
                description,
                completed: false,
                id: this._id++
            }])
        });

        /**
         * toggles the completion status of a single item at index
         * @param id - the id of the item we want to change
         */
        toggleItemCompletionById = (id) => this.setState({
            items: this.state.items.map((it, i) => it.id === id ? {
                ...it,
                completed: !it.completed
            } : it)
        });

        /**
         * removes an item at index
         * @param id - the id of the item to remove
         */
        deleteItemById = (id) => this.setState({
            items: this.state.items.filter((it) => id !== it.id)
        });

        render() {
            return (
                <TodoListGUI _items={this.state.items}
                             _toggleItemCompleteionById={this.toggleItemCompletionById}
                             _deleteItemById={this.deleteItemById}
                             _addItem={this.addItem}
                             {...this.props}
                />
            );
        }
    }

    return TodoList;

};
