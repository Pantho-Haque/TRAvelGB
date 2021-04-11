var url = new URL(window.location.href);
var sr = url.search;
sr = sr.slice(1, sr.length);
var obj = {}
var srObj = sr.split("&").map(sr => sr.split("=")).map((v, i, arr) => {
    var key = v[0];
    var value = v[1];
    obj[key] = value;
});

var idOfProduct = obj.id;

var xhr = new XMLHttpRequest();
xhr.open("GET", "script/products.json", true);
xhr.onload = () => {
    if (xhr.status == 200) {
        var serverJson = JSON.parse(xhr.responseText);
        $("#productImg").attr("src", serverJson[idOfProduct].link);
        $("#productImg").attr("alt", serverJson[idOfProduct].name);
        $("#productName").text(serverJson[idOfProduct].name);

    }
}
xhr.send();




// zoom the image 
mediumZoom('#productImg', {
    margin: 0,
    background: "#000",
    scrollOffset: 0,
    width: "100vw"
})

