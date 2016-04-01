import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  description: DS.attr(),
  time: DS.attr(),
  content: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
