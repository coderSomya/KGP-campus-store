import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {MaterialIcons} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons"

const cat = require('../assets/cat.jpg')

const LoginScreen = () => {

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
<TextInput placeholder="Enter your Email" style={{width: 300}}/>
</View>
<View style={styles.LoginInput}>
<AntDesign name='lock1' size={24} color="black"/>
<TextInput placeholder="Enter your Password" type="password" style={{width: 300}}/>
</View>
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
  }
})