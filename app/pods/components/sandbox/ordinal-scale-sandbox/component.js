import ScaleSandbox from '../scale-sandbox/component';
import OrdinalScale from 'ember-d3-components/utils/scales/d3-ordinal-scale';

export default ScaleSandbox.extend({
  scale: OrdinalScale.create(),

  init() {
    this._super.apply(this, arguments);
    this.set('input', 'Apples');
  }
});
