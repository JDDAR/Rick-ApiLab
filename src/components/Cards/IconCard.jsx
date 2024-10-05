import { FaHeartCircleCheck } from "react-icons/fa6";
import { IoSkull } from "react-icons/io5";
import { GrStatusUnknown } from "react-icons/gr";

import { FaPeopleGroup } from "react-icons/fa6";
import { RiAliensFill } from "react-icons/ri";

import { IoFemaleSharp } from "react-icons/io5";
import { IoMale } from "react-icons/io5";

const IconCard = ({ status, species, gender }) => {
  const statusIcon = () => {
    switch (status) {
      case "Alive":
        return (
          <div className="toolIcon">
            <FaHeartCircleCheck title="Alive" style={{ color: "#75DF50" }} />
          </div>
        );
      case "Dead":
        return <IoSkull title="Dead" style={{ color: "lightcoral" }} />;
      case "unknown":
        return (
          <GrStatusUnknown title="unknown" style={{ color: "lightblue" }} />
        );
      default:
        return (
          <GrStatusUnknown title="unknown" style={{ color: "lightblue" }} />
        );
    }
  };

  const speciesIcon = () => {
    switch (species) {
      case "Human":
        return <FaPeopleGroup title="Human" style={{ color: "lightyellow" }} />;
      case "Alien":
        return <RiAliensFill title="Alien" style={{ color: "tan" }} />;
      default:
        return (
          <GrStatusUnknown title="unknown" style={{ color: "lightblue" }} />
        );
    }
  };

  const genderIcon = () => {
    switch (gender) {
      case "Male":
        return <IoMale title="Male" style={{ color: "gold" }} />;
      case "Female":
        return <IoFemaleSharp title="Female" style={{ color: "purple" }} />;
      default:
        return <GrStatusUnknown title="unknown" />;
    }
  };

  return (
    <>
      <div className="contenedorIcons">
        <span>{statusIcon()}</span>
        <span>{speciesIcon()}</span>
        <span>{genderIcon()}</span>
      </div>
    </>
  );
};

export default IconCard;
