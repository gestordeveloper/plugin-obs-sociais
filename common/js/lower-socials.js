var bc = new BroadcastChannel('obs-lower-thirds-socials');

bc.onmessage = function (ev) {
    received_data=ev.data.split("|");

    //youtube
    document.getElementById("description-youtube").innerHTML = received_data[0];
    document.getElementById("social-name-youtube").innerHTML = received_data[1];
    youtube = true;

    if(received_data[0] == '' && received_data[1] == ''){
        youtube = false;
    }

    //Facebook
    document.getElementById("description-facebook").innerHTML = received_data[2];
    document.getElementById("social-name-facebook").innerHTML = received_data[3];
    facebook = true;

    if(received_data[2] == '' && received_data[3] == ''){
        facebook = false;
    }
    

    //Instagram
    document.getElementById("description-instagram").innerHTML = received_data[4];
    document.getElementById("social-name-instagram").innerHTML = received_data[5];
    instagram = true;
    
    if(received_data[4] == '' && received_data[5] == ''){
        instagram = false;
    }

    animation = received_data[6];

    if (animation == 'animateIn') {
        if(youtube){
            document.getElementById("box-youtube").classList.add("show");
        }

        if(facebook){
            document.getElementById("box-facebook").classList.add("show");
        }

        if(instagram){
            document.getElementById("box-instagram").classList.add("show");
        }

        window.setTimeout(function(){
            document.getElementById("box-youtube").classList.remove("show");
            document.getElementById("box-facebook").classList.remove("show");
            document.getElementById("box-instagram").classList.remove("show");
        }, 10000);
    };

    if (animation == 'animateOut') {
        document.getElementById("box-youtube").classList.remove("show");
        document.getElementById("box-facebook").classList.remove("show");
        document.getElementById("box-instagram").classList.remove("show");
    };

}