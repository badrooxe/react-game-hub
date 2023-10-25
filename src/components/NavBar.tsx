import { HStack, Image, Text } from "@chakra-ui/react";
//import logo2 from "../assets/logo2.png";
import logo1 from "../assets/logo1.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" paddingRight="10px">
        <Image src={logo1} boxSize="60px" />
        <Text></Text> //to add something
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
