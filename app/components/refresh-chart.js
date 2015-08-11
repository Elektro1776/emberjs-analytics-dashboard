import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'button',
  classNames: 'btn-no-style refresh',
  click: function(){
    var ref = this;
    Ember.$.getJSON('/JSON/updateBar.json').then(function(r) {
      ref.sendAction('updateChartData', r);
    });
  }
});
