import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';

export default function Nav() {
  return (
    <>
      <Box bg='black' px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight='semibold' fontSize='40' letterSpacing='wide' px={4} textColor='white'>polar</Box>
        </Flex>
      </Box>
    </>
  );
}