import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.css']
})
export class RelationComponent implements OnInit {

  @ViewChild('wiModal') wiModal;
  index = 2;
  j = 1;
  rtc = '';

  constructor() {}

  ngOnInit() {
    let clickedElement: HTMLElement;
    const statusRTC = 'Status:<select class="selectpicker" id="status" multiple data-live-search="true">' +
      '<option value="track">Accepted</option>' +
      '<option value="parent">Approved</option>' +
      '<option value="relate">Closed</option>' +
      '<option value="implement">In progress</option>' +
      '<option value="child">New</option>' +
      '</select><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>';
    const create = 'Create:<select class="selectpicker" id="create" data-live-search="true">' +
      '<option value="track">Mary</option>' +
      '<option value="parent">Peter</option>' +
      '<option value="relate">Join</option>' +
      '<option value="implement">Tom</option>' +
      '<option value="child">Laura</option>' +
      '</select><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>';
    const own = 'Own:<select class="selectpicker" id="own" data-live-search="true">' +
      '<option value="track">Mary</option>' +
      '<option value="parent">Peter</option>' +
      '<option value="relate">Join</option>' +
      '<option value="implement">Tom</option>' +
      '<option value="child">Laura</option>' +
      '</select><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>';
    const file = 'File:<select class="selectpicker" id="file" multiple data-live-search="true">' +
      '<option value="track">RBEI</option>' +
      '<option value="parent">MCP</option>' +
      '<option value="relate">RCAR</option>' +
      '<option value="implement">V850</option>' +
      '<option value="child">TC3X</option>' +
      '</select><div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>';
    const due = 'Due:'
      + '<mat-form-field><input matInput[matDatepicker]="picker" placeholder="Choose a date">'
      + '<mat-datepicker-toggle matSuffix[for]="picker"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>'
      + '<div class="remove"><i class="fa fa-trash" aria-hidden="true"></i></div>';
    if (this.rtc === "1") {
      $(".conditionTab2").remove();
    } else {
      $(".conditionTab1").remove();
    }

    function remove(e: any): void {
      $(".djs-label-d", this.clickedElement).html('');
      $(".djs-label-u", this.clickedElement).html('');
      const select = $("#myModal select").val("");
      const radio = $("#myModal input[name=optradio]").val("");
    }

    function addNode(i, select, event) {
      if (this.index === i) {
        this.index++;
        $('#node' + i + "-dom").html("<div class='node-display' id='node" + i
          + "-display' title='Work Item' class='context' data-toggle='context' data-target='#context-menu'>"
          + "<input class='wiInput' type='text' value='wi" + i + "'/></div><div class='path path-right' data-index="
          + this.index + " data-toggle='modal' data-target='#myModal'><svg width='90px' height='100px'>"
          + "<g><defs><marker id='marker' viewBox='0 0 20 20' refX='11' refY='10' markerWidth='10' markerHeight='10' orient='auto'>"
          // tslint:disable-next-line:max-line-length
          + "<path d='M 1 5 L 11 10 L 1 15 Z' style='fill: black; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: black;'></path>"
          + "</marker></defs ><text class='djs-label-u' style='font-family: Arial, sans-serif; font-size: 11px;'></text>"
          // tslint:disable-next-line:max-line-length
          + "<line x1='0' y1='50' x2='90' y2='50' marker-end='url(#marker)' stroke='black' stroke-width='2' /><text class='djs-label-d' style='font-family: Arial, sans-serif; font-size: 11px;'></text>" +
          "</g ></svg ></div>");
        i++;
        $('.query-diagram-area').append('<div id="node' + i + '-dom" class="group-object"></div>');
      }
    }
    function addAtt(htmlTxt) {
      $('#add-attr' + this.j).html(htmlTxt);
      this.j++;
      $('.d-flex').append('<div class="add-attr" id="add-attr' + this.j + '"></div>');
    }

    $(document).on('click', ".ico", function () {
      if ($("i", this).html() === "remove") {
        $("i", this).html("add");
      } else {
        $("i", this).html("remove");
      }
    });

    $('#myModal').on('hidden.bs.modal', function () {
      const select = $("select", this).val();
      const radio = $("input[name=optradio]:checked", this).val();
      const idx = $("input[name=index]", this).val();
      if (select !== '') {
        $(".djs-label-d", clickedElement).html('<tspan x="6" y="62">' + select + '</tspan>');
        $(".djs-label-u", clickedElement).html('<tspan x="6" y="45">' + radio + '</tspan>');
        addNode(idx, select, this);
      }
    });

    $(document).on("click", ".path-right", function () {
      const idx = $(this).data('index');
      $("#myModal #index").val(idx);
      clickedElement = this;
    });

    $(document).on('click', ".node-display", function (e) {
      $("#popupRC").css({
        position: "absolute", top: e.pageY,
        left: e.pageX, display: "block"
      });
    });

    $(document).on('click', ".remove", function (e) {
      alert($(this).parent());
      $(this).parent().remove();
    });

    // $('#wiModal .save').click(function (e) {
    //   e.preventDefault();
    //   $('#wiModal').modal('hide');
    //   return false;
    // });

    // $('.choose').click(function (e) {
    //   e.preventDefault();
    //   $('#wiModal').modal('hide');
    //   return false;
    // });

    $('#wiModal').on('hidden.bs.modal', function () {
      $('#popupRC').css({ display: 'none' });
    });

    $('#condSelect').on('changed.bs.select', function (e) {
      if ($('#condSelect').val() === 'due') {
        addAtt(due);
      } else if ($('#condSelect').val() === 'own') {
        addAtt(own);
      } else if ($('#condSelect').val() === 'create') {
        addAtt(create);
      } else if ($('#condSelect').val() === 'status') {
        addAtt(statusRTC);
      } else if ($('#condSelect').val() === 'file') {
        addAtt(file);
      }
      $(".selectpicker").val('');
    });

  }

  btnSave(e) {
    e.preventDefault();
    this.closeModel();
  }

  btnChoose(e) {
    e.preventDefault();
    this.closeModel();
  }

  closeModel() {
    this.wiModal.nativeElement.className = 'modal hide';
  }
}
