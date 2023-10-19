import { HStack, Image, Text } from "@chakra-ui/react";
import logo2 from "../assets/logo2.png";
import logo1 from "../assets/logo1.png";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo1} boxSize="60px" />
        <Text color="white">NavBar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
