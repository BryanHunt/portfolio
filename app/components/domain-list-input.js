import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItem() {
      this.get('domainItems').pushObject(this.get('item'));
    }
  }
});
