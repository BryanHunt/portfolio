import Ember from 'ember';
import XYLinePlotter from '../utils/plotters/d3-xy-line-plotter';

const { Component, computed, observer } = Ember;

export default Component.extend({
  xScaleName: "linear-scale",
  yScaleName: "linear-scale",
  translateX: 25,
  translateY: 25,
  orientation: "bottom",
  xGridWidth: computed.alias('xScale.range.1'),
  yGridHeight: computed.alias('yScale.range.1'),

  xTranslate: computed('yScale.range.1', function() {
    let translateY = parseInt(this.get('yScale.range.1')) + 25;
    return "translate(45, " + translateY + ")";
  }),

  yTranslate: computed('yScale.range.1', function() {
    let translateX = parseInt(this.get('yScale.range.1')) + 25;
    return "translate(45, " + translateX + ")";
  }),

  plotter: XYLinePlotter.create({
    data: [[{x: 0, y: 10}, {x: 10, y: 20}, {x: 20, y: 35}, {x: 30, y: 45}, {x: 50, y: 65}, {x: 70, y: 95}, {x: 80, y: 97}, {x: 90, y: 100}]]
  }),

  xScaleChanged: observer('xScale', function() {
    this.set('plotter.xScale', this.get('xScale'));
  }),

  yScaleChanged: observer('yScale', function() {
    this.set('plotter.yScale', this.get('yScale'));
  }),

  scaleDisplayName(value) {
    switch(value) {
      case "linear-scale":
        return "Linear";
      case "log-scale":
        return "Log";
      case "ordinal-scale":
        return "Ordinal";
      case "pow-scale":
        return "Pow";
      case "sqrt-scale":
        return "Sqrt";
      default:
        return "None";
    }
  }
});
