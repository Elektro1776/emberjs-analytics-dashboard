import Ember from 'ember';

// prop: this.get('model').mapBy('otherProp')

export default Ember.ArrayController.extend({
  sortProperties: ['id:asc'],
  chartData:  Ember.computed('model', function(){
    return this.get('model').mapBy('chartData');
  }),
  title: Ember.computed('model', function(){
    return this.get('model').mapBy('title');
  }),
  options: Ember.computed('model', function(){
    return {
      responsive: true,
      barValueSpacing : 15,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff"
    };
  }),
  lastUpdatedDate: function(){
    return 'Last Updated: ' + moment().format('LTS');
  }.property().volatile(),
  actions: {
    setChartData: function(data){
      var self = this,
        chartPromise = self.store.find('chart', data.id);
      chartPromise.then(function(chart){
        chart.set('title', data.title);
        chart.set('chartData', data.chartData);
        chart.set('lastUpdatedDate', self.get('lastUpdatedDate'));
      });
    }
  }

});
