Ext.define('FindACab.view.RatingChart', {
	extend: 'Ext.chart.SpaceFillingChart',
	xtype: 'ratingchart',
	requires: [
		'Ext.chart.series.Gauge',
		'Ext.chart.series.sprite.PieSlice',
	],
	config: {
		series: [{
			type: 'gauge',
			field: 'rating',
			labelField: 'rating',
			value: 2,
			minimum: 0,
			maximum: 5,
			donut: 80,
			colors: ["#ffb13a", "lightgrey"]
		}]
	}
});
