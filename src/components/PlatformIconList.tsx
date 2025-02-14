import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    globe: BsGlobe,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };

  return (
    <HStack marginY={1}>
      {platforms?.map((platform) => (
        <Icon key={platform.id} as={iconsMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
