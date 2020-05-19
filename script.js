function random(){
    var randomNumber = Math.floor(Math.random() * 30) + 3;
    var imgName = "schatzi_" + randomNumber + ".jpg";
    document.getElementById("imageid").src="SchatziImgs" + "/" + imgName ;
    }