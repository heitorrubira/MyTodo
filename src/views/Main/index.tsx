import {
  Box,
  Button,
  Card,
  Container,
  Checkbox,
  Flex,
  List,
  ListItem,
  Text,
  TextInput,
} from '../../components';


export type Props = {};

export default function Main({}: Props) {
  return (
    <Container>
      <Flex>
        <Box>

          <Card
            title="To-do List"
            buttons={[
              <Button color="secondary">Clear</Button>,
              <Button>Add</Button>
            ]}
          >
            <Flex space={2}>
              <Box>
                <TextInput label="Add a new task" />
              </Box>
              <Box>
                <Text>My tasks:</Text>
              </Box>
              <Box>
                <List>
                  <ListItem
                    onClick={() => {}}  
                  >Item 1 <Checkbox /></ListItem>
                  <ListItem>Item 2</ListItem>
                  <ListItem>Item 3</ListItem>
                </List>
              </Box>
            </Flex>
          </Card>

        </Box>
      </Flex>
    </Container>
  );
}