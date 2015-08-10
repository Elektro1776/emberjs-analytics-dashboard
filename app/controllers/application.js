import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['id:asc'],
  chartData:  Ember.computed('model', function(){
    return this.get('model').mapBy('chartData')
  }),
  options: Ember.computed('model', function(){
    return {
      // prop: this.get('model').mapBy('otherProp')
      responsive: true,
      barValueSpacing : 15,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff"
    };
  }),
  actions: {
    setChartData: function(data){
      var model = this.get('model');
      var title = data.title;
      var chartData = data.chartData;

      model.set('title', title);
      model.set('chartData', chartData);

      console.log(model);

      var record = this.store.find('application', data.id);
      record.get('title', title);
      record.get('chartData', chartData);
      console.log(record);
      // console.log(data.chartData);
      // record.set('title', title);
      // record.set('chartData', chartData);
      // console.log(this.get('model'));
    }
  }

});
