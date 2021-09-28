import {
  Container,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Checkbox,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "white");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Your details</Heading>
            <Text>If you already have an account, click here to login.</Text>
            <Button variant="link" onClick={toggleColorMode}>
              Toggle color mode
            </Button>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} width="full">
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Martin"></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Choutka"></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Moskevská"></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="Praha"></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value="cz">Czech Republic</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked>Ship to billing address</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button size="lg" w="full">
                Place Order
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg={bgColor}
        ></VStack>
      </Flex>
    </Container>
  );
}
