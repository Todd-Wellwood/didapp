import {
    AppState,
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import {useEffect, useRef, useState} from "react";
import {useRoute} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export function ChatScreen({navigation}) {
    const route = useRoute();
    //let name = (route.params === undefined) ? "NAME_NOT_SET" : route.params.name;
    //let colour = (route.params === undefined) ? "red" : route.params.colour;

    let name = "test"
    let colour = "red"

    const flatListRef = useRef(null);

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);


    const handleMessageChange = (text) => {
        setMessage(text);
        scrollToEnd();
    };

    const handleSendMessage = () => {
        if (message === "" || message == null) {
            return;
        }
        if (name === "NAME_NOT_SET") {
            alert("Please set a profile to chat");
            return;
        }

        console.log(colour)

        // Here you can implement the logic to send the message
        const newMessage = {
            name: name + ":",
            message: message,
            colourOfMessage: colour
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);

        // Clear the message input
        setMessage("");

        scrollToEnd();
    };

    function scrollToEnd() {
        flatListRef.current.scrollToEnd({animated: true});
    }

// Function to save the array of strings to AsyncStorage
    const saveArrayToAsyncStorage = async (array) => {
        try {
            await AsyncStorage.setItem('messages', JSON.stringify(array));
            console.log('Array of strings saved successfully!');
        } catch (error) {
            console.log('Error saving array of strings:', error);
        }
    };

    // Function to load the array of strings from AsyncStorage
    const loadArrayFromAsyncStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('messages');
            if (value !== null) {
                const array = JSON.parse(value);
                console.log('Array of strings loaded successfully!' + array);
                // Update your state or perform any necessary operations with the loaded array
                setMessages(array);
            }
        } catch (error) {
            console.log('Error loading array of strings:', error);
        }
    };

// Listen for app state changes
    const handleAppStateChange = (nextAppState) => {
        if (nextAppState === 'background' || nextAppState === 'inactive') {
            // App is going to the background or becoming inactive
            saveArrayToAsyncStorage(messages);
        }
    };

// Add the listener for app state changes
    useEffect(() => {
        AppState.addEventListener('change', handleAppStateChange);

        // Load the array of strings when the app is opened
        loadArrayFromAsyncStorage();

        // Clean up the listener when the component unmounts
        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []); // The empty dependency array ensures this effect runs only once during component mount


    useEffect(() => {
        const interval = setInterval(() => {
            scrollToEnd();
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={{flex: 1}}>
            <FlatList
                style={{flex: 1, marginBottom: 80}}
                ref={flatListRef}
                data={messages}
                renderItem={({item}) => (
                    <View style={[styles.MessageFrame, { alignSelf: 'flex-start' }]}>
                        <Text style={{color: item.colourOfMessage}}>{item.name}</Text>
                        <Text style={{color: item.colourOfMessage}}>{item.message}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />


            <View style={{paddingTop: 20, flex: 1, position: "absolute", bottom: 0, left: 0, right: 0,}}>
                <TextInput
                    placeholder="Enter your message"
                    value={message}
                    onChangeText={handleMessageChange}
                    style={{backgroundColor: "#fff", marginTop: 10}}
                />
                <Button title="Send" onPress={handleSendMessage}/>
            </View>
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

    MessageFrame: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
})