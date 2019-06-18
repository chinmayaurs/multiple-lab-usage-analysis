import { Component,OnInit } from '@angular/core';
import{ClientService} from './app.service';


declare var $:any;
declare var Highcharts:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers:[ClientService],

})
export class AppComponent {
  

  constructor(private _cs:ClientService) {     
  }

  catageory:any=["Wireless","MicroController","VLSI"];
  series:any=[{
    name:'Total Memory',
    data:[1534,297,2187]
  },
  {
    name:'Used Memory',
    data:[192,116,995]
  }];
microcontrollerMAC:any=[/* 1 */
{
    "machine_address" : "dc4a3e4ea42f"
},
{
    "machine_address" : "dc4a3e4eaa01"
},
{
    "machine_address" : "dc4a3e4ea42f"
},
{
    "machine_address" : "dc4a3e4eaa07"
},
{
    "machine_address" : "dc4a3e4ea439"
},
{
    "machine_address" : "dc4a3e4eaa01"
}];

vlsiMAC:any=[
{
    "machine_address" : "6c626d8a94fd"
},
{
    "machine_address" : "e04c9d5372"
},
{
    "machine_address" : "8c89a5276c9f"
},
{
    "machine_address" : "6c626d8a93b2"
},
{
    "machine_address" : "8c89a5276b88"
},
{
    "machine_address" : "6c626d6bc14a"
},
{
    "machine_address" : "8c89a5276b33"
},
{
    "machine_address" : "2bba698106ee"
},
{
    "machine_address" : "e04c9d5372"
}];
  wirelessMAC:any=[/* 1 */
{
    "machine_address" : "c4346b77f3ae"
},
{
    "machine_address" : "64510635a34c"
},
{
    "machine_address" : "6451064358f5"
},
{
    "machine_address" : "6451062e437b"
},
{
    "machine_address" : "c4346b77f3bb"
},
{
    "machine_address" : "c4346b77f3dc"
},
{
    "machine_address" : "6451062e4349"
},
{
    "machine_address" : "dc4a3e4ea432"
},
{
    "machine_address" : "dc4a3e4ea431"
},
{
    "machine_address" : "dc4a3e4eaa02"
},
{
    "machine_address" : "dc4a3e4eaa0a"
},
{
    "machine_address" : "dc4a3e4eaa0a"
},
{
    "machine_address" : "dc4a3e4ea42a"
},
{
    "machine_address" : "dc4a3e4eaa3d"
},
{
    "machine_address" : "dc4a3e4eaa3d"
}]
ngOnInit() {   
  this.getdata();
  this.colgraphprodlinestatussbyowner(this.series,this.catageory)
  }

microcontrollerData:any = {};

wirelessMemory:any={
    "_id" : {
        "day" : 27,
        "month" : 10,
        "year" : 2017
    },
    "totalMemory" : 1534.7349,
    "usedMemory" : 192.8266
}

microcontrollerMemory :any={
    "_id" : {
        "day" : 27,
        "month" : 10,
        "year" : 2017
    },
    "totalMemory" : 297.2904,
    "usedMemory" : 116.6434
}

vlsiMemory:any={
  "_id" : {
        "day" : 27,
        "month" : 10,
        "year" : 2017
    },
    "totalMemory" : 658.6504,
    "usedMemory" : 149.6434
}
getdata(){
  let data={query:{"lab":"microcontroller"}};
  this._cs.getdata(data,"filescount").subscribe((res:any)=>{
     this.microcontrollerData= JSON.parse(res._body).data;
  },err=>{

  })
}

Summary:string;
summaryOfWireless(){
  this.Summary="Wireless Summary";
  let wirelessnetworkData={
    "_id" : {
        "day" : 27,
        "month" : 10,
        "year" : 2017
    },
    "totalUpload" : 4167724,
    "usedDownload" : 355483
}
  let wirelessFileCount={
      "gz" : 2230,
      "xml" : 1392,
      "jar" : 1563,
      "png" : 23531,
      "cmd" : 90,
      "css" : 3158,
      "js" : 2477,
      "properties" : 59,
      "txt" : 3758,
      "log" : 575,
      "html" : 69398,
      "class" : 418,
      "sh" : 338
  }

    let  wirelessFileSize={
      "gz" : 1910.1191,
      "xml" : 329.4726,
      "jar" : 750.5306,
      "png" : 997.7593,
      "cmd" : 0.2118,
      "css" : 31.7755,
      "js" : 156.366,
      "properties" : 0.4489,
      "txt" : 22.1062,
      "log" : 26.195,
      "html" : 5911.5042,
      "class" : 1.0796,
      "sh" : 3224.7676
  }
  let wirelessData:any=[ ]
let microKeys:any[]=Object.keys(wirelessFileSize);
for(let key of microKeys){
  wirelessData.push({x:wirelessFileCount[key],y:wirelessFileSize[key],name:''+key,type:'.'+key});
}
this.bubble3dData(wirelessData,"Wireless");
let piedatamemory:any=[{
            name: 'Total Memory',
            y: 1534
        }, {
            name: 'Used Memory',
            y: 192,
            sliced: true,
            selected: true
        }];
        let piedatanetwork:any=[{
            name: 'Total Upload',
            y: 4167724
        }, {
            name: 'Total Download',
            y: 355483,
            sliced: true,
            selected: true
        }];

this.summaryPie(piedatamemory,'Wireless','memory');
this.summaryPie(piedatanetwork,'Wireless','network');


}

summaryofVlsi(){
    this.Summary="VLSI Summary";

  let vlsifileCount={
    "gz" : 13107.0,
    "xml" : 3802.0,
    "jar" : 36.0,
    "png" : 19797.0,
    "cmd" : 1179.0,
    "css" : 35.0,
    "js" : 106.0,
    "properties" : 60.0,
    "txt" : 2395.0,
    "log" : 7231.0,
    "html" : 568.0,
    "class" : 1.0,
    "sh" : 1134.0
}
 let vlsifilesize={
    "gz" : 30405.5569,
    "xml" : 15.757,
    "jar" : 118.1244,
    "png" : 330.1913,
    "cmd" : 7.3559,
    "css" : 1.4213,
    "js" : 2.7047,
    "properties" : 0.179,
    "txt" : 2195.3416,
    "log" : 678.5291,
    "html" : 9.7164,
    "class" : 0.0084,
    "sh" : 8.1137
}
let vlsiData:any=[ ]
let microKeys:any[]=Object.keys(vlsifilesize);
for(let key of microKeys){
  vlsiData.push({x:vlsifileCount[key],y:vlsifilesize[key],name:''+key,type:'.'+key});
}
this.bubble3dData(vlsiData,"VLSI");

let piedatamemory:any=[{
            name: 'Total Memory',
            y: 2187
        }, {
            name: 'Used Memory',
            y: 995,
            sliced: true,
            selected: true
        }];
        let piedatanetwork:any=[{
            name: 'Total Upload',
            y: 4167724
        }, {
            name: 'Total Download',
            y: 355483,
            sliced: true,
            selected: true
        }];

this.summaryPie(piedatamemory,'VLSI','memory');
this.summaryPie(piedatanetwork,'VLSI','network');

}

summaryOfMicroController(){
    this.Summary="MicroController Summary";

let microcontrollernetworkdata={
    "_id" : {
        "day" : 27,
        "month" : 10,
        "year" : 2017
    },
    "totalUpload" : 1722815,
    "usedDownload" : 154107
}

let MicroControllerFileCount={
  
    "gz" : 1025,
    "xml" : 660,
    "jar" : 12,
    "png" : 9801,
    "cmd" : 24,
    "css" : 1636,
    "js" : 1068,
    "properties" : 12,
    "txt" : 1798,
    "log" : 317,
    "html" : 1536,
    "class" : 0,
    "sh" : 102
}

 let  MicrocontrollerFileSize={

    "gz" : 638.9027,
    "xml" : 141.5229,
    "jar" : 7.9668,
    "png" : 296.0744,
    "cmd" : 0.0192,
    "css" : 20.9235,
    "js" : 42.8621,
    "properties" : 0.1554,
    "txt" : 16.6218,
    "log" : 24.5975,
    "html" : 97.2886,
    "class" : 0,
    "sh" : 0.0505
}
let microcontrollerData:any=[ ]
let microKeys:any[]=Object.keys(MicrocontrollerFileSize);
for(let key of microKeys){
  microcontrollerData.push({x:MicroControllerFileCount[key],y:MicrocontrollerFileSize[key],name:''+key,type:'.'+key});
}
this.bubble3dData(microcontrollerData,"Microcontroller");
let piedatamemory:any=[{
            name: 'Total Memory',
            y: 297
        }, {
            name: 'Used Memory',
            y: 116,
            sliced: true,
            selected: true
        }];
        let piedatanetwork:any=[{
            name: 'Total Upload',
            y: 1722815
        }, {
            name: 'Total Download',
            y: 154107,
            sliced: true,
            selected: true
        }];

this.summaryPie(piedatamemory,'Microcontroller','memory');
this.summaryPie(piedatanetwork,'Microcontroller','network');

}



colgraphprodlinestatussbyowner(colData,categories)
        {
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'columngraph',
                    type: 'column'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Total Memory usage by Labs'
                },
                xAxis: {
                    categories: categories
                },
                yAxis: {
                    title: {
                        text: 'Memory in Gb'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: ' '
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series:colData
            });
        }


bubble3dData(data,type){
 Highcharts.chart('bubblegraph', {
    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Summary of '+ type+ ' Files'
    },

    subtitle: {
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Number of files'
        },
        labels: {
             format: '{value} kb'
        },
        // plotLines: [{
        //     color: 'black',
        //     dashStyle: 'dot',
        //     width: 2,
        //     value: 65,
        //     label: {
        //         rotation: 0,
        //         y: 15,
        //         style: {
        //             fontStyle: 'italic'
        //         },
        //     },
        //     zIndex: 3
        // }]
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'File size'
        },
        labels: {
            format: '{value}'
        },
        maxPadding: 0.1,
        // plotLines: [{
        //     color: 'black',
        //     dashStyle: 'dot',
        //     width: 2,
        //     value: 50,
        //     label: {
        //         align: 'right',
        //         style: {
        //             fontStyle: 'italic'
        //         },
        //         text: 'Safe sugar intake 50g/day',
        //         x: -10
        //     },
        //     zIndex: 3
        // }]
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.type}</h3></th></tr>' +
            '<tr><th>File Count:</th><td>{point.x}</td></tr>' +
            '<tr><th>File size:</th><td>{point.y}</td></tr>' ,
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: data
    }]

});
}

summaryPie(data:any,type,id){


// Build the chart
Highcharts.chart(id, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Total '+id+' usage of '+type
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: data
    }]
});

}








}
