import { Link, Text, useColorModeValue, Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Card from '@components/card/Card';
import NavLink from 'next/link';

const DivisionStaffs = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <Card>
            <Text
                me="auto"
                color={textColor}
                fontSize="xl"
                fontWeight="700"
                lineHeight="100%"
                px="15px" py="10px"
            >
                Staff
            </Text>

            <Box overflowX={"auto"}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Position</Th>
                            <Th>Name</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>South East Asia Division Director (VATSEA1)</Td>
                            <Td>
                                <NavLink href="/profile/1000000" passHref>
                                    <Link color="brand.500">Otto (1000004)</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>South East Asia Division Director (VATSEA2)</Td>
                            <Td>
                                <NavLink href="/profile/1000000" passHref>
                                    <Link color="brand.500">Gru (1000005)</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>South East Asia Division Director (VATSEA3)</Td>
                            <Td>
                                <NavLink href="/profile/1000000" passHref>
                                    <Link color="brand.500">Mel (1000006)</Link>
                                </NavLink>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Card>
    );
};

export default DivisionStaffs;