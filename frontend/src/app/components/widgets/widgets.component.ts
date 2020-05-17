import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min';
// import * as AOS from 'aos';
declare let AOS: any;
@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'حضور کارمندان',
      },
      axisY: {
        includeZero: false,
      },
      data: [
        {
          type: 'line',
          indexLabelFontSize: 16,
          dataPoints: [
            { y: 450 },
            { y: 414 },
            {
              y: 520,
              indexLabel: '\u2191 highest',
              markerColor: 'red',
              markerType: 'triangle',
            },
            { y: 460 },
            { y: 450 },
            { y: 500 },
            { y: 480 },
            { y: 480 },
            {
              y: 410,
              indexLabel: '\u2193 lowest',
              markerColor: 'DarkSlateGrey',
              markerType: 'cross',
            },
            { y: 500 },
            { y: 480 },
            { y: 510 },
          ],
        },
      ],
    });
    chart.render();
  }
}
