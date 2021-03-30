var userLikes = [9,12,9];
// first position is for Neil M, second for Nichole K, and third for Sadie F
var currentNeil = document.querySelector("#neil");
var currentNichole = document.querySelector("#nichole");
var currentSadie = document.querySelector("#sadie");

function likeIt(pos) {
    userLikes[pos]++;
    if (pos==0) {
        currentNeil.textContent = userLikes[pos] + " like(s)";
    } else if (pos==1) {
        currentNichole.textContent = userLikes[pos] + " like(s)";
    } else {
        currentSadie.textContent = userLikes[pos] + " like(s)";
    }
}