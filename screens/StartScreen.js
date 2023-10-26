import {View, TextInput, StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartScreen() {
    return (<View style = {styles.inputContainer}>
        <TextInput style = {styles.inputField} maxLength={2} keyboardType='number-pad'/>
        <View style = {styles.buttonContainerStyle}>
        <View style = {styles.buttonStyle}>
        <PrimaryButton >Confirm</PrimaryButton>
        </View>
        <View style = {styles.buttonStyle}>
        <PrimaryButton>Reset</PrimaryButton>
        </View> 
        </View>
    </View>);
}

const styles = StyleSheet.create({
   inputContainer :  {
        alignItems: 'center',
        marginTop: 100,
        padding: 7,
        backgroundColor: '#4e0329',
        margin: 20,
        elevation: 4,
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25

    },
    inputField: {
        height: 50,
        width: 50,
        fontSize: 30,
        color: '#ddb52f',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        marginBottom: 10,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonStyle: {
        flex: 1
    },
    buttonContainerStyle: {
        flexDirection: 'row'
    }
})

export default StartScreen