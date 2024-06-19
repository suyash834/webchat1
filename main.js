function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "web1.html";
}

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");;
});
