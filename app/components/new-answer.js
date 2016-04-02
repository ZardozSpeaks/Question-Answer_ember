import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer() {
      var params = {
        author: this.get('author') ? this.get('author'): '',
        content: this.get('content') ? this.get('content'): '',
        question: this.get('question')
      };
      this.sendAction('addAnswer', params);
      this.set('author', '');
      this.set('content', '');
    }
  }
});
