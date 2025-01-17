import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    useColorModeValue,
    Link,
    Button,
    Flex,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import AddFSSRoster from './modal/AddFSSRoster';

const FSSRoster = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // Modal
    const { onOpen, modal } = AddFSSRoster();

    return (
        <>
            <Card>
                <Flex>
                    <Text
                        me="auto"
                        color={textColor}
                        fontSize="xl"
                        fontWeight="700"
                        lineHeight="100%"
                        px="15px" py="10px"
                    >
                        FSS Roster
                    </Text>
                    <Button colorScheme={"blue"} onClick={onOpen}>Add FSS</Button>
                </Flex>

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Name (CID)</Th>
                                <Th>Approved for</Th>
                                <Th>Approved by</Th>
                                <Th>Since</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <NavLink href="/profile/1000000" passHref>
                                        <Link color="brand.500">Kevin (1000000)</Link>
                                    </NavLink>
                                </Td>
                                <Td>ASEA_FSS</Td>
                                <Td>
                                    <NavLink href="/profile/1000005" passHref>
                                        <Link color="brand.500">Gru (1000005)</Link>
                                    </NavLink>
                                </Td>
                                <Td>3 Aug 2022</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <NavLink href="/profile/1000000" passHref>
                                        <Link color="brand.500">Kevin (1000000)</Link>
                                    </NavLink>
                                </Td>
                                <Td>ASEA_FSS</Td>
                                <Td>
                                    <NavLink href="/profile/1000005" passHref>
                                        <Link color="brand.500">Gru (1000005)</Link>
                                    </NavLink>
                                </Td>
                                <Td>3 Aug 2022</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <NavLink href="/profile/1000000" passHref>
                                        <Link color="brand.500">Kevin (1000000)</Link>
                                    </NavLink>
                                </Td>
                                <Td>ASEA_FSS</Td>
                                <Td>
                                    <NavLink href="/profile/1000005" passHref>
                                        <Link color="brand.500">Gru (1000005)</Link>
                                    </NavLink>
                                </Td>
                                <Td>3 Aug 2022</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>

            {/* Modal */}
            {modal}
        </>
    );
};

export default FSSRoster;