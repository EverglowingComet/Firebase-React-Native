import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from "pages/Home";
import LocationList from "pages/location/LocationList";
import LocationTracking from "pages/location/LocationTracking";
import store from "store";

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
        name="/location"
        component={LocationStackNavigator}
        options={{
          title: "Location",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="location" color={color} size={size} />
          ),
          headerShown: true,
          headerShown: false,
        }} />
      <Tabs.Screen
        name="/gallery"
        component={Home}
        options={{
          title: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="photo" color={color} size={size} />
          ),
          headerShown: true,
        }} />
    </Tabs.Navigator>
  )
}

const LocationStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="/location/list">
      <Stack.Screen
        name="/location/list"
        component={LocationList}
        options={{
          title: "Locations",
        }} />
      <Stack.Screen
        name="/location/tracking"
        component={LocationTracking}
        options={{
          title: "Location Track",
          headerShown: true,
        }} />
    </Stack.Navigator>
  )
}
