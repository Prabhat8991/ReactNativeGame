import {Text, View, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({abc, onConfirmPress}) {
    
    return (
        <View style = {buttonStyle.outerContainer}>
        <Pressable
         onPress = {onConfirmPress}
         style = {({pressed}) => pressed? [buttonStyle.innerContainer, buttonStyle.pressed]:buttonStyle.innerContainer} android_ripple={{color: '#630323'}}>
        <Text style = {buttonStyle.buttonTextStyle}>{abc}</Text>
        </Pressable>
        </View>
    );
}

const buttonStyle = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 4,
    },
    innerContainer: {
        backgroundColor: '#C12056',
        borderRadius: 28,
        paddingHorizontal: 16,
        paddingVertical:8,
        margin: 4,
        elevation: 2
    },
    buttonTextStyle: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton;

