/*
var dataTable = $("#user_data").dataTable({
    "processing":true,
    "serverSide":true,
    "order":[],
    "ajax":{
        url:"/users",
        type:"post"
    },
    "columnDefs":[
        {
         "targets":[0, 3, 4],
         "orderable":false,
        },
       ],
});
//update
$('#user_form').on("submit",(event)=>{
event.preventDefault();
$.ajax({
  url:"/user/edit"+$(this).attr("_id"),
  method:'POST',
  data: new FormData(this),
  contentType:false,
  processData:false,
  success: (data)=>{
      alert(data);
      $("#user_form")[0].reset();
      $("#userModal").modal('hide');
      dataTable.ajax.reload();
  }
});
});
//delete
$(".delete").on('click',()=>{
 if(confirm("Are you sure you want to delete ?")){
    $.ajax({
        url:'user/delete'+$(this).attr("_id"),
        method: 'delete',
        success: (data) => {
         alert(data);
         dataTable.ajax.reload();
        } 
    });
 } else {
     return false;
 }
 
}); */
$(document).ready(function () {
    $('#table1').DataTable({
       pageLength:3
    });

    //retrieve data on tr
});    
