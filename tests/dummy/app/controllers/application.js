import Ember from 'ember';

export default Ember.Controller.extend({

  isRepressed: false,
  toggledEnablement: false, 
  
  actions: {
    toggleRepression: function() {
      console.log('toggling');
      this.toggleProperty('isRepressed');
    },
    toggleEnablement: function() {
      console.log('toggling');
      this.toggleProperty('toggledEnablement');
    }
  }

});