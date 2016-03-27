import ScaleSandbox from '../scale-sandbox/component';
import LogScale from 'ember-d3-components/utils/scales/d3-log-scale';

export default ScaleSandbox.extend({
  input: 50,
  scale: LogScale.create()
});
