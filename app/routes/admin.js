import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    deleteQuestion(question) {
      if(confirm("Are you sure you want to delete this content?")) {
        var answer_deletions = post.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function() {
          return question.destroyRecord();
        });
      }
      this.transitionTo('admin');
    }
  }
});
