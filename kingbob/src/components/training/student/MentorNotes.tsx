import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    useColorModeValue,
    Link,
    Box,
    Flex,
    Button,
    Center,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';

const MentorNotes = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const [showMePls, setShowMePls] = useState(false);

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
                    Mentor Notes
                </Text>
                <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
            </Flex>

            {
                showMePls
                    ? <Box>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Mentor</Th>
                                    <Th>Comment / Note</Th>
                                    <Th>For training</Th>
                                    <Th>Added at</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Otto (1000004)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>
                                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus praesentium optio harum laudantium ipsam earum! Dolore esse magnam sint quasi! Enim facilis aperiam laboriosam sit amet explicabo iusto, natus perspiciatis.</Text>
                                    </Td>
                                    <Td>#123 at 25 Aug 2022</Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                </Tr>
                                <Tr height={"auto"}>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Otto (1000004)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, possimus?
                                    </Td>
                                    <Td>-</Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                    : <Center height={"100%"} width={"100%"} my="2em">No one has ever said anything about you.</Center>
            }
        </Card>
    );
};

export default MentorNotes;