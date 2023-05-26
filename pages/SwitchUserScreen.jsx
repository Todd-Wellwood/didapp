import {
    Button,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {saveName} from "../nameJavaScript";
import {useEffect, useState} from "react";



/*
This is the home page
 */
export function SwitchUserScreen({navigation}) {
    const [name, setName] = useState('');

    const handleSaveName = (text) => {
        setName(text);
    };

    const postName = () => {
        saveName(name).then(r => console.log(r));
    }

    return (
        <View>
            <TextInput
                placeholder="Enter your new name"
                value={name}
                onChangeText={handleSaveName}
            />
            <Button title="Save" onPress={postName} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    formContent: {
        flexDirection: 'row',
        marginTop: 30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconBtnSearch: {
        alignSelf: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    notificationList: {
        marginTop: 20,
        padding: 10,
    },
    notificationBox: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 10,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 20
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000000",
        marginLeft: 10,
        alignSelf: 'center'
    },
    smallText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#000000",
        marginLeft: 10,
        alignSelf: 'center'
    },
})