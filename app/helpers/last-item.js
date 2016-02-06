import Ember from 'ember';

export function formatCsv([array, index]) {
  return array.length === index + 1;
}

export default Ember.Helper.helper(formatCsv);
