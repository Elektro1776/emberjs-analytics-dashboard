import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  classNames: 'form-control input-sm',
  click: function(e){
    e.stopPropagation();
  },
  didInsertElement: function(){
    var input = this.get('element');
    Ember.$(input).daterangepicker({
      "timePicker": true,
      "ranges": {
          "Today": [
              "2015-08-12T14:49:25.347Z",
              "2015-08-12T14:49:25.347Z"
          ],
          "Yesterday": [
              "2015-08-11T14:49:25.347Z",
              "2015-08-11T14:49:25.348Z"
          ],
          "Last 7 Days": [
              "2015-08-06T14:49:25.348Z",
              "2015-08-12T14:49:25.348Z"
          ],
          "Last 30 Days": [
              "2015-07-14T14:49:25.348Z",
              "2015-08-12T14:49:25.348Z"
          ],
          "This Month": [
              "2015-08-01T04:00:00.000Z",
              "2015-09-01T03:59:59.999Z"
          ],
          "Last Month": [
              "2015-07-01T04:00:00.000Z",
              "2015-08-01T03:59:59.999Z"
          ]
      },
      "startDate": "08/06/2015",
      "endDate": "08/12/2015"
    });
  },

  willDestroyElement: function(){

  },

});
