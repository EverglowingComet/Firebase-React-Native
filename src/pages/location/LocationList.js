import { useNavigation } from '@react-navigation/native';
import { FloatingActionAdd } from 'components/control/FloatingActionAdd';
import LocationItem from 'components/location/LocationItem';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';


export default function LocationList(props) {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([]);

  return (
    <View
      style={[
        styles.container,
        {
          flexFlow: 'column',
        },
      ]}>
      <FlatList 
        style={{flex: 1}}
        renderItem={(item) => {
          return (
            <LocationItem 
              item={item} 
              onPress={e=> {
                navigation.navigate("/location/tracking", {
                  item: item
                })
              }} />
          )
        }}
        data={locations} />
      <FloatingActionAdd title='new' onPress={e=> {
        navigation.navigate("/location/tracking")
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
  