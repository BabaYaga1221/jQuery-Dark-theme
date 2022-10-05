$(document).ready(function(){
    $(".container").click(function(){
        $(".radio").toggleClass("active");
        $("body").toggleClass("dark");
    });
});