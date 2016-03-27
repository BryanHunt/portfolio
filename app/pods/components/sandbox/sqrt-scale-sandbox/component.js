import ScaleSandbox from '../scale-sandbox/component';
import SqrtScale from 'ember-d3-components/utils/scales/d3-sqrt-scale';

export default ScaleSandbox.extend({
  input: 50,
  scale: SqrtScale.create()
});
