import ScaleSandbox from './scale-sandbox';

export default ScaleSandbox.extend({
  init() {
    this._super.apply(this, arguments);
    this.set('input', 'Apples');
  }
});
