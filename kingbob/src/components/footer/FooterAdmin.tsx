import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NavLink from 'next/link'

export default function Footer() {
  const textColor = useColorModeValue("gray.400", "white");

  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      align={"center"}
      justify='space-between'
      px={{ base: "30px", md: "50px" }}
      pb='30px'
    >
      <Flex
        flexDirection='column'
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        <Text as='span' ms='4px'>
          &copy; {new Date().getFullYear()} VATSIM South East Asia. All Rights Reserved.
        </Text>
        <Text as='span' ms='4px'>
          HQ made by <NavLink href='/admin/profile/1300014' passHref>
            <Link color={'brand.400'}>
              Wildan Gunawan
            </Link>
          </NavLink> and <NavLink href='/admin/profile/1300014' passHref>
            <Link color={'brand.400'}>
              Frederick Arisandi
            </Link>
          </NavLink>.
        </Text>
      </Flex>

      <List display='flex' gap={{ base: "20px", md: "44px" }}>
        <ListItem>
          <NavLink href='https://vat-sea.com' passHref>
            <Link color={textColor}>
              VATSEA Website
            </Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href='/admin/support' passHref>
            <Link color={textColor}>
              Support
            </Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href='https://docs.vat-sea.com' passHref>
            <Link color={textColor}>
              Docs
            </Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href='https://docs.vat-sea.com/api' passHref>
            <Link color={textColor}>
              API
            </Link>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href='https://github.com/wildangunawan/headquarter' passHref>
            <Link color={textColor}>
              Contribute
            </Link>
          </NavLink>
        </ListItem>
      </List>
    </Flex>
  );
}
