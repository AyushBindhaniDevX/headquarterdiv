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

const PastCPT = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
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
                    Past CPT
                </Text>
            </Flex>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Student</Th>
                            <Th>For</Th>
                            <Th>Date and time</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <NavLink href="/profile/1000000" passHref>
                                    <Link color="brand.500">Kevin (1000000)</Link>
                                </NavLink>
                            </Td>
                            <Td>Student 2 (S2)</Td>
                            <Td>31 Aug 2022 13:00 UTC</Td>
                            <Td>
                                <NavLink href={"https://somewhere.com"} passHref>
                                    <Link color="brand.500" isExternal>View report</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default PastCPT;