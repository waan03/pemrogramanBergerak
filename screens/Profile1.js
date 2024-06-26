import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Profile1 = () => {
  const { email } = route.params;
  return (
    <View style={styles.profile}>
      <View style={styles.bg} />
      <Image
        style={[styles.imgIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/img.png")}
      />
      <Text style={styles.editProfile}>EDIT PROFILE</Text>
      <Text style={[styles.user2021071034, styles.emailTypo]}>
        User2021071034
      </Text>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.barPosition]} />
          <Text
            style={[styles.jlCoresariNo, styles.jlCoresariNoTypo]}
          >{`Jl. Coresari No 14 RT 001 / RW 006, 
Cipayung, Ciputat, Tangerang 
Selatan, Banten 10341`}</Text>
          <Text style={[styles.alamat, styles.text1Position]}>Alamat</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
          <View style={[styles.groupItem, styles.groupChildLayout]} />
          <View style={[styles.parent, styles.parentLayout]}>
            <Text style={[styles.text, styles.textPosition]}>
              821 - 4533 - 6738
            </Text>
            <View
              style={[styles.rectangleContainer, styles.groupInnerPosition]}
            >
              <View style={[styles.groupInner, styles.groupInnerPosition]} />
              <View style={styles.groupView}>
                <View
                  style={[styles.rectangleView, styles.groupChild1Layout]}
                />
                <View
                  style={[styles.groupChild1, styles.groupChild1Position]}
                />
              </View>
              <Text style={[styles.text1, styles.text1Position]}>+62</Text>
            </View>
          </View>
          <Text style={[styles.nomorHp, styles.text1Position]}>Nomor HP</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
          <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
            <View style={[styles.groupChild2, styles.groupChildLayout]} />
            <Text
              style={[
                styles.user2021071034gmailcom,
                styles.groupChild1Position,
              ]}
            >
              <Text style={styles.user2021071034gmailcom1}>
                User2021071034@gmail.com
              </Text>
            </Text>
          </View>
          <Text style={[styles.email, styles.text1Position]}>Email</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleSpaceBlock]}>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.adi2021071034, styles.jlCoresariNoTypo]}>
            adi2021071034
          </Text>
          <Text style={[styles.username, styles.text1Position]}>Username</Text>
        </View>
      </View>
      <View style={[styles.buttonStyle2Shadow, styles.buttonShadowBox]}>
        <Text style={styles.buttonTypo}>Accept</Text>
      </View>
      <View style={[styles.buttonStyle2Shadow1, styles.buttonShadowBox]}>
        <Text style={[styles.button1, styles.buttonTypo]}>Discard</Text>
      </View>
      <View style={[styles.bar, styles.barPosition]}>
        <View style={styles.rectangleParent3}>
          <View style={styles.groupChild4} />
          <View style={[styles.home, styles.homePosition]}>
            <View style={[styles.homeChild, styles.childPosition]} />
            <Text style={[styles.home1, styles.home1Typo]}>HOME</Text>
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
          </View>
          <View style={[styles.wallet, styles.homePosition]}>
            <View style={[styles.walletChild, styles.childPosition]} />
            <Image
              style={[styles.homeIcon, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/frame-311.png")}
            />
            <Text style={[styles.wallet1, styles.home1Typo]}>WALLET</Text>
          </View>
          <View style={[styles.profiel, styles.homePosition]}>
            <View style={[styles.walletChild, styles.childPosition]} />
            <Image
              style={[styles.profielItem, styles.homeIconLayout]}
              contentFit="cover"
              source={require("../assets/frame-321.png")}
            />
            <Text style={[styles.profile1, styles.home1Typo]}>PROFILE</Text>
          </View>
        </View>
      </View>
      <View style={[styles.profileChild, styles.profileLayout]} />
      <View style={[styles.profileItem, styles.profileLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    lineHeight: 20,
  },
  barPosition: {
    left: 0,
    position: "absolute",
  },
  jlCoresariNoTypo: {
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    color: Color.colorOlivedrab,
  },
  text1Position: {
    color: Color.colorPalegoldenrod,
    top: 0,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  rectangleSpaceBlock: {
    marginTop: 25,
    width: 284,
  },
  groupChildLayout: {
    height: 42,
    left: 0,
    width: 284,
    position: "absolute",
  },
  parentLayout: {
    height: 24,
    marginLeft: -107,
  },
  groupInnerPosition: {
    width: 68,
    left: "50%",
    position: "absolute",
  },
  groupChild1Layout: {
    height: 9,
    marginLeft: -13,
    width: 26,
  },
  groupChild1Position: {
    top: 9,
    left: "50%",
    position: "absolute",
  },
  buttonShadowBox: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_43xl,
    flexDirection: "row",
    height: 30,
    width: 120,
    shadowColor: "rgba(40, 41, 61, 0.04)",
    top: 712,
    elevation: 4,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "50%",
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  homePosition: {
    bottom: "0%",
    top: "5.5%",
    width: "16.67%",
    height: "94.5%",
    position: "absolute",
  },
  childPosition: {
    borderTopRightRadius: Border.br_17xl_5,
    borderTopLeftRadius: Border.br_17xl_5,
    top: "0%",
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  home1Typo: {
    fontFamily: FontFamily.koulenRegular,
    top: "49.51%",
    fontSize: FontSize.size_base,
    color: Color.colorOlivedrab,
    lineHeight: 20,
    position: "absolute",
  },
  homeIconLayout: {
    height: 40,
    width: 40,
    top: 12,
    position: "absolute",
    overflow: "hidden",
  },
  profileLayout: {
    height: 103,
    width: 65,
    backgroundColor: Color.colorGainsboro,
    top: 773,
    borderTopRightRadius: Border.br_17xl_5,
    borderTopLeftRadius: Border.br_17xl_5,
    position: "absolute",
  },
  bg: {
    height: "79.15%",
    marginLeft: -170,
    top: "32.7%",
    bottom: "-11.85%",
    shadowColor: "rgba(136, 152, 170, 0.15)",
    shadowRadius: 32,
    elevation: 32,
    backgroundColor: Color.colorDarkolivegreen,
    width: 334,
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "50%",
    position: "absolute",
  },
  imgIcon: {
    height: "13.74%",
    marginLeft: -58,
    top: "11.61%",
    bottom: "74.64%",
    borderRadius: Border.br_60xl,
    maxHeight: "100%",
    width: 116,
  },
  editProfile: {
    top: 46,
    left: 75,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.readexProBold,
    color: Color.colorDarkolivegreen,
    textAlign: "center",
    lineHeight: 20,
    position: "absolute",
  },
  user2021071034: {
    marginLeft: -79,
    top: "28.2%",
    color: Color.colorOlivedrab,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    top: 28,
    height: 76,
    backgroundColor: Color.colorWhite,
    width: 284,
    borderRadius: Border.br_9xs,
  },
  jlCoresariNo: {
    left: 7,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    top: 30,
    color: Color.colorOlivedrab,
  },
  alamat: {
    marginLeft: -34,
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    lineHeight: 20,
  },
  rectangleParent: {
    height: 104,
    width: 284,
  },
  groupItem: {
    backgroundColor: Color.colorDarkslategray,
    height: 42,
    borderRadius: Border.br_9xs,
    top: 30,
  },
  text: {
    marginLeft: -30,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    color: Color.colorOlivedrab,
  },
  groupInner: {
    top: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGold,
    height: 23,
    marginLeft: -34,
  },
  rectangleView: {
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: "#f33e3e",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupChild1: {
    borderBottomLeftRadius: Border.br_8xs,
    height: 9,
    marginLeft: -13,
    width: 26,
    backgroundColor: Color.colorWhite,
  },
  groupView: {
    marginLeft: -28,
    top: 3,
    height: 19,
    width: 26,
    left: "50%",
    position: "absolute",
  },
  text1: {
    marginLeft: 1,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  rectangleContainer: {
    height: 24,
    marginLeft: -107,
    top: 0,
  },
  parent: {
    top: 39,
    width: 214,
    left: "50%",
    position: "absolute",
  },
  nomorHp: {
    marginLeft: -51,
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    lineHeight: 20,
  },
  rectangleGroup: {
    height: 72,
  },
  groupChild2: {
    backgroundColor: Color.colorDarkslategray,
    height: 42,
    borderRadius: Border.br_9xs,
    top: 0,
  },
  user2021071034gmailcom1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  user2021071034gmailcom: {
    marginLeft: -112,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.colorOlivedrab,
  },
  rectangleParent1: {
    top: 30,
  },
  email: {
    marginLeft: -27,
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    lineHeight: 20,
  },
  groupChild3: {
    top: 31,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
  },
  adi2021071034: {
    top: 40,
    left: 83,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    color: Color.colorOlivedrab,
  },
  username: {
    marginLeft: -49,
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    lineHeight: 20,
  },
  rectangleParent2: {
    height: 73,
  },
  groupParent: {
    top: 290,
    left: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buttonStyle2Shadow: {
    marginLeft: 19,
    backgroundColor: Color.colorOlivedrab,
  },
  button1: {
    color: Color.colorOrangered_100,
  },
  buttonStyle2Shadow1: {
    marginLeft: -145,
    borderStyle: "solid",
    borderColor: Color.colorOrangered_100,
    borderWidth: 3,
  },
  groupChild4: {
    height: "70.64%",
    top: "70.64%",
    right: "-100%",
    bottom: "-41.28%",
    left: "100%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    backgroundColor: Color.colorOlivedrab,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    width: "100%",
  },
  homeChild: {
    backgroundColor: Color.colorPalegoldenrod,
  },
  home1: {
    left: "27.69%",
    textAlign: "left",
  },
  homeIcon: {
    left: 12,
  },
  home: {
    right: "72.56%",
    left: "10.77%",
  },
  walletChild: {
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  wallet1: {
    left: "16.92%",
    textAlign: "center",
  },
  wallet: {
    right: "41.79%",
    left: "41.54%",
  },
  profielItem: {
    left: 13,
  },
  profile1: {
    left: "15.38%",
    textAlign: "center",
  },
  profiel: {
    right: "11.28%",
    left: "72.05%",
  },
  rectangleParent3: {
    height: "131.33%",
    top: "7.23%",
    bottom: "-38.55%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  bar: {
    top: 761,
    width: 390,
    height: 83,
    overflow: "hidden",
  },
  profileChild: {
    left: 34,
  },
  profileItem: {
    left: 171,
  },
  profile: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile1;
