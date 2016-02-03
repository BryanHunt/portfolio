import Ember from 'ember';
import SqrtScale from '../utils/scales/d3-sqrt-scale';

const { Component, on, computed, observer } = Ember;

export default Component.extend({
  init() {
    this._super.apply(this, arguments);
    this.set('scale', SqrtScale.create());
    this.set('domainMin', 0);
    this.set('domainMax', 100);
    this.set('rangeMin', 0);
    this.set('rangeMax', 500);
    this.set('input', 50);
  },

  scaledValue: computed('input', 'scale.scale', function() {
    return this.get('scale').scale(this.get('input'));
  }),

  domainChanged: on('init', observer('domainMin', 'domainMax', function() {
    this.set('scale.domain', [this.get('domainMin'), this.get('domainMax')]);
  })),

  rangeChanged: on('init', observer('rangeMin', 'rangeMax', 'rangeRound', function() {
    if(this.get('rangeRound')) {
      this.set('scale.rangeRound', [this.get('rangeMin'), this.get('rangeMax')]);
    }
    else {
      this.set('scale.range', [this.get('rangeMin'), this.get('rangeMax')]);
    }
  })),
});
