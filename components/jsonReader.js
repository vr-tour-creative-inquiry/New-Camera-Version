
AFRAME.registerComponent('jsonreader',
  {
    schema: {
      id: { type: 'string' }
    },

    init: function () {

      var el = this.el

      var request = new XMLHttpRequest();
      request.open("GET", "https://raw.githubusercontent.com/vr-tour-creative-inquiry/New-Camera-Version/master/components/scenes.json", false);
      request.send(null)

      var my_JSON_object = JSON.parse(request.responseText);
      console.log(my_JSON_object.core);
      el.setAttribute('src', my_JSON_object.core.src);

      // for (scene in my_JSON_object) {
      //   console.log(my_JSON_object[scene]);
      //   var el = document.querySelector("#" + my_JSON_object[scene].id);
      //   console.log(el);
      // }

    }
  });