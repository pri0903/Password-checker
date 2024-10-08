let password =  document.getElementById("inputBox");
let strengthPill = document.getElementById("strengthPill");
password.oninput = function() {
    let value = password.value;
    let widthPower = ["2%", "5%", "25%" , "50%", "75%", "100%" ];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f", "#008000"];
    let point = 0;

    if(value.length >= 5){
        let arrTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/];
        arrTest.forEach((item) => {
            if(item.test(value)){
            point = point+1;
        }} )

    }

    strengthPill.style.width = widthPower[point];
    strengthPill.style.backgroundColor = colorPower[point]
}