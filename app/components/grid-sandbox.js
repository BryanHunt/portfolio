import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  scaleName: 'linear-scale',
  orientation: 'bottom',
  width: 500,
  height: 500,
  xPadding: 25,
  yPadding: 25,

  translateX: computed('xPadding', 'width', 'orientation', function() {
    if(this.get('orientation') === "right") {
        return this.get('width') + this.get('xPadding');
    }

    return this.get('xPadding');
  }),

  yOffset: computed('yPadding', 'height', function() {
    if(this.get('orientation') === "top") {
      return this.get('height') - this.get('yPadding');
    }

    return this.get('yPadding');
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
