import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  scaleName: 'linear-scale',
  orientation: 'bottom',

  translateX: computed('orientation', function() {
    let orientation = this.get('orientation');

    switch(orientation) {
      case "bottom":
      case "top":
      case "left":
        return 25
      case "right":
        return 475;
      default:
        return 0;
    }
  }),

  translateY: computed('orientation', function() {
    let orientation = this.get('orientation');

    switch(orientation) {
      case "top":
      case "left":
      case "right":
        return 25
      case "bottom":
        return 475;
      default:
        return 0;
    }
  }),

  scaleDisplayName(value) {
    switch(value) {
      case "linear-scale":
        return "Linear";
      case "log-scale":
        return "Log";
      case "ordinal-scale":
        return "Ordinal";
      case "pow-scale":
        return "Pow";
      case "sqrt-scale":
        return "Sqrt";
      default:
        return "None";
    }
  }
});
