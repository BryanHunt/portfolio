import ScaleSandbox from './scale-sandbox';
import SqrtScale from '../utils/scales/d3-sqrt-scale';

export default ScaleSandbox.extend({
  input: 50,
  scale: SqrtScale.create()
});
