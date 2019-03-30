import Hello from "./hello.js";
import Desert from "./Desert.jpg";

new Hello();
let img = new Image();
  img.src=Desert;
  img.classList.add("avatar");
  document.body.append(img);

  if (module.hot) {
    module.hot.accept('./hello.js', function() {
    Hello();
  })
}