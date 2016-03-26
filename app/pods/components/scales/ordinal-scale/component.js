import Ember from 'ember';

const { Component, on, computed, observer } = Ember;

export default Component.extend({
  rangeMin: 0,
  rangeMax: 500,

  init() {
    this._super.apply(this, arguments);
    this.set('domainItems', ['Apples', 'Oranges', 'Bananas']);
  },

  domainChanged: on('init', observer('domainItems.[]', function() {
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
