import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createTodo: function(newTitle) {
            this.set('newTitle', '');
            this.sendAction('createTodo', newTitle);
        },

        clearCompleted: function() {
            var completed = this.get('model').filterBy('isComplete', true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
        }
    },

    remaining: Ember.computed('model.@each.isComplete', function() {
        var model = this.get('model');
        return model.filterBy('isComplete', false).get('length');
    }),

    inflection: Ember.computed('remaining', function() {
        var remaining = this.get('remaining');
        return (remaining === 1) ? 'item' : 'items';
    }),

    hasCompleted: Ember.computed('completed', function() {
        return this.get('completed') > 0;
    }),

    completed: Ember.computed('model.@each.isComplete', function() {
        return this.get('model').filterBy('isComplete', true).get('length');
    }),

    allAreDone: Ember.computed('model.@each.isComplete', function(key, value) {
        var model = this.get('model');

        if(value === undefined) {
            return model.get('length') > 0 && model.isEvery('isComplete', true);
        }
        else {
            model.setEach('isComplete', value);
            model.invoke('save');
            return value;
        }
    })
});
