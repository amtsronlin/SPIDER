import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let clickedElement;
    $(document).on("click", ".column", function () {
        clickedElement = this;
    });
    $('#myModal').on('hidden.bs.modal', function () {
        const text = clickedElement.parentElement.previousElementSibling;
        console.log(text);
        let column = '';
        $(".form-check-input:checked").each(function () {
            column += $(this).val() + ",";
        });
        column = column.slice(0, -1);
        text.innerHTML = column;
    });
  }
}
