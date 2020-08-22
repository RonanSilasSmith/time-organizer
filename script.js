var TextContent = ["Test1", "Test 2", "Test 3", " ", " ", " ", " ", " ", " "];
var IDtime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

if(localStorage.getItem("storage")){
    TextContent = JSON.parse(localStorage.getItem("storage"));
}else{
    localStorage.setItem("storage", JSON.stringify(TextContent));
}
console.log(localStorage.getItem("storage"))



for(i=0; i < TextContent.length; i++){
    $("#" + i).text(TextContent[i]);
}






$(".description").on("click", "p", function(){
    var text = $(this)
    .text()
    .trim();
  
    var id = $(this)
    .attr("id");

    console.log(id);

    var textInput = $("<textarea id=\""+ id  +"\">")
    .val(text);
  
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
})


$(".description").on("blur", "textarea", function(){
  var text = $(this)
    .val()
    .trim();

    var id = $(this)
    .attr("id");

    console.log(id);
    console.log(text);

    TextContent[id] = text;
    localStorage.setItem("storage", JSON.stringify(TextContent))
    console.log(TextContent)
});
  

$(".saveBtn").on("click",function(){
    location.reload();
    //^ I am SORRY I even decided writing this COULD be a good idea.
    //This code just sucks
    //the alternative gets real tricky real fast, so... reload
})


setInterval(function(){
    var currentTime = moment().format('hh');


    for(i=0; i < TextContent.length; i++){
        console.log(currentTime);
        console.log(IDtime[i]);
        if(currentTime > IDtime[i]){
            $("#" + i).parent().addClass('past');
        }else if(currentTime === IDtime[i]){
            $("#" + i).parent().addClass('present');
        }else if(currentTime < IDtime[i]){
            $("#" + i).parent().addClass('future');
        }
    }
    




    if(parseInt(currentTime)>8){
        console.log("yeppers")
    }
    console.log(currentTime);
}, 1000);