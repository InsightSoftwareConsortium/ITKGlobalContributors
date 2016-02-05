$(function () {
  'use strict';
   //var map = geo.map({'node': '#map'}).createLayer('osm');
   var map = geo.map({'node': '#map', zoom: 2});
   var osm = map.createLayer('osm', {
     baseUrl: 'http://otile1.mqcdn.com/tiles/1.0.0/sat'
     });
  var features = map.createLayer('feature', {renderer: 'd3'});

  var alpha = 50.0;
  var beta = 10.0;
  var gamma = alpha / beta;

  var positions = [];
  positions.push({x: -80.9598333, y: 33.986199});
  positions.push({x: 144.6780052, y: -36.5986095});
  positions.push({x: 139.294774527, y: 34.2255804});
  positions.push({x: -121.9969062, y: 37.0066161});
  positions.push({x: 8.2319736, y: 46.7985624});
  positions.push({x: -2.8737741, y: 43.3629994});
  positions.push({x: 4.8320114, y: 45.7578137});
  positions.push({x: 6.7183652, y: 49.3277048});
  positions.push({x: -73.8681781, y: 42.9117428});
  positions.push({x: -82.1012554, y: 39.3292396});
  positions.push({x: -77.0946458, y: 38.9848265});
  positions.push({x: 116.391248, y: 39.9059631});
  positions.push({x: -1.2583027, y: 51.752225});
  positions.push({x: -91.5299105, y: 41.6612561});
  positions.push({x: 13.3888599, y: 52.5170365});
  positions.push({x: 9.9352051, y: 51.5327604});
  positions.push({x: -73.7709534, y: 42.8656325});
  positions.push({x: -73.5539819, y: 45.5087928});
  positions.push({x: -91.5299105, y: 41.6612561});
  positions.push({x: -79.0752894, y: 35.9101438});
  positions.push({x: -78.8986189, y: 35.9940329});
  positions.push({x: -79.0752894, y: 35.9101438});
  positions.push({x: -79.0752894, y: 35.9101438});
  positions.push({x: -79.0752894, y: 35.9101438});
  positions.push({x: -79.0752894, y: 35.9101438});
  positions.push({x: -91.5299105, y: 41.6612561});
  positions.push({x: -79.0558444, y: 35.9131996});
  positions.push({x: -1.2583027, y: 51.752225});
  positions.push({x: -79.0558444, y: 35.9131996});
  positions.push({x: 7.1006599, y: 50.7358511});
  positions.push({x: -91.5804474, y: 41.6764044});
  positions.push({x: 77.5912997, y: 12.9791198});
  positions.push({x: 1.7554201, y: 43.424481});
  positions.push({x: 23.7965614, y: 44.3190159});
  positions.push({x: -79.0752894, y: 35.9101438});
  positions.push({x: -0.1276473, y: 51.5073219});
  positions.push({x: -3.7035824, y: 40.4167047});
  positions.push({x: 175.6134125, y: -40.3542439});
  positions.push({x: 1.4442469, y: 43.6044622});
  positions.push({x: -73.7709534, y: 42.8656325});
  positions.push({x: -73.7709534, y: 42.8656325});
  positions.push({x: -73.7709534, y: 42.8656325});
  positions.push({x: -73.7709534, y: 42.8656325});

  var blue = "#4043ff";
  var red = "#ff2020";
  var yellow = "#ffff40";

  features.createFeature('point')
    .data(positions)
    .position(function (data) {
      return {x: data.x, y: data.y};
    })
    .style('radius', 5)
    .style('strokeColor', red)
    .style('strokeWidth', 2)
    .style('strokeOpacity', 0.7)
    .style('fillColor', yellow)
    .style('fillOpacity', 0.7)
    .draw();

  map.draw();
});

