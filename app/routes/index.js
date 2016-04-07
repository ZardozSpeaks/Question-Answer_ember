import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  addNewQuestion: function(params) {
      var date = new Date();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var year = date.getFullYear();
      params.time = month+"/"+day+"/"+year;
      this.store.createRecord('question', params).save();
      this.transitionTo('index');
    },
});
