import {Text, View, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children}) {
    function onPress() {

    }
    return (
        <View style = {buttonStyle.outerContainer}>
        <Pressable style = {({pressed}) => pressed? [buttonStyle.innerContainer, buttonStyle.pressed]:buttonStyle.innerContainer} onPress={onPress} android_ripple={{color: '#630323'}}>
        <Text style = {buttonStyle.buttonTextStyle}>{children}</Text>
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

