import { TruckIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import {
  BiBone,
  BiCamera,
  BiImageAlt,
  BiLandscape,
  BiMapAlt,
  BiMusic,
  BiPalette,
  BiWorld,
} from "react-icons/bi";

const IconCategory = ({ category, classes, alt }) => {
  switch (category) {
    case "cars":
      return <TruckIcon className={classes} />;
    case "wallpaper":
      return <BiImageAlt className={classes} alt={alt} />;
    case "websites":
      return <BiWorld className={classes} alt={alt} />;
    case "photo":
      return <BiCamera className={classes} alt={alt} />;
    case "music":
      return <BiMusic className={classes} alt={alt} />;
    case "nature":
      return <BiLandscape className={classes} alt={alt} />;
    case "art":
      return <BiPalette className={classes} alt={alt} />;
    case "travel":
      return <BiMapAlt className={classes} alt={alt} />;
    case "pets":
      return <BiBone className={classes} alt={alt} />;

    default:
      return <QuestionMarkCircleIcon className={classes} />;
  }
};

export default IconCategory;
