import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  Alert,
} from 'react-native';
import { Image } from 'expo-image';
import { Input, Switch } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Padding, Border } from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainMenuOrganik = ({ navigation }) => {
  const [rectangleSwitchValue, setRectangleSwitchValue] = useState(true);
  const [alamat, setAlamat] = useState('');

  const handleAlamat = async () => {
    if (alamat.length === 0) {
      Alert.alert('Error', 'Masukan alamat yang benar');
      return;
    }

    try {
      const response = await fetch(
        'https://688c-158-140-180-62.ngrok-free.app/alamat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ alamat }),
        }
      );

      if (response.ok) {
        Alert.alert('Success', 'Alamat tersimpan');
        navigation.navigate('MainMenu');
      } else {
        Alert.alert('Error', 'Alamat gagal tersimpan');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Alamat gagal tersimpan');
    }
  };

  // useEffect(() => {
  //   AsyncStorage.getItem('alamat').then((item) => {
  //     setAlamat(item);
  //   });
  // }, []);

  return (
    <ScrollView
      style={styles.mainMenuOrganik}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      pagingEnabled={true}
      contentContainerStyle={styles.mainMenuOrganikContent}>
      <View style={styles.frameWrapper}>
        <View style={styles.frame}>
          <View style={styles.header}>
            <Pressable
              style={styles.materialSymbolscontactSuppo}
              onPress={() => navigation.navigate('MainMenuCustomerService')}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../assets/materialsymbolscontactsupportrounded1.png')}
              />
            </Pressable>
            <Image
              style={[styles.frameIcon, styles.iconLayout]}
              contentFit="cover"
              source={require('../assets/frame2.png')}
            />
            <Image
              style={[
                styles.materialSymbolscontactSuppoIcon,
                styles.iconLayout,
              ]}
              contentFit="cover"
              source={require('../assets/materialsymbolscontactsupportrounded1.png')}
            />
          </View>
          <View style={styles.maskGroupWrapper}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require('../assets/mask-group2.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.resultsParent}>
        <Text style={[styles.results, styles.resultsTypo]}>{`RESULTS `}</Text>
        <View style={styles.frameParent}>
          <View style={[styles.frameContainer, styles.frameSpaceBlock1]}>
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameIcon1}
                contentFit="cover"
                source={require('../assets/frame3.png')}
              />
              <Text style={[styles.biofuel, styles.biofuelClr]}>Biofuel</Text>
            </View>
          </View>
          <View style={[styles.frameView, styles.frameSpaceBlock]}>
            <View style={styles.frameGroup}>
              <Image
                style={styles.frameIcon1}
                contentFit="cover"
                source={require('../assets/frame4.png')}
              />
              <Text style={[styles.biofuel, styles.biofuelClr]}>Maggot</Text>
            </View>
          </View>
          <View style={[styles.frameParent2, styles.frameSpaceBlock]}>
            <Image
              style={styles.frameIcon1}
              contentFit="cover"
              source={require('../assets/frame5.png')}
            />
            <Text style={[styles.biofuel, styles.biofuelClr]}>Bio-Kompos</Text>
          </View>
        </View>
      </View>
      <View style={styles.resultsParent}>
        <Text style={[styles.metodeSetor, styles.resultsTypo]}>
          Metode setor
        </Text>
        <View style={styles.frameParent}>
          <TouchableHighlight
            style={styles.wrapper}
            underlayColor="#fff"
            onPress={() => {}}>
            <>
              <Image
                style={styles.undrawOnTheWayReSwjtIcon}
                contentFit="cover"
                source={require('../assets/undraw-on-the-way-re-swjt.png')}
              />
              <Text style={[styles.jemput, styles.jemputTypo]}>Jemput</Text>
            </>
          </TouchableHighlight>
          <Pressable style={styles.framePressable} onPress={() => {}}>
            <View
              style={[styles.antarSendiriWrapper, styles.wrapperSpaceBlock]}>
              <Text style={styles.jemputTypo}>Antar sendiri</Text>
            </View>
            <Image
              style={styles.frameIcon4}
              contentFit="cover"
              source={require('../assets/frame6.png')}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.frameParent4}>
        <View style={styles.frameParent5}>
          <View style={styles.frame1}>
            <TextInput
              placeholder="Alamat"
              value={alamat}
              onChangeText={setAlamat}
              minLength={5}
              inputStyle={{ color: 'rgba(0, 0, 0, 0.5)' }}
              containerStyle={styles.alamatTextInputInput}
            />
            <View style={styles.frameChild} />
          </View>
          <View style={[styles.frame2, styles.frame2SpaceBlock]}>
            <Switch
              style={styles.frameItem}
              checked={true}
              value={rectangleSwitchValue}
              onValueChange={setRectangleSwitchValue}
            />
            <Text style={[styles.samaDenganProfile, styles.biofuelClr]}>
              Sama dengan profile
            </Text>
          </View>
        </View>
        <Button
          title="Confirm"
          style={[styles.confirmWrapper, styles.frame2SpaceBlock]}
          onPress={handleAlamat}/>
      </View>
      <View style={[styles.mainMenuOrganikInner, styles.frameParent6Layout]}>
        <View style={[styles.frameParent6, styles.frameParent6Layout]}>
          <Pressable
            style={styles.frameParent7}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require('../assets/frame-30.png')}
            />
            <Text style={[styles.home, styles.homeTypo]}>HOME</Text>
          </Pressable>
          <Pressable style={[styles.frameParent8, styles.frameParentLayout]}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require('../assets/frame-31.png')}
            />
            <Text style={[styles.wallet, styles.homeTypo]}>WALLET</Text>
          </Pressable>
          <Pressable style={[styles.frameParent9, styles.frameParentLayout]}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require('../assets/frame-32.png')}
            />
            <Text style={[styles.wallet, styles.homeTypo]}>PROFILE</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  alamatTextInputInput: {
    position: 'relative',
  },
  mainMenuOrganikContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconLayout: {
    maxHeight: '100%',
    position: 'absolute',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  resultsTypo: {
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.inlingH1,
    fontWeight: '500',
    fontSize: FontSize.inlingH1_size,
    lineHeight: 20,
  },
  frameSpaceBlock1: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_2xs,
    justifyContent: 'center',
  },
  biofuelClr: {
    color: Color.colorBlack,
    textAlign: 'left',
    lineHeight: 20,
  },
  frameSpaceBlock: {
    marginLeft: 32,
    width: 83,
    alignItems: 'center',
  },
  jemputTypo: {
    color: Color.colorWhite,
    textAlign: 'center',
    fontFamily: FontFamily.inlingH1,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: FontSize.inlingH1_size,
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    justifyContent: 'flex-end',
  },
  frame2SpaceBlock: {
    marginTop: 2,
    alignItems: 'center',
  },
  frameParent6Layout: {
    height: 71,
    alignItems: 'center',
  },
  homeTypo: {
    color: Color.colorOlivedrab,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_base,
    lineHeight: 20,
  },
  frameParentLayout: {
    marginLeft: 54,
    width: 65,
    backgroundColor: Color.colorPalegoldenrod,
    borderTopRightRadius: Border.br_17xl_5,
    borderTopLeftRadius: Border.br_17xl_5,
    height: 71,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  materialSymbolscontactSuppo: {
    left: 326,
    top: 59,
    width: 34,
    height: 34,
    position: 'absolute',
  },
  frameIcon: {
    height: '40.95%',
    width: '48.54%',
    top: '44.76%',
    right: '45.87%',
    bottom: '14.29%',
    left: '5.59%',
  },
  materialSymbolscontactSuppoIcon: {
    height: '32.38%',
    width: '8.72%',
    top: '56.19%',
    right: '7.69%',
    bottom: '11.43%',
    left: '83.59%',
  },
  header: {
    shadowRadius: 4,
    elevation: 4,
    height: 105,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  maskGroupIcon: {
    height: 222,
    width: 390,
  },
  maskGroupWrapper: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  frame: {
    width: 390,
    alignItems: 'center',
    overflow: 'hidden',
  },
  frameWrapper: {
    alignItems: 'center',
  },
  results: {
    textAlign: 'left',
  },
  frameIcon1: {
    height: 60,
    width: 60,
    overflow: 'hidden',
  },
  biofuel: {
    marginTop: 1,
    fontFamily: FontFamily.readexProRegular,
    fontSize: FontSize.size_sm,
  },
  frameGroup: {
    height: 81,
    width: 60,
    alignItems: 'center',
  },
  frameContainer: {
    width: 83,
    paddingHorizontal: Padding.p_2xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameView: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_2xs,
    justifyContent: 'center',
  },
  frameParent2: {
    paddingLeft: Padding.p_12xs_5,
    height: 81,
  },
  frameParent: {
    marginTop: 10,
    flexDirection: 'row',
  },
  resultsParent: {
    marginTop: 17,
    alignItems: 'center',
  },
  metodeSetor: {
    textAlign: 'center',
  },
  undrawOnTheWayReSwjtIcon: {
    width: 122,
    height: 59,
    overflow: 'hidden',
  },
  jemput: {
    marginTop: 18,
  },
  wrapper: {
    borderColor: Color.colorGold,
    borderWidth: 4,
    paddingLeft: Padding.p_mini_5,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_sm_5,
    paddingBottom: Padding.p_5xs,
    justifyContent: 'flex-end',
    height: 150,
    width: 150,
    borderStyle: 'solid',
    backgroundColor: Color.colorOlivedrab,
    borderRadius: Border.br_3xs,
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
  },
  antarSendiriWrapper: {
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    backgroundColor: Color.colorOlivedrab,
    borderRadius: Border.br_3xs,
    elevation: 10,
    shadowRadius: 10,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_2xs,
    height: '100%',
    position: 'absolute',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    width: '100%',
  },
  frameIcon4: {
    top: 37,
    left: 12,
    width: 123,
    height: 68,
    position: 'absolute',
    overflow: 'hidden',
  },
  framePressable: {
    marginLeft: 35,
    height: 150,
    width: 150,
  },
  frameChild: {
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 335,
    height: 1,
    marginTop: 5,
    borderStyle: 'solid',
  },
  frame1: {
    width: 334,
    height: 25,
    paddingLeft: Padding.p_10xs,
    overflow: 'hidden',
  },
  frameItem: {
    borderRadius: Border.br_11xs,
    width: 13,
    height: 13,
  },
  samaDenganProfile: {
    fontSize: FontSize.inlingP_size,
    fontWeight: '300',
    fontFamily: FontFamily.inlingP,
    marginLeft: 2,
  },
  frame2: {
    width: 112,
    height: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  frameParent5: {
    height: 47,
  },
  confirmWrapper: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkolivegreen,
    width: 115,
    height: 37,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: 'flex-end',
  },
  frameParent4: {
    alignItems: 'flex-end',
    marginTop: 17,
  },
  frameInner: {
    width: 40,
    height: 40,
    overflow: 'hidden',
  },
  home: {
    textAlign: 'left',
  },
  frameParent7: {
    borderColor: Color.colorOlivedrab,
    borderWidth: 1,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_smi,
    width: 65,
    backgroundColor: Color.colorPalegoldenrod,
    borderTopRightRadius: Border.br_17xl_5,
    borderTopLeftRadius: Border.br_17xl_5,
    height: 71,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallet: {
    marginTop: -1,
    textAlign: 'center',
  },
  frameParent8: {
    paddingLeft: Padding.p_2xs,
    paddingRight: Padding.p_xs,
  },
  frameParent9: {
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_4xs,
  },
  frameParent6: {
    width: 304,
    flexDirection: 'row',
  },
  mainMenuOrganikInner: {
    marginTop: 17,
    overflow: 'hidden',
  },
  mainMenuOrganik: {
    flex: 1,
    maxWidth: '100%',
    width: '100%',
    backgroundColor: Color.colorWhitesmoke,
    overflow: 'hidden',
  },
});

export default MainMenuOrganik;
