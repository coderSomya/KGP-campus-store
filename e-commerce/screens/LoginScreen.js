import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {MaterialIcons} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const cat = require('../assets/cat.jpg')

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const navigation = useNavigation();
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor: "white",
      alignItems: "center"
    }}>
      <View>
    <Image
    style ={{width: 150, height: 100}}
    source= {cat}
    /></View>

    <View>
      <KeyboardAvoidingView>
        <View styles={{
          alignItems: "center"
        }}>
        <Text style={styles.LoginText}>
          Login to your account
        </Text>
        </View>

        <View styles={{marginTop: 30}}>
<View style={styles.LoginInput}>
<MaterialIcons name='email' size={24} color="black"/>
<TextInput value={email} onChangeText={(text)=> setEmail(text)}
placeholder="Enter your Email" style={{width: 300, fontSize: 18}}/>
</View>
<View style={styles.LoginInput}>
<AntDesign name='lock1' size={24} color="black"/>
<TextInput value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true}
placeholder="Enter your Password" type="password" style={{width: 300, fontSize:18}}/>
</View>
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginVertical: 10
        }}>
<Pressable style={styles.LoginButton}>
  <Text style={styles.LoginButtonText}>Login</Text>
</Pressable>
<Pressable style={styles.LoginButton}
onPress={()=>navigation.navigate("Register")}
>
  <Text style={styles.LoginButtonText}>Register</Text>
</Pressable>
</View>
      </KeyboardAvoidingView>
    </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  LoginText:{
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "black",
  },
  LoginInput: {
     flexDirection: "row",
     gap: 10,
     borderRadius: 5,
     padding: 10,
     alignItems:"center",
     backgroundColor: "#c5c5c5",
     color: "white",
     marginTop: 20,
  },
  LoginButton:{
    alignItems: 'center',
    marginTop: 10
  },
  LoginButtonText:{
    fontSize:17,
    fontWeight:"600"
  }
})