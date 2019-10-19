let courses;
$(document).ready(function ()  {

    // đọc dữ liệu ngay khi tải trang xong

    $.get("http://demo6370041.mockable.io/getcourses", function(data, status) {
        courses = data['data'];
        for (let i = 0; i < courses.length; i++) {
            // them dong vao
            let id = courses[i].id;
            let name = courses[i].name;
            tr = $(`<tr id =tr${id}></tr>`); //thêm id chỗ này nè
            tr.append("<td>"+ id + "</td>");
            tr.append("<td>"+ name +"</td>");
            $("#table-body").append(tr);

            $(`#tr${id}`).click(function() {
                let description = $(`#description${id}`);
                if (description.length > 0) {
                    description.remove();
                    return;
                }
                $.get(`http://demo6370041.mockable.io/course/${id}`,function(data,status){
                    $(`#description${id}`).remove();
                    tr1 = $(`<tr id =description${id}></tr>`); // add table row with id is description
                    tr1.append(`<td colspan="2"><p>${data['description']}</p><br><p>${data['textbook']}</p></td>`);
                    $(`#tr${id}`).after(tr1);
                });
            });
        }
        goToPage(1);
    },"json");

    $("#btn1").click(function() {
        goToPage(1);
    });

    $("#btn2").click(function() {
        goToPage(2);
    });

})

function goToPage(page) {
    for(let i = 1; i <= courses.length; i++) {
        // page 1 -> show: 0 < i < 5
        // page 2 -> show: 4 < i < 9
        let max = page * 4;
        let maxItemPerPage = 4;
        if (i <= max && i > max - maxItemPerPage) {
            $(`#tr${i}`).show();
        } else {
            $(`#tr${i}`).hide();
            $(`#description${i}`).remove();
        }
    }
}
