
$(document).ready(function ()  {
    $.get("http://demo6370041.mockable.io/getcourses", function(data, status){

        for (var i = 0; i < data.data.length; i++) {
            var id = data.data[i].id;
            var name = data.data[i].name;
            // them dong vao
            tr = $("<tr></tr>");
            tr.append("<td>"+ id + "</td>");
            tr.append("<td>"+ name +"</td>");
            /*tr.append("<td>"+ email + "</td>");
            /!*tr.append("<td>"+ phone + "</td>");*!/
          /!*  tr.append("<a href='#'>Edit</a>  |  <a href='#' onclick='confirmRemoval()'>Delete</a>")*!/
*/                $("#table-body").append(tr);
        }
    },"json");
