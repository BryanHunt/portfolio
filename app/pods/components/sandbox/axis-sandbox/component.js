import Ember from 'ember';
import LinearScale from 'ember-d3-components/utils/scales/d3-linear-scale';

const { Component, computed } = Ember;

export default Component.extend({
  scaleName: "scales/linear-scale",
  translateX: 25,
  translateY: 25,
  orientation: "bottom",

  init(){
    this._super(...arguments);
    this.set('scale', LinearScale.create());
  },

  scaleDisplayName(value) {
    switch(value) {
      case "linear-scale":
      this.set('scale', LinearScale.create());
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
  },

  axisTransform: computed('translateX', 'translateY', function() {
    return `translate(${this.get('translateX')}, ${this.get('translateY')})`;
  })
});
