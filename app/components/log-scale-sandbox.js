import ScaleSandbox from './scale-sandbox';
import LogScale from '../utils/scales/d3-log-scale';

export default ScaleSandbox.extend({
  input: 50,
  scale: LogScale.create()
});
