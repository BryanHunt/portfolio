import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("split");
  this.route("web");
  this.route('d3components', function() {
    this.route('scales', function() {
      this.route('linear');
      this.route('ordinal');
      this.route('log');
      this.route('pow');
      this.route('sqrt');
    });
    this.route('axis');
    this.route('grid');
  });
  this.route('d3charts', function() {
    this.route('line');
    this.route('bubble');
    this.route('bar');
    this.route('area');
    this.route('stackedbar');
    this.route('stackedarea');
    this.route('pie');
  });
});

export default Router;
