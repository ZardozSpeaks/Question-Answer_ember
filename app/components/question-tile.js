import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
