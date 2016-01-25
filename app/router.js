import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("split");
  this.route("web");
  this.route('d3', function() {
    this.route('scales', function() {
      this.route('linear');
    });
  });
});

export default Router;
