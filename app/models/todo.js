import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    isComplete: DS.attr('boolean')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Complete Ember CLI tutorial",
            isComplete: false
        },
        {
            id: 2,
            title: "Check out some more ember stuff",
            isComplete: true
        },
        {
            id: 3,
            title: "Solve world hunger with Ember",
            isComplete: false
        }
    ]
});
