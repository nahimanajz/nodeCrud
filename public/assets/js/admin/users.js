$(document).ready(function () {
   $('#table1').DataTable({
        "lengthMenu": [-1,10,25,50,"all"]
    });
  
    //retrieve data on tr
    $("#updateUser").click((e)=>{
        e.preventDefault();
        const data ={ phone: $('#phone').val(),fullnames: $('#fullnames').val(),username:$('#username').val(),role:$("#phone").val()}
        $.ajax({
            method: "PUT",
            url:"/user/"+$('#phone').val(),
            serverSide: true,
            type:"json",
            data: data,
            success:(data) => {
            $.each(data.user,(values, index)=>{
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
