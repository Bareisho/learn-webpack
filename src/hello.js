
import style from "./index.css";
import Desert from "./Desert.jpg";
function print() {
  let img = new Image();
  img.src=Desert;
  img.classList.add(style.avatar);
  document.body.append(img);
}
export default print;