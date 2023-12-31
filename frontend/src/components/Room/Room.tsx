import {
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import AddPizza from "../Pizza/AddPizza";
import AddUserToRoomForm from "../User/LinkUserToRoomForm";
import NewUserForm from "../User/NewUserForm";
import RoomDetails from "./RoomDetails";

const Room = () => {
  return (
    <Card>
      <CardHeader>Room</CardHeader>
      <CardBody>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Details</Tab>
            <Tab>Create User</Tab>
            <Tab>Add User to Room</Tab>
            <Tab>Eat!</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <RoomDetails />
            </TabPanel>
            <TabPanel>
              <NewUserForm />
            </TabPanel>
            <TabPanel>
              <AddUserToRoomForm />
            </TabPanel>
            <TabPanel>
              <AddPizza />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default Room;
