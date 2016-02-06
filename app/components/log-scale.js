import Ember from 'ember';
import LogScale from '../utils/scales/d3-log-scale';

const { Component, on, computed, observer } = Ember;

export default Component.extend({
  domainMin: 1,
  domainMax: 100,
  rangeMin: 0,
  rangeMax: 500,

  init() {
    this._super.apply(this, arguments);
    this.set('scale', LogScale.create());
  },

  scale: computed.alias('parentView.scale'),

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
