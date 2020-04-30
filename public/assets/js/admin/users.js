$(document).ready(function () {
   $('#table1').DataTable({
        "lengthMenu": [-1,10,25,50,"all"]
    });
  
    
    $("#updateUser").click((e)=>{
        e.preventDefault();
        const data ={_id:$("#_id").val(),phone: $('#phone').val(),fullnames: $('#fullnames').val(),username:$('#username').val(),role:$("#role").val()}
        $.ajax({
            method: "PUT",
            url:"/user/"+data._id,
            serverSide: true,
            type:"json",
            data: data,
            success:(data) => {
            $.each(data.user,(index, values)=>{
                 console.log(values);
            });
            $('#table1').DataTable().ajax.reload();
            },
            error:(xhr, message, status) => {
              console.log(`xhr: ${xhr} message: ${message} status: ${status}`);
    ;        }
        });
    });
    
});    
