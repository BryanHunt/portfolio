import Ember from 'ember';

const { Component, on, observer } = Ember;

export default Component.extend({
  domainMin: 1,
  domainMax: 100,
  rangeMin: 0,
  rangeMax: 500,

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
