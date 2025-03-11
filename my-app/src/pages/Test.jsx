import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Test = () =>

<button
  onClick={(e) => {
    e.preventDefault();
    // Ajouter la logique wishlist ici
  }}
  className="group absolute top-2 left-2 z-10 p-2 bg-charcoal-900/50 rounded-full transition-all hover:bg-red-500/20"
>
  <FontAwesomeIcon
    icon={faHeart}
    className="w-6 h-6 text-white transition-all duration-300 group-hover:text-red-500"
  />
</button>

export default Test;
