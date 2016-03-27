import ScaleSandbox from '../scale-sandbox/component';
import LinearScale from 'ember-d3-components/utils/scales/d3-linear-scale';

export default ScaleSandbox.extend({
  input: 50,
  scale: LinearScale.create()
});
