
function openPage(evt, pageName, homeImg) {
    if(homeImg == 0) {
        var elem = document.getElementById('home_img');
        elem.parentNode.removeChild(elem);
        elem.style.display = "hide"
    }
    else {
        var elem = document.getElementById('home_img');
        //elem.parentNode.appendChild(elem);
        elem.style.display = "block"
    }
    // Declare all variables

    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
