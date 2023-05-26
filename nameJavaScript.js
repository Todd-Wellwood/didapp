    // Storing a variable
    import {AsyncStorage} from "react-native";

    export const saveName = async (name) => {
        try {
            await AsyncStorage.setItem('name', name);
            console.log('Name saved successfully!');
        } catch (error) {
            console.log('Error saving name:', error);
        }

        return await getName();
    };

    // Retrieving a variable
    export const getName = async () => {
        try {
            let name = await AsyncStorage.getItem('name');
            if (name !== null) {
                console.log('Stored name:', name);
            }
            if(name == null){
                name = "NOT SET";
            }
            return name;
        } catch (error) {
            console.log('Error retrieving name:', error);
        }
    };