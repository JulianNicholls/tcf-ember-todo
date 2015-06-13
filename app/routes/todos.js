import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    },

    actions: {
        createTodo: function(newTitle) {
            var todo = this.store.createRecord('todo', {
                title: newTitle,
                isComplete: false
            });

            // Clear the 'New Todo' text field
            this.controllerFor('todos').set(newTitle, '');

            // Save the new model
            todo.save();
        },

        acceptChanges: function(todo) {
            if(Ember.isEmpty(todo.get('title'))) {
                this.send('deleteTodo', todo);
            }
            else {
                todo.save();
            }
        },

        deleteTodo: function(todo) {
            todo.deleteRecord();
        }
    }
});
