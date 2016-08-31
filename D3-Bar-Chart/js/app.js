var datasetURL = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';

$(function() {
	
	var margin = {top: 125, right: 20, bottom: 100, left: 150};
	var width = 1000 - margin.left - margin.right;
	var height = 600 - margin.top - margin.bottom;
	
	$.getJSON(datasetURL, function(d) {
		
		var data = d.data;
		var minDate = new Date(d.from_date);
		var maxDate = new Date(d.to_date);       
		
		var x = d3.time.scale()
			.domain([minDate, maxDate])
			.range([0, width])
			.nice(d3.time.year);
			
		var y = d3.scale.linear()
			.domain([d3.max(data,function(d) {
				return d[1];
			}), 0])
			.range([0, height]);
		
		var xAxis = d3.svg.axis()
			.orient("bottom")
			.scale(x)
			.ticks(d3.time.years, 5);
		
		var yAxis = d3.svg.axis()
			.orient("left")
			.scale(y)
			.ticks(10,"$");
		
         var tip = d3.tip()
            .attr('class', 'tooltip')
            .offset([-10, 0])
            .html(function(d) {
				return "<strong>GDP : </strong><span>$"+ d[1] +" Billion </span><br><br><strong>Date : </strong><span>" + d[0] + "</span>";
			});
			
		var chart = d3.select('#chart')
			.append('svg')
				.attr('height', height + margin.top + margin.bottom)
				.attr('width', width + margin.left + margin.right)
				.append('g')
					.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
				.call(tip);
		
		chart.append('g')
			.append('text')
				.attr('id', 'title')
				.attr('x', 155)
				.attr('y', -50)
				.text('U.S. Quarterly GDP');
		
		chart.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0, ' + height + ')')
			.call(xAxis)
			.append('g')
				.append('text')
					.attr('x', 400)
					.attr('y', 65)
					.text('Quarters');
		
		chart.append('g')
			.attr('class', 'y axis')
			.call(yAxis)
			.append('g')
				.append('text')
					.attr('transform', 'rotate(-90)')
					.attr('x', -296)
					.attr('y', -100)
					.text('U.S. GDP in Billions of Dollars');
		
		chart.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
				.attr('class', 'bar')
				.attr('x', function(d) {
					return x(new Date(d[0]));
				})
				.attr('y', function(d) {
					return y(d[1]);
				})
				.attr('height', function(d) {
					return (height) - y(d[1]);
				})
				.attr('width', (width / data.length))
				.on('mouseover', tip.show)
				.on('mouseout', tip.hide);
	});
});