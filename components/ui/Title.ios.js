import {Text, StyleSheet, Platform} from 'react-native'

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>

}

export default Title;


const styles = StyleSheet.create({
    title: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white',
       textAlign: 'center',
       borderColor: '#ddb52f',
       padding: 12,
       maxWidth: '80%',
       width: 300
    }
})