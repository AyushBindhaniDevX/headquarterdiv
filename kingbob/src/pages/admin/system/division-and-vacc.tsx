// Basically this is division and vACC list
import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, VStack, Text, useColorModeValue, StackDivider, Link, Divider } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import NavLink from "next/link"

const DivisionAndvACCList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Division and vACC List">
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Divisions and vACCs List
                </Text>

                <Card>
                    <Accordion
                        allowMultiple
                        allowToggle
                        defaultIndex={0} // to open first item by default
                    >
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        South East Asia (SEA)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack
                                    spacing={4}
                                    divider={<StackDivider />}
                                >
                                    <NavLink href="/admin/division/SEA" passHref>
                                        <Link color="brand.500">South East Asia Division</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/HK" passHref>
                                        <Link color="brand.500">Hong Kong vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/IDN" passHref>
                                        <Link color="brand.500">Indonesia vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/MYS" passHref>
                                        <Link color="brand.500">Malaysia vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/MYR" passHref>
                                        <Link color="brand.500">Myanmar vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/PHL" passHref>
                                        <Link color="brand.500">Phillipines vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/SGP" passHref>
                                        <Link color="brand.500">Singapore vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/THA" passHref>
                                        <Link color="brand.500">Thailand vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/VCL" passHref>
                                        <Link color="brand.500">Vietnam - Cambodia - Laos vACC</Link>
                                    </NavLink>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        West Asia (WA)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack
                                    spacing={4}
                                    divider={<StackDivider />}
                                >
                                    <NavLink href="/admin/division/WA" passHref>
                                        <Link color="brand.500">West Asia Division</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/AFG" passHref>
                                        <Link color="brand.500">Afghanistan vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/BGD" passHref>
                                        <Link color="brand.500">Bangladesh vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/BTN" passHref>
                                        <Link color="brand.500">Bhutan vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/IND" passHref>
                                        <Link color="brand.500">India vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/NPL" passHref>
                                        <Link color="brand.500">Nepal vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/PAK" passHref>
                                        <Link color="brand.500">Pakistan vACC</Link>
                                    </NavLink>
                                    <NavLink href="/admin/vacc/SRM" passHref>
                                        <Link color="brand.500">Sri Lanka & Maldives vACC</Link>
                                    </NavLink>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                </Card>
            </VStack>
        </AdminLayout>
    );
};

export default DivisionAndvACCList;