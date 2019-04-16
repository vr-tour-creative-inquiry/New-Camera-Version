
AFRAME.registerComponent ('jsonreader',
{
  
    init:function(){
      
      var request = new XMLHttpRequest();
      request.open("GET", "https://raw.githubusercontent.com/vr-tour-creative-inquiry/New-Camera-Version/master/components/scenes.json", false);
      request.send(null)
      console.log(request.responseText);
      var my_JSON_object = JSON.parse(request.responseText);
     
        console.log(my_JSON_object);
      }
});