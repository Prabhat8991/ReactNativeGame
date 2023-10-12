import {View, TextInput, StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartScreen() {
    return (<View style = {styles.inputContainer}>
        <TextInput style = {styles.inputField} maxLength={2}/>
        <PrimaryButton>Confirm</PrimaryButton>
        <PrimaryButton>Reset</PrimaryButton>
    </View>);
}

const styles = StyleSheet.create({
   inputContainer :  {
        marginTop: 100,
        padding: 20,
        backgroundColor: '#72063c',
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
        fontSize: 32,
        color: '#ddb52f',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        marginBottom: 10,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default StartScreen