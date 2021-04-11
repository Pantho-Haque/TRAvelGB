/*Add form validation in Contact Us Form.Such as Name should not be less
than 9 characters and email should contain @, phone number should
contain + 92 integer type and cannot be left empty submission. (Error
Messages should be displayed in bootstrap alert divs). */

function validcheck() {
    var name = $("#name")[0].value;
    var email = $("#email")[0].value;
    var phone = $("#phone")[0].value;
    phone = phone.toString();
    var role = document.getElementsByName('role');
    role = !(role[0].checked || role[1].checked);

    var city = $("#city")[0].value;
    var message = $("#message")[0].value;

    // name
    if (name.length < 9) {
        $("#name").addClass("is-invalid");
        return false;
    }
    else {
        $("#name").removeClass("is-valid");
        $("#name").removeClass("is-invalid");
        $("#name").addClass("is-valid");
    }

    // email
    if (email.indexOf("@") == -1) {
        $("#email").addClass("is-invalid");
        return false;
    }
    else {
        $("#email").removeClass("is-valid");
        $("#email").removeClass("is-invalid");
        $("#email").addClass("is-valid");
    }

    // phone
    if (phone.indexOf("+92") != 0) {
        $("#phone").addClass("is-invalid");
        return false;
    }
    else {
        $("#phone").removeClass("is-valid");
        $("#phone").removeClass("is-invalid");
        $("#phone").addClass("is-valid");
    }

    // role
    if (role) {
        $(".form-check-input").addClass("is-invalid");
        return false;
    }
    else {
        $(".form-check-input").removeClass("is-valid");
        $(".form-check-input").removeClass("is-invalid");
        $(".form-check-input").addClass("is-valid");
    }

    // city
    if (city == "Open this select menu") {
        $("#city").addClass("is-invalid");
        return false;
    }
    else {
        $("#city").removeClass("is-valid");
        $("#city").removeClass("is-invalid");
        $("#city").addClass("is-valid");
    }

    // message
    if (message.length == 0) {
        $("#message").addClass("is-invalid");
        return false;
    }
    else {
        $("#message").removeClass("is-valid");
        $("#message").removeClass("is-invalid");
        $("#message").addClass("is-valid");
    }

}





/* home page animations */

$(".banner").css({
    top: "500px",
    opacity: "0"
});
setTimeout(() => {
    $(".banner").animate({
        opacity: '1',
        top: '0px'
    }, "slow");
}, 500);


$(".pdt").css({
    top: "500px",
    opacity: "0"
});
setTimeout(() => {
    $(".pdt").animate({
        opacity: '1',
        top: '0px'
    }, "slow");
}, 1500);