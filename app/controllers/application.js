import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['id:asc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties'),
  options: Ember.computed('model', function(){
    return {
      // prop: this.get('model').mapBy('otherProp')
      responsive: true,
      barValueSpacing : 15,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff"
    };
  })

});
