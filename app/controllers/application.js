import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  sortProperties: ['id:asc'],
  chartData:  Ember.computed('model', function(){
    return this.get('model').mapBy('chartData')
  }),
  title: Ember.computed('model', function(){
    return this.get('model').mapBy('title')
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
      var self = this;
      var chartPromise = this.store.find('application', data.id);
      chartPromise.then(function(application){
        application.set('title', data.title);
        application.set('chartData', data.chartData);
      });
      //
      // var chart = this.get('model');
      // var title = data.title;
      // var chartData = data.chartData;
      //
      // var newD = {
      //   labels: ["toast", "butter", "March", "April", "May", "June", "July"],
      //   datasets: [
      //       {
      //           label: "Active Plays",
      //           data: [0, 200, 0, 175, 238, 300, 560]
      //       },
      //       {
      //           label: "Abandoned Plays",
      //           data: [10, 20, 50, 300, 30, 80, 12]
      //       }
      //   ]
      // }

      // this.set('title', title);
      //console.log(this.get('title'));

      // chart.save();

      // var record = this.store.find('application', data.id);
      // record.get('title', title);
      // record.get('chartData', chartData);
      // console.log(record);
      // console.log(data.chartData);
      // record.set('title', title);
      // record.set('chartData', chartData);
      // console.log(this.get('model'));
    }
  }

});
