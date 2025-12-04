var postCount = 1;

window.onload = function() {
    document.getElementById("top").innerHTML = "Forum";
};

function postFunction() {
    if (postCount == 1) {
        var message = document.getElementById("message").value;
        document.getElementById("topic").innerHTML = message;
        postCount ++ ;
    } else if (postCount == 2) {
        var message = document.getElementById("message").value;
        document.getElementById("reply1").innerHTML = message;
        postCount ++ ;
    } else if (postCount == 3) {
        var message = document.getElementById("message").value;
        document.getElementById("reply2").innerHTML = message;
        postCount ++ ;
    } else {
        alert("You have posted 3 messages.")
    }
}

function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    postCount = 1;
}