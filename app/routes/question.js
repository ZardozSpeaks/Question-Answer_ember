import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    addAnswer(params) {
      var date = new Date();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var year = date.getFullYear();
      params.time = month+"/"+day+"/"+year;
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    deleteAnswer(answer) {
      if(confirm("Are you sure you want to delete this comment?")) {
        answer.destroyRecord();
      }
      this.refresh();
    }
  }
});
