import { Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo, SiPlaystationvita } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons";

interface platformProps {
  platforms: Platform[];
}

const PlateformIcon = ({ platforms }: platformProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    "xbox-series-x": FaXbox,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    "xbox-old": FaXbox,
    xbox: FaXbox,
    playstation: FaPlaystation,
    playstation5: FaPlaystation,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    "ps-vita": SiPlaystationvita,
    linux: FaLinux,
    apple: FaApple,
    macos: FaApple,
    mac: FaApple,
    android: FaAndroid,
    "nintendo-switch": SiNintendo,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };
  const renderedIcons = new Set<IconType>();
  return (
    <div>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        if (!renderedIcons.has(IconComponent)) {
          renderedIcons.add(IconComponent);
          return (
            <Icon
              as={IconComponent}
              key={platform.slug}
              color="gray.500"
              marginTop="7px"
              marginRight={"5px"}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
export default PlateformIcon;
