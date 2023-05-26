import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {auth, db} from "../firebase";
import {useEffect, useState} from "react";


/*
This is the home page, where users can log relapses on drugs and see the information about their use
 */
export function HomeScreen({navigation}) {

    const user = auth.currentUser;

    const [store, setStore] = useState()
    const [loading, setLoading] = useState(true) // show a loading spinner instead of store data until it's available

    useEffect(() => {
        const fetchQuery = async () => {
            const storeData = await db.collection('users').doc(user.uid).get() // this queries the database
            if (storeData) {
                setStore(storeData) // save the data to store state
                setLoading(false) // set loading to false
            } else {
                // something went wrong, show an error message or something
                console.log("Error")
            }
        }

        fetchQuery()

    })

    if (loading) {
        return (
            <ActivityIndicator/>
        )
    }

    function lastUsedToString(id) {
        let time = null
        if(id === 1){
            time = store.data().MJLastUsed;
        }
        if(id === 2){
            time = store.data().CocaineLastUsed;
        }
        if(id === 3){
            time = store.data().HeroineLastUsed;
        }
        if(id === 4){
            time = store.data().AlcoholLastUsed;
        }
        if(id === 5){
            time = store.data().MethLastUsed;
        }

        //If they have used this before
        if (time != null) {
            //Format and return as readable date
            return "Last used: " + time;
        } else {
            return "No record of use";
        }
    }

    this.state = {
        data: [
            {
                id: 1,
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzU1agOoWmtuAhJKWb-NMQ0bV_BoBWzYA8aZkssZLw_RR-hvi6fkX1YLYDUvelaQSFrl0&usqp=CAU",
                description: "Marijuana,",
                lastUsed: lastUsedToString(1)
            },
            {
                id: 2,
                icon: "https://static.thenounproject.com/png/2729186-200.png",
                description: "Cocaine,   ",
                lastUsed:lastUsedToString(2)
            },
            {
                id: 3,
                icon: "https://cdn-icons-png.flaticon.com/512/2765/2765325.png",
                description: "Heroine,   ",
                lastUsed:  lastUsedToString(3)
            },
            {
                id: 4,
                icon: "https://static.thenounproject.com/png/917640-200.png",
                description: "Alcohol,    ",
                lastUsed: lastUsedToString(4)
            },
            {
                id: 5,
                icon: "https://cdn-icons-png.flaticon.com/512/1685/1685905.png",
                description: "Meth,         ",
                lastUsed: lastUsedToString(5)
            },
        ],
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.notificationList}
                data={this.state.data}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({item}) => {
                    return (
                        <TouchableWithoutFeedback onPress={() =>  navigation.navigate("RelapseConfirmation", item)}>
                            <View style={styles.notificationBox}>
                                <Image style={styles.image}
                                       source={{uri: item.icon}}/>
                                <Text style={styles.name}>{item.description}</Text>
                                <Text style={styles.smallText}>{item.lastUsed}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate("ConfirmPurge")}} style={styles.button}>
                    <Text style={styles.buttonText}>Purge Records</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate("ConfirmationLogout")}} style={styles.button}>
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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