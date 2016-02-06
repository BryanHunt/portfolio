import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  output: computed('input', 'scale.scale', function() {
    return this.get('scale').scale(this.get('input'));
  })
});
