function random(){
    var randomNumber = Math.floor(Math.random() * 30) + 4;
    var imgName = "schatzi_" + randomNumber + ".jpg";
    document.querySelector("img").src="SchatziImgs" + "/" + imgName ;
    }