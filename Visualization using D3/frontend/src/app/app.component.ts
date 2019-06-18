import { Component,OnInit } from '@angular/core';
import{ClientService} from './app.service';
import * as _ from 'underscore';


declare var liquidFillGaugeDefaultSettings:any;
declare var loadLiquidFillGauge:any;
declare var d3:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers:[ClientService],

})
export class AppComponent {


  constructor(private _cs:ClientService) {
  }
ngOnInit() {
  this.getdata();
  // this.liquidBubble();
  }

labData:any = {};
mcList:any = [];
showliquidGage:boolean;
gaugeObject:any = {};
getdata(){
  let data={query:{"lab":"microcontroller"}};
  this._cs.getdata(data,"filescount").subscribe((res:any)=>{
    // console.log(JSON.parse(res._body).data);
    this.labData= JSON.parse(res._body).data;
    this.mcList = _.uniq(_.pluck(this.labData,'machine_address'));
    // console.log(this.mcList);
    this.liquidBubble(this.labData);
    this.loadPieChart(this.labData);
    this.loadBarChart1(this.labData);
  },err=>{

  })
}

liquidBubble(labData){
//   var node = document.getElementById('fillgauge1');
//  while (node.hasChildNodes()) {
//     node.removeChild(node.firstChild);
// }
  this.showliquidGage = true;
  let config_bubble1 = liquidFillGaugeDefaultSettings();
  config_bubble1.waveAnimateTime=10000;
  this.gaugeObject.bubble1 =  loadLiquidFillGauge("disk_occupation", 0,config_bubble1);
  // console.log(this.gaugeObject.bubble1);
    // let hdData = this.labData.storage_in_gb;
    // console.log(hdData);
    // let percentage = (hdData.used_space/hdData.total_space)*100;
    let localValue = _.pluck(labData,'storage_in_gb');
    // console.log("kjdkjs",localValue);
    let localValueSum = _.reduce(localValue,function(first:any,sec:any){

      let total_space = first["total_space"]+sec["total_space"];
      let used_space = first["used_space"]+sec["used_space"];
      // console.log(total_space);
      // console.log(used_space);
      // let used_space = first.used_space+sec.used_space;
      return {'total_space':total_space,'used_space':used_space};
      // return 0;
    //
    });
    // for(let i in localValue){
    //   console.log(i.total_space);
    // }
    // console.log(localValue);
    // console.log(localValueSum);
    let percentage = (localValueSum["used_space"]/localValueSum["total_space"])*100;
    // console.log(this.gaugeObject.bubble1);
    // if(this.gaugeObject.bubble1){
      this.gaugeObject.bubble1.update(percentage);
    // }else {

    // }

    // this.gaugeObject.bubble2 =  loadLiquidFillGauge("fillgauge2", percentage);
    // this.gaugeObject.bubble3 =  loadLiquidFillGauge("fillgauge3", percentage);

  }
  loadPieChart(loadData){
    //Math.floor(Math.random()*(999-100+1)+100);
    let localValue = _.pluck(loadData,'network_usage');
    // console.log("kjdkjs",localValue);
    let localValueSum = _.reduce(localValue,function(first:any,sec:any){

      let rx_sum = first["rx"]+sec["rx"];
      let tx_sum = first["tx"]+sec["tx"];
      return {'rx':rx_sum,'tx':tx_sum};
    });
    // document.getElementById('network_occupation').parent
    /// d3 actionsssss
    // console.log(localValueSum);
    var data=[{"networkType":"rx","totalCount":localValueSum.rx},{"networkType":"tx","totalCount":localValueSum.tx}];


var width = 800,
    height = 250,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 0)
    .innerRadius(radius - 200);

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
    return d.totalCount;
});



var svg = d3.select("#network_occupation")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
        return color(d.data.networkType);
    });

    g.append("text")
        .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .text(function (d) {
        return d.data.networkType;
    });

  }


  //loading Bar Chart
  loadBarChart1(loadData){

    let localValue = _.pluck(loadData,'file_ext_size');
    // console.log("kjdkjs",localValue);
    //  _.filter(localValue,
    //   function(object){
    //     let keyVal = _.keys(object)[0];
    //     if(object[keyVal]>0.001) return object;
    //     return ;
    //   });
//       var localValueSum =_.pick(localValue, function(value, key, object) {
//
//         if(value>0.001) return value;
// });


// var localValueSum = _.reduce(localValue,function(first:any,sec:any){
//
//   // let total_space = first["total_space"]+sec["total_space"];
//   // let used_space = first["used_space"]+sec["used_space"];
//   // console.log(total_space);
//   // console.log(used_space);
//   // let used_space = first.used_space+sec.used_space;
//   // return {'total_space':total_space,'used_space':used_space};
//   return _.extend(first,sec);
//   // return 0;
// //
// });
//********************************************************************************to be chaecked
// var localValueSum = _.chain(localValue)
//         .reduce(function(memo, obj) {
//           //ignore
//             if(typeof memo[obj.name] === 'undefined') {
//                 memo[obj.name] = 0;
//             }
//             memo[obj.name] += obj.val;
//             return memo;
//         }, {})
//         .map(function (val, key) {
//             return {key: key, val: val};
//         })
//         .value();
    // document.getElementById('network_occupation').parent
    /// d3 actionsssss
    // console.log(localValueSum);


//     var margin = {top: 20, right: 20, bottom: 70, left: 40},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;
//
//
// // set the ranges
// var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
//
// var y = d3.scale.linear().range([height, 0]);
//
// // define the axis
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")
//
//
// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .ticks(10);
//
//
// // add the SVG element
// var svg = d3.select("#file_count")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
//
//
//   // scale the range of the data
//   x.domain(data.map(function(d) { return d.Letter; }));
//   y.domain([0, d3.max(data, function(d) { return d.Freq; })]);
//
//   // add axis
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//     .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-.8em")
//       .attr("dy", "-.55em")
//       .attr("transform", "rotate(-90)" );
//
//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 5)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Frequency");
//
//
//   // Add bar chart
//   svg.selectAll("bar")
//       .data(data)
//     .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return x(d.Letter); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.Freq); })
//       .attr("height", function(d) { return height - y(d.Freq); });
//
// });
  }



}
