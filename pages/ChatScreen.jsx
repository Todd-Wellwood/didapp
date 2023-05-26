import {
    Button,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { getName } from "../nameJavaScript";
import {useEffect, useRef, useState} from "react";

export function ChatScreen({ navigation }) {
    const flatListRef = useRef(null);

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleMessageChange = (text) => {
        setMessage(text);
        scrollToEnd();
    };

    const handleSendMessage = () => {
        // Here you can implement the logic to send the message
        const newMessage = {
            name: "\ntest" + ":",
            message: message,
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);

        // Clear the message input
        setMessage("");

        scrollToEnd();
    };

    function scrollToEnd() {
        flatListRef.current.scrollToEnd({ animated: true });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            scrollToEnd();
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={{ flex: 1 }} behavior="padding">
                <FlatList style={{marginBottom:80}}
                    ref={flatListRef}
                    data={messages}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.message}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

            <View
                style={{
                    paddingTop: 20,
                    flex: 1,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            >
                <TextInput
                    placeholder="Enter your message"
                    value={message}
                    onChangeText={handleMessageChange}
                    style={{ backgroundColor: "#fff", marginTop: 10 }}
                />
                <Button title="Send" onPress={handleSendMessage} />
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
})