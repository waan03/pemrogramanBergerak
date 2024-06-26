import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ route }) => {
  const navigation = useNavigation();
  // const { email } = route.params;
  const [email, setEmail] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('email').then((item) => {
      setEmail(item);
    });
  }, []);

  return (
    <View style={styles.profile}>
      <Text style={[styles.profile1, styles.alamatClr]}>PROFILE</Text>
      <View style={[styles.frame, styles.barPosition]}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={[styles.frame2, styles.bgLayout]}>
          <Image
            style={styles.imgIcon}
            contentFit="cover"
            source={require('../assets/img.png')}
          />
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <Text style={[styles.user2021071034, styles.userClr]}>
            User2021071034
          </Text>
        </View>
        <View style={[styles.frame4, styles.frameFlexBox]}>
          <Text style={[styles.user, styles.userClr]}>User</Text>
        </View>
        <View style={[styles.frame5, styles.frameFlexBox]}>
          <Pressable
            style={[styles.icroundLogoutParent, styles.parentFlexBox]}
            onPress={() => navigation.navigate('Login')}
            >
            <Image
              style={styles.icroundLogoutIcon}
              contentFit="cover"
              source={require('../assets/icroundlogout.png')}
            />
            <Text style={styles.logOut}>Log out</Text>
          </Pressable>
        </View>
        <View style={[styles.frame6, styles.frameFlexBox]}>
          <View>
            <View style={styles.alamatParent}>
              <Text style={[styles.alamat, styles.alamatTypo]}>Alamat</Text>
              <Text
                style={[
                  styles.jlCoresariNo,
                  styles.jlCoresariNoTypo,
                ]}>{`Jl. Coresari No 14 RT 001 / RW 006, 
Cipayung, Ciputat, Tangerang 
Selatan, Banten 10341`}</Text>
            </View>
            <View style={[styles.emailParent, styles.parentSpaceBlock]}>
              <Text style={[styles.alamat, styles.alamatTypo]}>Username</Text>
              <Text style={styles.jlCoresariNoTypo}>
                <Text style={styles.user2021071034gmailcom1}>{email}</Text>
              </Text>
            </View>
            <View style={[styles.usernameParent, styles.parentSpaceBlock]}>
              <Text style={[styles.alamat, styles.alamatTypo]}>Username</Text>
              <Text style={[styles.jlCoresariNo, styles.jlCoresariNoTypo]}>
                adi2021071034
              </Text>
            </View>
          </View>
        </View>
        <Pressable style={[styles.frame7, styles.frameFlexBox]}>
          <View style={[styles.editProfileParent, styles.parentFlexBox]}>
            <Text style={styles.editProfile}>{`Edit profile `}</Text>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require('../assets/group.png')}
            />
          </View>
        </Pressable>
        <View style={[styles.bar, styles.barPosition]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupChild, styles.bgShadowBox]} />
            <View style={[styles.home, styles.homePosition]}>
              <View style={[styles.homeChild, styles.childPosition]} />
              <Pressable onPress={() => navigation.navigate('MainMenu')}>
                <Image
                  style={[styles.homeIcon, styles.homeIconLayout]}
                  contentFit="cover"
                  source={require('../assets/home.png')}
                />
                <Text style={[styles.home1, styles.home1Typo]}>HOME</Text>
              </Pressable>
            </View>
            <View style={[styles.wallet, styles.homePosition]}>
              <View style={[styles.walletChild, styles.childPosition]} />
              <Image
                style={[styles.homeIcon, styles.homeIconLayout]}
                contentFit="cover"
                source={require('../assets/frame-311.png')}
              />
              <Text style={[styles.wallet1, styles.home1Typo]}>WALLET</Text>
            </View>
            <View style={[styles.profiel, styles.homePosition]}>
              <View style={[styles.walletChild, styles.childPosition]} />
              <Image
                style={[styles.profielItem, styles.homeIconLayout]}
                contentFit="cover"
                source={require('../assets/frame-321.png')}
              />
              <Text style={[styles.profile2, styles.home1Typo]}>PROFILE</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alamatClr: {
    color: Color.colorDarkolivegreen,
    lineHeight: 20,
  },
  barPosition: {
    width: 390,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  frameFlexBox: {
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bgLayout: {
    width: 334,
    position: 'absolute',
  },
  userClr: {
    color: Color.colorOlivedrab,
    lineHeight: 20,
  },
  parentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alamatTypo: {
    fontFamily: FontFamily.inlingH1,
    fontWeight: '500',
    fontSize: FontSize.size_xl,
  },
  jlCoresariNoTypo: {
    marginTop: 10,
    textAlign: 'left',
    fontSize: FontSize.size_base,
    color: Color.colorOlivedrab,
  },
  parentSpaceBlock: {
    marginTop: 37,
    height: 52,
  },
  bgShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  homePosition: {
    bottom: '0%',
    top: '5.5%',
    width: '16.67%',
    height: '94.5%',
    position: 'absolute',
  },
  childPosition: {
    borderTopRightRadius: Border.br_17xl_5,
    borderTopLeftRadius: Border.br_17xl_5,
    top: '0%',
    height: '100%',
    bottom: '0%',
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  home1Typo: {
    fontFamily: FontFamily.koulenRegular,
    top: '49.51%',
    fontSize: FontSize.size_base,
    color: Color.colorOlivedrab,
    lineHeight: 20,
    position: 'absolute',
  },
  homeIconLayout: {
    height: 40,
    width: 40,
    top: 12,
    position: 'absolute',
    overflow: 'hidden',
  },
  profile1: {
    top: 46,
    left: 122,
    fontSize: FontSize.size_13xl,
    fontWeight: '700',
    fontFamily: FontFamily.readexProBold,
    textAlign: 'center',
    position: 'absolute',
  },
  frameChild: {
    backgroundColor: Color.colorDarkolivegreen,
    width: 89,
    height: 25,
    borderRadius: Border.br_9xs,
  },
  frame1: {
    top: 53,
    left: 30,
    width: 330,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
  },
  bg: {
    height: '85.06%',
    marginLeft: -167,
    top: '10.75%',
    bottom: '4.19%',
    left: '50%',
    shadowColor: 'rgba(136, 152, 170, 0.15)',
    shadowRadius: 32,
    elevation: 32,
    backgroundColor: Color.colorPalegoldenrod,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: Border.br_9xs,
  },
  imgIcon: {
    borderRadius: Border.br_60xl,
    width: 116,
    height: 116,
  },
  frame2: {
    top: 7,
    left: 28,
    height: 150,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  user2021071034: {
    fontFamily: FontFamily.inlingH1,
    fontWeight: '500',
    fontSize: FontSize.size_xl,
    textAlign: 'center',
  },
  frame3: {
    top: 97,
    left: 35,
    width: 320,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
  },
  user: {
    fontSize: 15,
    fontWeight: '300',
    fontFamily: FontFamily.inlingP,
    textAlign: 'right',
  },
  frame4: {
    top: 117,
    left: 38,
    width: 314,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
  },
  icroundLogoutIcon: {
    width: 31,
    height: 31,
    overflow: 'hidden',
  },
  logOut: {
    color: '#ee2c10',
    width: 61,
    marginLeft: 7,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  icroundLogoutParent: {
    alignItems: 'center',
  },
  frame5: {
    top: 573,
    left: 66,
    width: 258,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
  },
  alamat: {
    textAlign: 'left',
    color: Color.colorDarkolivegreen,
    lineHeight: 20,
  },
  jlCoresariNo: {
    fontFamily: FontFamily.poppinsRegular,
  },
  alamatParent: {
    width: 269,
    height: 102,
  },
  user2021071034gmailcom1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  emailParent: {
    width: 225,
  },
  usernameParent: {
    width: 113,
  },
  frame6: {
    top: 193,
    left: 60,
    width: 270,
    alignItems: 'center',
    position: 'absolute',
  },
  editProfile: {
    fontSize: FontSize.inlingP_size,
    fontFamily: FontFamily.readexProRegular,
    color: Color.colorPalegoldenrod,
    textAlign: 'left',
    lineHeight: 20,
  },
  groupIcon: {
    width: 16,
    height: 14,
    marginLeft: 6,
  },
  editProfileParent: {
    width: 76,
    height: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  frame7: {
    top: 55,
    left: 271,
    width: 82,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
  },
  groupChild: {
    height: '70.64%',
    top: '70.64%',
    right: '-100%',
    bottom: '-41.28%',
    left: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 4,
    elevation: 4,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorOlivedrab,
    transform: [
      {
        rotate: '-180deg',
      },
    ],
    position: 'absolute',
    width: '100%',
  },
  homeChild: {
    backgroundColor: Color.colorPalegoldenrod,
  },
  home1: {
    left: '27.69%',
    textAlign: 'left',
  },
  homeIcon: {
    left: 12,
  },
  home: {
    right: '72.56%',
    left: '10.77%',
  },
  walletChild: {
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  wallet1: {
    left: '16.92%',
    textAlign: 'center',
  },
  wallet: {
    right: '41.79%',
    left: '41.54%',
  },
  profielItem: {
    left: 13,
  },
  profile2: {
    left: '15.38%',
    textAlign: 'center',
  },
  profiel: {
    right: '11.28%',
    left: '72.05%',
  },
  rectangleParent: {
    height: '131.33%',
    top: '7.23%',
    bottom: '-38.55%',
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  bar: {
    top: 648,
    height: 83,
  },
  frame: {
    top: 113,
    height: 763,
  },
  profile: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Profile;
