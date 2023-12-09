import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {MaterialIcons} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons"
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const cat = require('../assets/cat.jpg')

const RegisterScreen = () => {
  const [name, setName] = useState("");
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
        <Text style={styles.RegisterText}>
          Register to your account
        </Text>
        </View>

        <View styles={{marginTop: 30}}>
        <View style={styles.RegisterInput}>
<Ionicons name='ios-person' size={24} color="black" />
<TextInput value={name} onChangeText={(text)=> setName(text)}
placeholder="Enter your Name" style={{width: 300, fontSize: 18}}/>
</View>
<View style={styles.RegisterInput}>
<MaterialIcons name='email' size={24} color="black"/>
<TextInput value={email} onChangeText={(text)=> setEmail(text)}
placeholder="Enter your Email" style={{width: 300, fontSize: 18}}/>
</View>
<View style={styles.RegisterInput}>
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
<Pressable style={styles.RegisterButton}>
  <Text style={styles.RegisterButtonText}>Register</Text>
</Pressable>
<Pressable style={styles.RegisterButton} onPress={()=>navigation.goBack()}>
  <Text style={styles.RegisterButtonText}>Login</Text>
</Pressable></View>
      </KeyboardAvoidingView>
    </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  RegisterText:{
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "black",
  },
  RegisterInput: {
     flexDirection: "row",
     gap: 10,
     borderRadius: 5,
     padding: 10,
     alignItems:"center",
     backgroundColor: "#c5c5c5",
     color: "white",
     marginTop: 20,
  },
  RegisterButton:{
    alignItems: 'center',
    marginTop: 10
  },
  RegisterButtonText:{
    fontSize:17,
    fontWeight:"600"
  }
})