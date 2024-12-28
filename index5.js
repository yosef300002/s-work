var deta;
var solution;
function send(){
var nam = document.getElementById("input-name").value
var last = document.getElementById("input-last").value
var type = document.getElementById("input-type").value
var service = document.getElementById("input-service").value
var subject = document.getElementById("input-subject").value
    var data = {
        "name" : nam,
        "last name" : last,
        "problem type" : type,
        "the service type" : service,
        "problem subject" : subject
    }
    if(nam==""||last==""||type==""||service==""||subject==""){
        alert("الرجاء ملأ جميع الحقول بالمعلومات المطلوبة ")
        solution = 1
    }else{
        document.getElementById("input-name").value= " "
        document.getElementById("input-last").value= " "
        document.getElementById("input-type").value= " "
        document.getElementById("input-service").value= " "
        document.getElementById("input-subject").value= " "  
        location.reload()
    }
}
function reset(){
    document.getElementById("input-name").value= " "
    document.getElementById("input-last").value= " "
    document.getElementById("input-type").value= " "
    document.getElementById("input-service").value= " "
    document.getElementById("input-subject").value= " "
    location.reload()
}