// - Import react components
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    TouchableOpacityStyles: {
        margin: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    layoutRow: {
        flexDirection: 'row'
    },
    layoutColumn: {
        flexDirection: 'column'
    },
    blackColorText: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    grayColorText: {
        color: '#78909c',
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    leftPaddingText: {
        paddingLeft: 10
    },
});

export default styles