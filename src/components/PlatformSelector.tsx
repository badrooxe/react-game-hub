import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import usePlateform, { ParentPlateformResult } from "../hooks/usePlateform";
import PlateformIcon from "./PlateformIcon";

interface PlatformSelectorProps {
  selectedPlateform: ParentPlateformResult | null;
}
const PlatformSelector = ({ selectedPlateform }: PlatformSelectorProps) => {
  const { data } = usePlateform(selectedPlateform);

  return (
    <Menu>
      <MenuButton
        marginLeft={"20px"}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        Plateform
      </MenuButton>
      <MenuList>
        {data.map((plateform) => {
          console.log(plateform.platforms[0].slug);
          return (
            <MenuItem key={plateform.id}>
              <PlateformIcon
                platforms={[plateform.platforms[0]]}
              ></PlateformIcon>
              <span style={{ marginLeft: "5px" }}>{plateform.name}</span>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
