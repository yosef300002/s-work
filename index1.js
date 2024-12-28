function icon1(){
    document.getElementById("icon").innerHTML = 
    ` <div class="button" id="button">
        <ul><li><a href="file:///C:/Users/2023/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/magazen.com/index2/index2.html" target="_blank"><button > articals</button></a></li></ul>
        <ul><li><a href="file:///C:/Users/2023/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/magazen.com/index4/index4.html" target="_blank"><button >content</button></a></li></ul>
        <ul><li><a href="file:///C:/Users/2023/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/magazen.com/index5/index5.html" target="_blank"><button>contact</button></a></li></ul>
        </div>
        `
        document.getElementById("title").style.display = "none" 
}
function icon2(){
    document.getElementById("title").style.display = ""
    document.getElementById("button").style.display = "none"
    document.getElementById("icon").innerHTML = `<p id="icon" onclick="icon1()">=</p>`
}