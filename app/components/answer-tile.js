import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer(params) {
      this.sendAction('addAnswer', params);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    }
  }
});
