import Ember from 'ember';
import LogScale from '../utils/scales/d3-log-scale';

const { Component, on, observer } = Ember;

export default Component.extend({
  domainMin: 1,
  domainMax: 100,
  rangeMin: 0,
  rangeMax: 500,
  scaleProperty: 'scale',

  init() {
    this._super.apply(this, arguments);
    this.set('scale', LogScale.create());
  },

  scaleChanged: on('init', observer('scale', 'scaleProperty', function() {
    let scaleProperty = this.get('scaleProperty');

    if(scaleProperty) {
      this.set(`parentView.${scaleProperty}`, this.get('scale'));
    }
  })),

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
