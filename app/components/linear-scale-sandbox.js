import ScaleSandbox from './scale-sandbox';
import LinearScale from '../utils/scales/d3-linear-scale';

export default ScaleSandbox.extend({
  input: 50,
  scale: LinearScale.create()
});
