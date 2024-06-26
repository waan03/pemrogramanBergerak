import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { Input, Switch } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MainMenuAnorganik = ({route}) => {
  const [rectangleSwitchValue, setRectangleSwitchValue] = useState(true);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.mainMenuAnorganik}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      pagingEnabled={true}
      contentContainerStyle={styles.mainMenuAnorganikContent}
    >
      <View>
        <View style={styles.frame}>
          <View style={styles.header}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame7.png")}
            />
            <Pressable
              style={styles.materialSymbolscontactSuppo}
              onPress={() => navigation.navigate("MainMenuCustomerService")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/materialsymbolscontactsupportrounded2.png")}
              />
            </Pressable>
          </View>
        </View>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
      </View>
      <View style={styles.resultsParent}>
        <Text style={[styles.results, styles.resultsTypo]}>{`RESULTS `}</Text>
        <View style={styles.frameWrapper}>
          <View style={styles.frameContainer}>
            <View style={styles.groupParent}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-6174.png")}
              />
              <Text
                style={[
                  styles.bermacamMacamKerajinan,
                  styles.samaDenganProfileClr,
                ]}
              >
                Bermacam macam kerajinan Tangan
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.resultsParent}>
        <Text style={[styles.metodeSetor, styles.resultsTypo]}>
          Metode setor
        </Text>
        <View style={styles.frameWrapper}>
          <TouchableHighlight
            style={styles.wrapper}
            underlayColor="#fff"
            onPress={() => {}}
          >
            <>
              <Image
                style={styles.undrawOnTheWayReSwjtIcon}
                contentFit="cover"
                source={require("../assets/undraw-on-the-way-re-swjt.png")}
              />
              <Text style={[styles.jemput, styles.jemputTypo]}>Jemput</Text>
            </>
          </TouchableHighlight>
          <Pressable style={styles.framePressable} onPress={() => {}}>
            <View style={[styles.antarSendiriWrapper, styles.wrapperFlexBox]}>
              <Text style={styles.jemputTypo}>Antar sendiri</Text>
            </View>
            <Image
              style={styles.frameIcon1}
              contentFit="cover"
              source={require("../assets/frame6.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.frameParent1}>
          <View style={styles.frame1}>
            <Input
              placeholder="Alamat"
              minLength={10}
              inputStyle={{ color: "rgba(0, 0, 0, 0.5)" }}
              containerStyle={styles.alamatTextInputInput}
            />
            <View style={styles.frameItem} />
          </View>
          <View style={styles.frame2}>
            <Switch
              style={styles.frameInner}
              checked={true}
              value={rectangleSwitchValue}
              onValueChange={setRectangleSwitchValue}
            />
            <Text
              style={[styles.samaDenganProfile, styles.samaDenganProfileClr]}
            >
              Sama dengan profile
            </Text>
          </View>
        </View>
        <Pressable style={[styles.confirmWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
        </Pressable>
      </View>
      <View style={[styles.mainMenuAnorganikInner, styles.frameParent2Layout]}>
        <View style={[styles.frameParent2, styles.frameParent2Layout]}>
          <TouchableHighlight
            style={styles.container}
            underlayColor="#fff"
            onPress={() => navigation.navigate("MainMenu")}
          >
            <>
              <Image
                style={styles.frameChild1}
                contentFit="cover"
                source={require("../assets/frame-30.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>HOME</Text>
            </>
          </TouchableHighlight>
          <Pressable style={[styles.frameParent3, styles.frameParentLayout]}>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/frame-31.png")}
            />
            <Text style={[styles.wallet, styles.homeTypo]}>WALLET</Text>
          </Pressable>
          <Pressable style={[styles.frameParent4, styles.frameParentLayout]}>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/frame-32.png")}
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
    position: "relative",
  },
  mainMenuAnorganikContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  resultsTypo: {
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    fontSize: FontSize.inlingH1_size,
    lineHeight: 20,
  },
  samaDenganProfileClr: {
    color: Color.colorBlack,
    lineHeight: 20,
  },
  jemputTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.inlingH1_size,
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_5xs,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  confirmTypo: {
    fontFamily: FontFamily.readexProRegular,
    fontSize: FontSize.size_sm,
  },
  frameParent2Layout: {
    height: 71,
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
  frameIcon: {
    width: 189,
    height: 43,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  materialSymbolscontactSuppo: {
    width: 34,
    height: 34,
    marginLeft: 114,
  },
  header: {
    shadowRadius: 4,
    elevation: 4,
    height: 105,
    paddingHorizontal: 22,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    flexDirection: "row",
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  frame: {
    height: 115,
    alignItems: "center",
    width: 390,
    overflow: "hidden",
  },
  maskGroupIcon: {
    height: 227,
    marginTop: -10,
    width: 390,
  },
  results: {
    textAlign: "left",
  },
  frameChild: {
    width: 60,
    height: 60,
  },
  bermacamMacamKerajinan: {
    marginTop: 1,
    textAlign: "center",
    fontFamily: FontFamily.readexProRegular,
    fontSize: FontSize.size_sm,
  },
  groupParent: {
    top: 0,
    left: -81,
    width: 240,
    paddingLeft: Padding.p_12xs_5,
    position: "absolute",
    height: 81,
    alignItems: "center",
  },
  frameContainer: {
    width: 83,
    height: 81,
  },
  frameWrapper: {
    marginTop: 10,
    flexDirection: "row",
  },
  resultsParent: {
    marginTop: 16,
    alignItems: "center",
  },
  metodeSetor: {
    textAlign: "center",
  },
  undrawOnTheWayReSwjtIcon: {
    width: 122,
    height: 59,
    overflow: "hidden",
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
    justifyContent: "flex-end",
    height: 150,
    width: 150,
    borderStyle: "solid",
    backgroundColor: Color.colorOlivedrab,
    borderRadius: Border.br_3xs,
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  antarSendiriWrapper: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    paddingHorizontal: Padding.p_2xs,
    backgroundColor: Color.colorOlivedrab,
    borderRadius: Border.br_3xs,
    elevation: 10,
    shadowRadius: 10,
    paddingVertical: Padding.p_5xs,
    position: "absolute",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "100%",
  },
  frameIcon1: {
    top: 37,
    left: 12,
    width: 123,
    height: 68,
    position: "absolute",
    overflow: "hidden",
  },
  framePressable: {
    marginLeft: 35,
    height: 150,
    width: 150,
  },
  frameItem: {
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 335,
    height: 1,
    marginTop: 5,
    borderStyle: "solid",
  },
  frame1: {
    height: 25,
    paddingLeft: Padding.p_10xs,
    width: 334,
    overflow: "hidden",
  },
  frameInner: {
    borderRadius: Border.br_11xs,
    width: 13,
    height: 13,
  },
  samaDenganProfile: {
    fontSize: FontSize.inlingP_size,
    fontWeight: "300",
    fontFamily: FontFamily.inlingP,
    marginLeft: 2,
    textAlign: "left",
  },
  frame2: {
    width: 112,
    height: 20,
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameParent1: {
    height: 47,
    width: 334,
  },
  confirm: {
    color: Color.colorPalegoldenrod,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  confirmWrapper: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkolivegreen,
    width: 115,
    height: 37,
    paddingHorizontal: 0,
    marginTop: 2,
  },
  frameView: {
    marginTop: 16,
    alignItems: "flex-end",
  },
  frameChild1: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  home: {
    textAlign: "left",
  },
  container: {
    borderColor: Color.colorOlivedrab,
    borderWidth: 1,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_smi,
    width: 65,
    backgroundColor: Color.colorPalegoldenrod,
    borderTopRightRadius: Border.br_17xl_5,
    borderTopLeftRadius: Border.br_17xl_5,
    height: 71,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
  wallet: {
    marginTop: -1,
    textAlign: "center",
  },
  frameParent3: {
    paddingLeft: Padding.p_2xs,
    paddingRight: Padding.p_xs,
  },
  frameParent4: {
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_4xs,
  },
  frameParent2: {
    width: 304,
    flexDirection: "row",
  },
  mainMenuAnorganikInner: {
    marginTop: 16,
    overflow: "hidden",
  },
  mainMenuAnorganik: {
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default MainMenuAnorganik;
