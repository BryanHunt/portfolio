import Ember from 'ember';
import LinearScale from '../utils/scales/d3-linear-scale';

const { Component, on, computed, observer } = Ember;

export default Component.extend({
  init() {
    this._super.apply(this, arguments);
    this.set('translateX', 25);
    this.set('translateY', 20);
    this.set('orientation', "bottom");
    this.set('grid', Ember.Object.create({x1: 0, y1: 0, x2: 0, y2: -450}));
  },

  axisTransform: computed('translateX', 'translateY', function() {
    return `translate(${this.get('translateX')}, ${this.get('translateY')})`;
  })
});
