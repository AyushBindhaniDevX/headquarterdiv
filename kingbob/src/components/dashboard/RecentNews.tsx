import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, StackDivider, Text, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import Card from "@components/card/Card";
import NavLink from "next/link";

const RecentNews = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "gray.400";

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
                    Latest News
                </Text>
            </Flex>

            <VStack
                spacing="20px"
                align="stretch"
                px="15px"
                py="10px"
                divider={<StackDivider borderColor='gray.200' />}
            >
                <Box>
                    <Text fontWeight={500} color={textColorSecondary} fontSize="sm">
                        Region
                    </Text>
                    <Text textAlign={"center"} fontSize={"sm"}>No news has been added.</Text>
                </Box>
                <Box>
                    <Text fontWeight={500} color={textColorSecondary} fontSize="sm">
                        Division
                    </Text>

                    {/* Title */}
                    <NavLink href={"/news/lorem-ipsum-dolor"} passHref>
                        <Link fontWeight={600} color={textColor}>Lorem, ipsum dolor.</Link>
                    </NavLink>

                    {/* Content, but truncated anyway */}
                    <Text fontSize={"sm"} noOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aperiam voluptatibus? Nesciunt saepe ex veritatis ducimus voluptatibus perferendis eum doloribus, soluta aliquid! Voluptate quidem dolorum aspernatur corporis adipisci? Odio facere provident recusandae esse, nihil corrupti fugit molestiae quisquam voluptate animi inventore eos tempora porro nesciunt ipsa eveniet, id numquam beatae.</Text>

                    {/* CTA */}
                    <NavLink href={"/news/lorem-ipsum-dolor"} passHref>
                        <Link color={"blue.500"} fontSize="xs">Read more</Link>
                    </NavLink>
                </Box>
                <Box>
                    <Text fontWeight={500} color={textColorSecondary} fontSize="sm">
                        vACC
                    </Text>

                    {/* Title */}
                    <NavLink href={"/lorem-ipsum-dolor"} passHref>
                        <Link fontWeight={600} color={textColor}>Lorem, ipsum dolor.</Link>
                    </NavLink>

                    {/* Content, but truncated anyway */}
                    <Text fontSize={"sm"} noOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aperiam voluptatibus? Nesciunt saepe ex veritatis ducimus voluptatibus perferendis eum doloribus, soluta aliquid! Voluptate quidem dolorum aspernatur corporis adipisci? Odio facere provident recusandae esse, nihil corrupti fugit molestiae quisquam voluptate animi inventore eos tempora porro nesciunt ipsa eveniet, id numquam beatae.</Text>

                    {/* CTA */}
                    <NavLink href={"/lorem-ipsum-dolor"} passHref>
                        <Link color={"blue.500"} fontSize="xs">Read more</Link>
                    </NavLink>
                </Box>

                {/* Read more */}
                <NavLink href={"/news"} passHref>
                    <Link color={"blue.500"} textAlign="center">
                        Check all news
                        <ArrowForwardIcon ml={1} />
                    </Link>
                </NavLink>
            </VStack>
        </Card>
    );
};

export default RecentNews;