import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/pages/Home";
import LocationList from "./src/pages/location/LocationList";
import LocationTracking from "./src/pages/location/LocationTracking";
import store from "./src/store";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {HomeTabsDrawer()}
      </NavigationContainer>
    </Provider>
  );
}

const HomeTabsDrawer = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="LocationTab"
        component={LocationStackNavigator}
        options={{
          title: "Location",
          headerShown: false,
        }} />
      <Tabs.Screen
        name="GalleryTab"
        component={Home}
        options={{
          title: "Gallery",
          headerShown: true,
        }} />
    </Tabs.Navigator>
  )
}

const LocationStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LocationList">
      <Stack.Screen
        name="LocationList"
        component={LocationList}
        options={{
          title: "Locations",
          headerShown: true,
        }} />
      <Stack.Screen
        name="LocationTracking"
        component={LocationTracking}
        options={{
          title: "Location Track",
          headerShown: true,
        }} />
    </Stack.Navigator>
  )
}
