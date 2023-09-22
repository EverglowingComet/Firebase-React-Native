import { TouchableOpacity } from 'react-native';
import { COLOR_FLOATING_ACTION } from 'styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'

export function FloatingActionAdd(props) {
    return (
        <TouchableOpacity 
          style={{
            position: 'absolute',
            padding: 5, 
            width: 50,
            height: 50,
            right: 10,
            bottom: 10,
            borderRadius: 25,
            backgroundColor: COLOR_FLOATING_ACTION
          }}
          onPress={props.onPress} >
          <AntDesign 
            name='plus'
            size={40}
            color='white' />
        </TouchableOpacity>
    )
}