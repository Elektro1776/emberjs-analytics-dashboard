import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: 'btn btn-warning btn-sm btn-block',
  click: function(e){
    e.stopPropagation();
  },
  didInsertElement: function(){
    var input = this.get('element');
    $(input).daterangepicker();
  },

  willDestroyElement: function(){

  },

});
