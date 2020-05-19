function random(){
    var randomNumber = Math.floor(Math.random() * 20) + 7;
    var imgName = "schatzi_" + randomNumber + ".jpg";
    document.getElementById("imageid").src="SchatziImgs" + "/" + imgName ;
    }