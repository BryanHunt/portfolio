import ScaleSandbox from './scale-sandbox';
import PowScale from '../utils/scales/d3-pow-scale';

export default ScaleSandbox.extend({
  input: 50,
  scale: PowScale.create()
});
