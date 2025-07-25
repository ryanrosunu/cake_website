function changeButtonColor(i) {
    var buttons = document.getElementsByClassName('button');
    buttons[i].style.backgroundColor = 'blue';
}

function changeLinkColor(class_name, i) {
    var links = document.getElementsByClassName(class_name);
    links[i].style.color = 'blue';
}

function backToNormal(class_name, i) {
    var buttons = document.getElementsByClassName(class_name);
    buttons[i].style.backgroundColor = '';
    var links = document.getElementsByClassName(class_name);
    links[i].style.color = '';
}


function confirmFormSubmission(event) {
    let placeOrder = confirm("Confirm Order Submission");
    if (placeOrder) {
        window.location.href="ordersuccess.html"
    }
    else {
        event.preventDefault();
    }
}