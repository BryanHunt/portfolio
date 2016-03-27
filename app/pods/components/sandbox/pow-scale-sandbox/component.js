import ScaleSandbox from '../scale-sandbox/component';
import PowScale from 'ember-d3-components/utils/scales/d3-pow-scale';

export default ScaleSandbox.extend({
  input: 50,
  scale: PowScale.create()
});
