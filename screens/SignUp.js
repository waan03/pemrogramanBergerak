import React, { useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Button, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Padding, FontFamily, Border } from "../GlobalStyles";

import { readDatabase, writeDatabase } from '../utils';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (email.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    try {
      const response = await fetch('https://688c-158-140-180-62.ngrok-free.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'Failed to register user');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to register user');
    }
  };


  return(
      <View style={styles.signUp}>
      <View style={[styles.frame, styles.frameLayout2]}>
        <Image
          style={[styles.frameIcon, styles.frameLayout2]}
          contentFit="cover"
          source={require("../assets/frame8.png")}
        />
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <View>
            <Text style={[styles.signUp1, styles.signUp1Clr]}>Sign Up</Text>
            <Text style={[styles.welcomeBack, styles.signUp1Clr]}>
              Welcome back !
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame2, styles.frameLayout1]}>
        <View style={styles.frameParent}>
          <View>
            <Text style={[styles.email, styles.emailTypo]}>Username</Text>
          </View>
          <View style={styles.emailNPw}>
            <View style={[styles.ssWrapper, styles.frame3SpaceBlock]}>
              <TextInput
                style={[styles.ss, styles.ssTypo]}
                placeholder="Username"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#000"
              />
            </View>
            <View style={[styles.frameGroup, styles.ssWrapperLayout]}>
              <View style={[styles.frame3, styles.frame3Position]}>
                <TextInput
                  style={[styles.ss, styles.ssTypo]}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  placeholderTextColor="#000"
                />
              </View>
              <View style={[styles.passwordWrapper, styles.frame3Position]}>
                <Text style={[styles.email, styles.emailTypo]}>PASSWORD</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frame4, styles.frameLayout1]}>
          <Button title="Register" onPress={ handleRegister } />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            
          <View style={[styles.frame5, styles.frameLayout]}>
            <View style={[styles.frame6, styles.frameLayout]}>
              <View style={[styles.frameChild, styles.frameBorder]} />
              <Text style={[styles.doYouHave, styles.emailTypo]}>
                Do You Have an Account?
              </Text>
              <View style={[styles.frameItem, styles.frameBorder]} />
            </View>
             <Button title="SIGN IN" onPress={() => navigation.goBack() }/>
          </View>
        </View>
      </View>
    </View>
  )
}



// const SignUp = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.signUp}>
//       <View style={[styles.frame, styles.frameLayout2]}>
//         <Image
//           style={[styles.frameIcon, styles.frameLayout2]}
//           contentFit="cover"
//           source={require("../assets/frame8.png")}
//         />
//         <View style={[styles.frame1, styles.frameFlexBox]}>
//           <View>
//             <Text style={[styles.signUp1, styles.signUp1Clr]}>Sign Up</Text>
//             <Text style={[styles.welcomeBack, styles.signUp1Clr]}>
//               Welcome back !
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View style={[styles.frame2, styles.frameLayout1]}>
//         <View style={styles.frameParent}>
//           <View>
//             <Text style={[styles.email, styles.emailTypo]}>EMAIL</Text>
//           </View>
//           <View style={styles.emailNPw}>
//             <View style={[styles.ssWrapper, styles.frame3SpaceBlock]}>
//               <TextInput
//                 style={[styles.ss, styles.ssTypo]}
//                 placeholder="Email"
//                 placeholderTextColor="#000"
//               />
//             </View>
//             <View style={[styles.frameGroup, styles.ssWrapperLayout]}>
//               <View style={[styles.frame3, styles.frame3Position]}>
//                 <TextInput
//                   style={[styles.ss, styles.ssTypo]}
//                   placeholder="Password"
//                   secureTextEntry={true}
//                   placeholderTextColor="#000"
//                 />
//               </View>
//               <View style={[styles.passwordWrapper, styles.frame3Position]}>
//                 <Text style={[styles.email, styles.emailTypo]}>PASSWORD</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={[styles.frame4, styles.frameLayout1]}>
//           <Pressable
//             style={[styles.buttonStyle2Shadow, styles.buttonShadowBox]}
//             onPress={() => navigation.navigate("MainMenu1")}
//           >
//             <Text style={styles.button}>SIGN UP</Text>
//           </Pressable>
//           <View style={[styles.frame5, styles.frameLayout]}>
//             <View style={[styles.frame6, styles.frameLayout]}>
//               <View style={[styles.frameChild, styles.frameBorder]} />
//               <Text style={[styles.doYouHave, styles.emailTypo]}>
//                 Do You Have an Account?
//               </Text>
//               <View style={[styles.frameItem, styles.frameBorder]} />
//             </View>
//             <Pressable
//               style={[styles.buttonStyle2Shadow1, styles.buttonShadowBox]}
//             >
//               <Text style={styles.button}>SIGN IN</Text>
//             </Pressable>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  frameLayout2: {
    width: 278,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  signUp1Clr: {
    color: Color.colorPaletteHitam,
    textAlign: "left",
  },
  frameLayout1: {
    width: 290,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  emailTypo: {
    fontSize: FontSize.captionHeavy_size,
    color: Color.colorPaletteHitam,
  },
  frame3SpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_mid,
  },
  ssTypo: {
    fontFamily: FontFamily.readexProBold,
    fontWeight: "700",
  },
  ssWrapperLayout: {
    height: 43,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 288,
  },
  frame3Position: {
    left: 2,
    position: "absolute",
  },
  frameLayout: {
    width: 289,
    alignItems: "center",
    overflow: "hidden",
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  frameIcon: {
    height: 273,
  },
  signUp1: {
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    fontFamily: FontFamily.readexProBold,
    fontWeight: "700",
  },
  welcomeBack: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.inlingH1,
    opacity: 0.7,
    textAlign: "left",
  },
  frame1: {
    width: 275,
    marginTop: 31,
  },
  frame: {
    height: 373,
    alignItems: "center",
  },
  email: {
    textAlign: "left",
    fontFamily: FontFamily.readexProBold,
    fontWeight: "700",
  },
  ss: {
    fontSize: FontSize.inlingP_size,
  },
  ssWrapper: {
    height: 43,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 288,
    justifyContent: "flex-end",
  },
  frame3: {
    top: 2,
    width: 269,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_mid,
    justifyContent: "center",
    overflow: "hidden",
  },
  passwordWrapper: {
    top: -18,
  },
  frameGroup: {
    marginTop: 20,
  },
  emailNPw: {
    marginTop: 3,
  },
  frameParent: {
    height: 124,
    paddingLeft: Padding.p_10xs,
    width: 288,
  },
  frameChild: {
    width: 66,
  },
  doYouHave: {
    fontFamily: FontFamily.readexProRegular,
    textAlign: "center",
    marginLeft: 8,
  },
  frameItem: {
    width: 67,
    marginLeft: 8,
  },
  frame6: {
    height: 15,
    flexDirection: "row",
    width: 289,
  },
  frame5: {
    height: 88,
    marginTop: 27,
  },
  frame4: {
    height: 171,
    paddingRight: Padding.p_12xs,
    marginTop: 34,
  },
  frame2: {
    height: 329,
    marginTop: 13,
  },
  signUp: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_32xl,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});


