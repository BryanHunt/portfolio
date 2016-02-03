import Ember from 'ember';
import OrdinalScale from '../utils/scales/d3-ordinal-scale';

const { Component, on, computed, observer } = Ember;

export default Component.extend({
  init() {
    this._super.apply(this, arguments);
    this.set('scale', OrdinalScale.create());
    this.set('domainItems', ['Apples', 'Oranges', 'Bananas']);
    this.set('rangeMin', 0);
    this.set('rangeMax', 500);
    this.set('input', 'Apples');
  },

  scaledValue: computed('input', 'scale.scale', function() {
    return this.get('scale').scale(this.get('input'));
  }),

  domainChanged: on('init', observer('domainItems', function() {
    this.set('scale.domain', this.get('domainItems'));
  })),

  rangeChanged: on('init', observer('rangeMin', 'rangeMax', 'rangeRound', function() {
    if(this.get('rangeRound')) {
      this.set('scale.rangeRound', [this.get('rangeMin'), this.get('rangeMax')]);
    }
    else {
      this.set('scale.rangePoints', [this.get('rangeMin'), this.get('rangeMax')]);
    }
  })),
});
