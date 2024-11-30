import { View, StyleSheet, Text, Image, TextInput, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function signIn() {
    return (
        <LinearGradient colors={['#E91E63', '#ffffff']} style={styles.background} >
            <View style={styles.view1}>
                <View style={styles.view2}>
                    
                    <Image style={styles.image} src="../assets/adaptive-icon.png"/>
                    <Text style={styles.text1}>Couple Chat</Text>
                    <View style={styles.view4}>
                    <Text style={styles.text3}>"Best thing that’s ever happened to me."</Text>
                    </View>
                    

                </View>
                <View style={styles.view3}>

                    <Text style={styles.text2}>Sign In</Text>

                    <Text style={styles.text4}>Mobile</Text>
                    <TextInput style={styles.input1} inputMode="tel" maxLength={10} />

                    <Text style={styles.text4}>Password</Text>
                    <TextInput style={styles.input1} inputMode="text" secureTextEntry={true} maxLength={20}/>

                    <View style={styles.view5}>
                        <Pressable style={styles.btn1}><Text style={styles.btntext}>Sign In</Text></Pressable>
                        <Pressable style={styles.btn2}><Text style={styles.btntext}>New , Register</Text></Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    view1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",


    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    view2: {      
        height: '100%',
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap:20,
        paddingHorizontal:10,
    },
    view3: {
        
        height: '100%',
        width: '55%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        color: "white",
        fontSize:30,  
    },
    text2: {
        color: "balck",
        fontSize:40,
        fontWeight: "bold",
        marginBottom:20,
    },
    image: {
        borderWidth:2,
        borderStyle: "solid",
        borderColor: "white",
        height:80,
        width:80,
        borderRadius:50,
    },
    text3:{
        fontSize:20,
        alignSelf: "center",
        marginTop:10,
       
    },
    view4:{
        borderStyle: "solid",
        borderWidth:1,
        borderColor: "white",
        height:100,
        width:150,
        borderRadius:10,
        
    },
    text4:{
        fontSize:22,
        marginBottom:10,
        marginTop:5,
    },
    input1:{
        width:200,
        height:40,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth:1,
        borderRadius:10,
        paddingStart:10,
    },
    view5:{
       
        marginTop:10,
        rowGap:10,
        
    },
    btn1:{
        borderRadius:10,
        width:200,
        height:40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"blue"
    },
    btn2:{   
        borderRadius:10,
        width:200,
        height:40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"red"
    },
    btntext:{
       fontSize:20,
       fontWeight:"bold", 
    }

})