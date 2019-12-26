function randomBottle(){
    var degrees;
    $("#pSpin").hide();
    degrees = Math.floor((Math.random() * 4000) + 1);
    $("#spin").css({'transform' : 'rotate('+ degrees +'deg)'});
    $("#spin").removeAttr("onclick");
    setTimeout("onclickTrue()",3000);
}

function onclickTrue(){
    $("#spin").attr("onclick","randomBottle()");
    $("#pSpin").show();
}