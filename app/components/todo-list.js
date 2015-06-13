import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createTodo: function(newTitle) {
            this.set('newTitle', '');
            this.sendAction('createTodo', newTitle);
        }
    }
});
