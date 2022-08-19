console.log('Let’s get ready to party with jQuery!');

$('img').addClass('image-center');
$("p:last").remove();
$('#title').css('font-size', (Math.random()*100));
$("ol").append('<li>I made it!!!!</li>');
$('ol').append($('<li>')).text("Nevermind! Lists are silly! I'm so sorry for wasting your time!!!");
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });
$('img').on('click', function(){
    $(this).remove();
})
