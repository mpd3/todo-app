console.log("hey its working");
$(document).ready(function(){
    $("ol").on("click","input[type=checkbox]",function(){
        $(this).closest("li").toggleClass("line-through");

    })
})