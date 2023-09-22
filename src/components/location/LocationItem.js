import { Text } from 'react-native';
import { TouchableOpacity, View } from 'react-native';

export default function LocationItem(props) {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text>{props.item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}