import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.query-diagram-area1').show();
    $('.query-diagram-area2').hide();
    $('.query-diagram-area3').hide();
    $('select').on('change', function () {
      if ((<HTMLInputElement>this).value === "1") {
        $('.query-diagram-area1').show();
        $('.query-diagram-area2').hide();
        $('.query-diagram-area3').hide();
      } else if ((<HTMLInputElement>this).value === "2") {
        $('.query-diagram-area1').hide();
        $('.query-diagram-area2').show();
        $('.query-diagram-area3').hide();
      } else if ((<HTMLInputElement>this).value === "3") {
        $('.query-diagram-area1').hide();
        $('.query-diagram-area2').hide();
        $('.query-diagram-area3').show();

      }
    });
  }

}
