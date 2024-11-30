import { View, StyleSheet, Text, StatusBar, Image, Pressable,TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";



export default function signin() {
    const logo = require("../assets/favicon.png");
    return (
        <LinearGradient colors={["black", "gray"]} style={styles.background}>
            <StatusBar hidden={true} />
            <View style={styles.mainviewapp}>
                <Image source={logo} contentFit={"contain"} style={styles.image} />
                <Text style={styles.text1}>Couple Chat</Text>
            </View>
            <View style={styles.mainviewsignin}>
                <Text style={styles.text2}>Sign Up</Text>
                

                 <Text style={styles.text3}>Mobile</Text>
                <TextInput  style={styles.textInput} inputMode="tel"/>

                 <Text style={styles.text3}>First Name</Text>
                <TextInput  style={styles.textInput} inputMode="Text"/>

                <Text style={styles.text3}>Last Name</Text>
                <TextInput  style={styles.textInput} inputMode="Text"/>

                <Text style={styles.text3}>Password</Text>
                <TextInput  style={styles.textInput} inputMode="Text" secureTextEntry={true} maxLength={20} />

                <Pressable style={styles.btn2}><Text>Insert Profile Image</Text></Pressable>
                <View style={styles.viewcontroll}>
                    <Pressable style={styles.btn2}><Text>Sign Up</Text></Pressable>
                    <Pressable style={styles.btn3}><Text>Allready have an account Sign In</Text></Pressable>
                </View>  
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap:20,
    },
    mainviewapp:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    text1:{
        fontSize:35,
        fontWeight: 'bold',
        
    },
    mainviewsignin:{

    }
})
