import { useEffect } from 'react';
import { useState } from 'react';
import { Image } from 'expo-image';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color, Border, Padding } from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { readDatabase } from '../utils.js';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://688c-158-140-180-62.ngrok-free.app/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error('Error fetching data: ', error);
        Alert.alert('Error', 'Gagal mengambil data pengguna');
      });
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      AsyncStorage.setItem('email', user.email).then(() => {
        navigation.navigate('MainMenu', { email: user.email });
      });
      // Pindah ke layar Home setelah login sukses
    } else {
      Alert.alert('Login Gagal', 'Email atau Password salah');
    }
  };

  return (
    <View style={styles.login}>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require('../assets/frame8.png')}
        />
        <View style={styles.signInParent}>
          <Text style={styles.signIn}>Sign In</Text>
          <Text style={styles.welcomeBack}>Welcome back !</Text>
        </View>
      </View>

      <View style={styles.frame1}>
        <View style={styles.frameParent}>
          <View style={styles.emailWrapper}>
            <Text style={styles.email}>Username</Text>
          </View>
          <View style={styles.emailNPw}>
            <View style={styles.ssWrapper}>
              <TextInput
                style={styles.ss}
                placeholder="Username"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#000"
              />
            </View>
            <View style={styles.frameGroup}>
              <View style={styles.passwordWrapper}>
                <Text style={styles.email}>PASSWORD</Text>
              </View>
              <View style={styles.frame2}>
                <View style={styles.frame3}>
                  <TextInput
                    style={styles.ss}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholderTextColor="#000"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame4}>
          <Button title="Login" style={styles.button} onPress={handleLogin} />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <View style={styles.frame5}>
            <View style={styles.frame6}>
              <View style={styles.frameChild} />
              <Text style={styles.dontHaveAccount}>
                Don’t have account yet ?
              </Text>
              <View style={styles.frameItem} />
            </View>
            <Button
              style={styles.button}
              title="Register"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginTop: 10,
  },
  frameIcon: {
    position: 'relative',
    width: 278,
    height: 273,
    overflow: 'hidden',
  },
  signIn: {
    position: 'relative',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: FontFamily.readexProBold,
    color: Color.colorPaletteHitam,
    textAlign: 'left',
  },
  welcomeBack: {
    position: 'relative',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: FontFamily.inlingH1,
    color: Color.colorPaletteHitam,
    textAlign: 'left',
    opacity: 0.7,
  },
  signInParent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 68,
    alignSelf: 'start',
    marginTop: 31,
  },
  frame: {
    width: 278,
    height: 373,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
  email: {
    position: 'relative',
    fontSize: FontSize.captionHeavy_size,
    fontWeight: '700',
    fontFamily: FontFamily.readexProBold,
    color: Color.colorPaletteHitam,
    textAlign: 'left',
  },
  emailWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  ss: {
    position: 'relative',
    fontWeight: '700',
    fontFamily: FontFamily.readexProBold,
    fontSize: FontSize.inlingP_size,
  },
  ssWrapper: {
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorBlack,
    borderWidth: 2,
    width: 288,
    height: 43,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_xs,
    paddingLeft: 5,
  },
  passwordWrapper: {
    position: 'absolute',
    top: -20,
    left: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  frame3: {
    width: 254,
    height: 24,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 5,
  },
  frame2: {
    position: 'absolute',
    top: 10,
    left: 2,
    width: 269,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  frameGroup: {
    position: 'relative',
    borderRadius: Border.br_3xs,
    borderStyle: 'solid',
    borderColor: Color.colorBlack,
    borderWidth: 2,
    width: 288,
    height: 43,
    marginTop: 20,
  },
  emailNPw: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 3,
  },
  frameParent: {
    width: 288,
    height: 124,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: Padding.p_10xs,
  },
  button: {
    position: 'relative',
    fontSize: FontSize.size_base,
    width :288,
    lineHeight: 16,
    fontWeight: '600',
    fontFamily: FontFamily.readexProSemiBold,
    textAlign: 'left',
    marginHorizontal:20,
  },
  frameChild: {
    position: 'relative',
    borderStyle: 'solid',
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 66,
    height: 1,
  },
  dontHaveAccount: {
    position: 'relative',
    fontSize: FontSize.captionHeavy_size,
    fontFamily: FontFamily.readexProRegular,
    color: Color.colorPaletteHitam,
    height:"100%",
    textAlign: 'center',
    marginLeft: 8,
  },
  frameItem: {
    position: 'relative',
    borderStyle: 'solid',
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 67,
    height: 1,
    marginLeft: 8,
  },
  frame6: {
    width: 289,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame5: {
    height: 160,
    paddingRight: Padding.p_12xs,
    marginTop: 20
    ,
  },
  frame4: {
    height: 171,
    paddingRight: Padding.p_12xs,
    marginTop: 34,
  },
  frame1: {
    width: 290,
    height: 329,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginTop: 13,
  },
  login: {
    position: 'relative',
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_32xl,
  },
});
