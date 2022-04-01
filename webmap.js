// Import the leaflet package
var L = require('leaflet');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map('map').setView([43.659752, -79.378161], 20);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 21
}).addTo(map);

// Adds a popup marker to the webmap for GGL address
var oceanPoly = L.polygon([
  [56.5,198],
  [53.5,190.5],
  [52,191.25],
  [59.5,213],
  [58,222],
  [53,226],
  [48,234],
  [40,234],
  [17,252],
  [4,278],
  [-5,277],
  [-20,286],
  [-47,282.5],
  [-53,283],
  [-57,290],
  [-55,298],
  [-48,296],
  [-29,312.5],
  [-23,320],
  [-10,327],
  [-5,326],
  [6,310],
  [19,296],
  [26,282],
  [31,280],
  [35,285],
  [40,287],
  [41,290],
  [43,295],
  [46,308],
  [59,317],
  [70,343],
  [81.5,352],
  [84,330],
  [83.5,283],
  [76.5,235.5],
  [72,232],
  [70,223],
  [72,203],
  [72,185],
  [76.5,142],
  [78,104],
  [77.5,68],
  [72,26],
  [70,15],
  [59,-6],
  [55,-11],
  [51,-12],
  [44,-11],
  [35,-10],
  [23,-19],
  [12,-19],
  [7,-14],
  [4,-7.5],
  [3.5,5.625],
  [-18,9],
  [-36,18],
  [-35,28],
  [-28,39],
  [-29,48],
  [-12,53],
  [-10,47],
  [-6,45],
  [21,64],
  [19,70],
  [3,77],
  [3,83],
  [20,88],
  [20,91],
  [15,94],
  [5,95],
  [-9,105],
  [-12,125],
  [-22,112],
  [-37,115],
  [-33,132],
  [-45,147],
  [-28,158],
  [-15,152],
  [-3,154],
  [4,130],
  [17,125],
  [29,125],
  [30,132],
  [35,145],
  [49,150],
  [50,160],
  [63,185]
], {color:'red'}).addTo(map);

var primeMeridian = L.polyline([
  [-90,0],
  [90,0]
], {color:'purple'}).addTo(map);

var equator = L.polyline([
  [0,-360],
  [0,360]
],{color:'green'}).addTo(map);
