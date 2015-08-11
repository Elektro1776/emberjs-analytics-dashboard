import DS from 'ember-data';

var Data = DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),
  chartData: DS.attr('object'),
  legend: DS.attr('boolean'),
  size: DS.attr('string'),
  options: DS.attr('object'),
  lastUpdatedDate: DS.attr()
});

var colors = {
  white: '#fff',
  blue: '#6fb0e8',
  dblue: '#0e7ee0',
  rgbBlue: 'rgba(14,126,224,0.2)',
  rgbBlueStroke: 'rgba(14,126,224,1)',
  orange: '#fdac55',
  dorange: '#fc9629',
  rgbOrange: 'rgba(252,150,41,0.2)',
  rgbOrangeStroke: 'rgba(252,150,41,1)',
  green: '#33cac1',
  dgreen: '#00a197',
  rgbGreen: 'rgba(0,161,151,0.2)',
  rgbGreenStroke: 'rgba(0,161,151,1)',
  red: '#fa8564',
  dred: '#fc6033',
  rgbRed: 'rgba(252,96,51,0.2)',
  rgbRedStroke: 'rgba(252,96,51,1)',
  yellow: '#ffd75f',
  dyellow: '#fec721',
  rgbYellow: 'rgba(254,199,33,0.2)',
  rgbYellowStroke: 'rgba(254,199,33,1)',
  purple: '#9972b5',
  dpurple: '#9D35B4',
  rgbPurple: 'rgba(157,53,180,0.2)',
  rgbPurpleStroke: 'rgba(157,53,180,1)',
  gray: '#cbcbcb',
  dgray: '#a0a0a0',
  rgbGray: 'rgba(220,220,220,0.2)',
  rgbGrayStroke: 'rgba(220,220,220,1)'
};

Data.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Games of Thrones (Active vs Abandoned)',
      type: 'Line',
      legend: true,
      size: '4',
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Active Plays",
                fillColor: colors.rgbGreen,
                strokeColor: colors.green,
                pointColor: colors.green,
                pointStrokeColor: colors.white,
                pointHighlightFill: colors.white,
                pointHighlightStroke: colors.gray,
                data: [120, 200, 220, 175, 238, 300, 560]
            },
            {
                label: "Abandoned Plays",
                fillColor: colors.rgbRed,
                strokeColor: colors.red,
                pointColor: colors.red,
                pointStrokeColor: colors.white,
                pointHighlightFill: colors.white,
                pointHighlightStroke: colors.gray,
                data: [10, 20, 50, 300, 30, 80, 12]
            }
        ]
      }
    },
    {
      id: 2,
      title: 'Top 5 Watched',
      type: 'StackedBar',
      legend: true,
      size: '4',
      chartData: {
        labels: ["Game of Thrones", "True Detective", "Silicon Valley", "Ballers", "The Brink"],
        datasets: [
          {
            fillColor: colors.green,
            label: "completed",
            data: [65, 59, 80, 81, 56]
          },
          {
            fillColor: colors.orange,
            label: "started",
            data: [28, 48, 40, 19, 86]
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Most popular in watchlist',
      type: 'Doughnut',
      legend: true,
      size: '4',
      chartData: [{
        value: 300,
        color: colors.red,
        highlight: colors.dred,
        label: "Game of Thrones"
      },
      {
        value: 50,
        color: colors.blue,
        highlight: colors.dblue,
        label: "True Detective"
      },
      {
        value: 100,
        color: colors.orange,
        highlight: colors.dorange,
        label: "Silicon Valley"
      }]
    },
    {
      id: 4,
      title: 'Most Popular',
      type: 'Pie',
      legend: true,
      size: '4',
      chartData: [{
        value: 205,
        color: colors.red,
        highlight: colors.dred,
        label: "Game of Thrones"
      },
      {
        value: 50,
        color: colors.blue,
        highlight: colors.dblue,
        label: "True Detective"
      },
      {
        value: 80,
        color: colors.green,
        highlight: colors.dgreen,
        label: "True Detective"
      },
      {
        value: 120,
        color: colors.yellow,
        highlight: colors.dyellow,
        label: "True Detective"
      },
      {
        value: 100,
        color: colors.purple,
        highlight: colors.dpurple,
        label: "Silicon Valley"
      }]
    },
    {
      id: 5,
      title: 'Most Frequent Users (hrs)',
      type: 'Bar',
      legend: false,
      size: '4',
      chartData: {
        labels: ["User 1", "User 2", "User 3", "User 4", "User 5"],
        datasets: [
          {
            fillColor: colors.orange,
            label: "completed",
            data: [200, 186, 180, 181, 156]
          }
        ]
      }
    }

  ]
});

export default Data;
