import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Group>
          <Drawer.Screen
            name="FHome"
            component={TabsDrawer}
            options={{
              title: "Welcome",
              headerShown: false,
            }} />
          <Drawer.Screen
            name="GHome"
            component={Home}
            options={{
              title: "Drawer",
              headerShown: false,
            }} />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const TabsDrawer = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="TabA"
        component={StackDrawer}
        options={{
          title: "Tab A",
          headerShown: false,
        }} />
      <Tabs.Screen
        name="TabB"
        component={Home}
        options={{
          title: "Tab B",
          headerShown: false,
        }} />
    </Tabs.Navigator>
  )
}

const StackDrawer = () => {
  return (
    <Stack.Navigator initialRouteName="StackA">
      <Stack.Screen
        name="StackA"
        component={Home}
        options={{
          title: "Stack A",
          headerShown: true,
        }} />
      <Stack.Screen
        name="StackB"
        component={Home}
        options={{
          title: "Stack B",
          headerShown: true,
        }} />
    </Stack.Navigator>
  )
}
