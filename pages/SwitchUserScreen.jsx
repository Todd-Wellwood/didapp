import {
    Button, SafeAreaView,
    StyleSheet, Text, TextInput, TouchableWithoutFeedback, View
} from "react-native";
import {useState} from "react";


export function SwitchUserScreen({navigation}) {
    const [nameValue, setName] = useState('');
    const [colourValue, setColour] = useState('#FFF');

    const handleSaveName = (text) => {
        setName(text);
    };


    const handleColorChange = (color) => {
        setColour(color);
    };

    const postAccount = () => {
        navigation.navigate("Chat", {name: nameValue, colour: colourValue})
    }

    const colorOptions = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
        'black',
        'white',
        'gray',
        'lightgray',
        'darkgray',
        'purple',
        'pink',
        'cyan',
        'magenta',
        'beige',
        'gold',
        'silver',
        'brown',
        'olive',
        'navy',
    ];

    return (
        <View>
            <Text>Please enter your name:</Text>
            <TextInput
                style={{ backgroundColor: '#fff',marginBottom:20 }}
                placeholder="Enter your name"
                value={nameValue}
                onChangeText={handleSaveName}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    {colorOptions.slice(0, colorOptions.length / 2).map((color, index) => (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => handleColorChange(color)}
                        >
                            <View
                                style={{
                                    borderColor: "black",
                                    borderWidth: 1,
                                    backgroundColor: color,
                                    width: 25,
                                    height: 25,
                                    marginRight: 10,
                                }}
                            />
                        </TouchableWithoutFeedback>
                    ))}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {colorOptions.slice(colorOptions.length / 2).map((color, index) => (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => handleColorChange(color)}
                        >
                            <View
                                style={{
                                    backgroundColor: color,
                                    borderColor: "black",
                                    borderWidth: 1,
                                    width: 25,
                                    height: 25,
                                    marginRight: 10,
                                }}
                            />
                        </TouchableWithoutFeedback>
                    ))}
                </View>

                <View style={{ marginTop: 20, marginBottom: 20}}>
                    {colourValue && (
                        <View
                            style={{
                                backgroundColor: colourValue,
                                borderColor: "black",
                                borderWidth: 1,
                                width: 100,
                                height: 100,
                            }}
                        />
                    )}
                </View>
            </View>
            <Button title="Save" onPress={postAccount} />
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