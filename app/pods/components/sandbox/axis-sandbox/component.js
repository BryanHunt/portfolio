import Ember from 'ember';
import LinearScale from 'ember-d3-components/utils/scales/d3-linear-scale';
import LogScale from 'ember-d3-components/utils/scales/d3-log-scale';
import OrdinalScale from 'ember-d3-components/utils/scales/d3-ordinal-scale';
import PowScale from 'ember-d3-components/utils/scales/d3-pow-scale';
import SqrtScale from 'ember-d3-components/utils/scales/d3-sqrt-scale';

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
      case "scales/linear-scale":
        this.set('scale', LinearScale.create());
        return "Linear";
      case "scales/log-scale":
        this.set('scale', LogScale.create());
        return "Log";
      case "scales/ordinal-scale":
      this.set('scale', OrdinalScale.create());
        return "Ordinal";
      case "scales/pow-scale":
        this.set('scale', PowScale.create());
        return "Pow";
      case "scales/sqrt-scale":
        this.set('scale', SqrtScale.create());
        return "Sqrt";
      default:
        return "None";
    }
  },

  axisTransform: computed('translateX', 'translateY', function() {
    return `translate(${this.get('translateX')}, ${this.get('translateY')})`;
  })
});
