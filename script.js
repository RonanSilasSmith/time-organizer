var TextContent = ["", "", "", "", "", "", "", "", ""];

if(!localStorage.getItem("storage")){
    console.log(localStorage.getItem("storage"))
    localStorage.setItem("storage", TextContent)
    console.log(localStorage.getItem("storage"))
}else{
    console.log(localStorage.getItem("storage"));  
    TextContent = localStorage.getItem("storage");
}


for(i = 0; i < TextContent.length; i++){
    
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
    localStorage.setItem("storage", TextContent);
    console.log(TextContent)
});
  

$(".saveBtn").on("click",function(){
    var text = $("textarea").val();
    $("textarea").replaceWith("<p>"+text+"</p>");


})