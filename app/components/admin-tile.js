import Ember from 'ember';

export default Ember.Component.extend({
  admin:true,
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
