'use client'

import { FaRocketchat } from 'react-icons/fa';
import { IconContext } from "react-icons";

function EmptyChatIcon() {
  return <IconContext.Provider value={{ color: "rgb(107 114 128 / 0.2)", size: "95px" }}>
    <FaRocketchat></FaRocketchat>
  </IconContext.Provider>;
}

export default EmptyChatIcon;
