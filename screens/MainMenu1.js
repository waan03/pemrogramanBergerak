import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const MainMenu1 = () => {
  return (
    <View style={styles.mainMenu}>
      <View style={styles.frame}>
        <View style={styles.header}>
          <View style={styles.headerChild} />
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
          <Image
            style={styles.materialSymbolscontactSuppoIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolscontactsupportrounded1.png")}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <LinearGradient
          style={styles.cardwelcome}
          locations={[0, 1]}
          colors={["rgba(243, 255, 182, 0)", "rgba(243, 255, 182, 0.5)"]}
        >
          <Text
            style={styles.welcometext}
          >{`This is the welcoming page, go collect some trash and trade it here ! 
Earn more points to trade it into ur wallet.   `}</Text>
          <Image
            style={styles.undrawThrowAwayReX60k1Icon}
            contentFit="cover"
            source={require("../assets/undraw-throw-away-re-x60k-1.png")}
          />
        </LinearGradient>
      </View>
      <View style={styles.frame3}>
        <View style={styles.frame2}>
          <Text style={styles.welcome}>News</Text>
        </View>
        <View style={styles.frame5}>
          <View style={styles.frame6}>
            <View style={styles.news1}>
              <Image
                style={styles.unsplash5wfttm2cjeiIcon}
                contentFit="cover"
                source={require("../assets/unsplash5wfttm2cjei.png")}
              />
              <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
              <Text style={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </View>
            <View style={styles.frame7}>
              <View style={styles.frameChild} />
              <View style={styles.frameItem} />
              <View style={styles.frameInner} />
            </View>
            <Image
              style={styles.frameIcon1}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frame8}>
        <Text style={styles.depotrash}>
          <Text style={styles.depo}>Depo</Text>
          <Text style={styles.trash}>trash</Text>
        </Text>
        <View style={styles.frame9}>
          <Pressable style={styles.cardorganik}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
            <Text style={styles.organik}>Organik</Text>
          </Pressable>
          <Pressable style={styles.cardanorganik}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group1.png")}
            />
            <Text style={styles.organik}>Anorganik</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.mainMenuInner}>
        <View style={styles.groupParent}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <Text style={styles.home}>HOME</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/frame-301.png")}
            />
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupInner} />
            <Text style={styles.wallet}>WALLET</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/frame-31.png")}
            />
          </View>
          <View style={styles.rectangleContainer}>
            <View style={styles.groupInner} />
            <Text style={styles.profile}>PROFILE</Text>
            <Image
              style={styles.groupChild2}
              contentFit="cover"
              source={require("../assets/frame-32.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerChild: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhitesmoke,
  },
  frameIcon: {
    position: "absolute",
    height: "40.95%",
    width: "48.54%",
    top: "44.76%",
    right: "45.87%",
    bottom: "14.29%",
    left: "5.59%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  materialSymbolscontactSuppoIcon: {
    position: "absolute",
    height: "32.38%",
    width: "8.72%",
    top: "56.19%",
    right: "7.69%",
    bottom: "11.43%",
    left: "83.59%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  header: {
    position: "relative",
    width: 390,
    height: 105,
  },
  frame: {
    width: 390,
    height: 115,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  welcome: {
    position: "relative",
    fontSize: FontSize.inlingH1_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.inlingH1,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame2: {
    width: 332,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  welcometext: {
    position: "relative",
    fontSize: FontSize.inlingP_size,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.inlingP,
    color: Color.colorBlack,
    textAlign: "left",
    width: 156,
  },
  undrawThrowAwayReX60k1Icon: {
    position: "relative",
    width: 186,
    height: 104,
    overflow: "hidden",
    marginLeft: -37,
  },
  cardwelcome: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkolivegreen,
    borderWidth: 1,
    width: 335,
    height: 120,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_12xs,
    backgroundColor: "transparent",
    marginLeft: 2,
    marginTop: 10,
  },
  frame1: {
    width: 338,
    height: 150,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 14,
  },
  unsplash5wfttm2cjeiIcon: {
    position: "relative",
    borderRadius: Border.br_8xs,
    width: 231,
    height: 180,
  },
  loremIpsum: {
    position: "relative",
    fontSize: FontSize.inlingH1_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.inlingH1,
    color: Color.colorWhite,
    textAlign: "left",
    marginTop: 2,
  },
  loremIpsumDolor: {
    position: "relative",
    fontSize: FontSize.inlingP_size,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.inlingP,
    color: Color.colorWhite,
    textAlign: "left",
    marginTop: 2,
  },
  news1: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOlivedrab,
    width: 241,
    height: 232,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_8xs,
    paddingTop: Padding.p_7xs,
    paddingBottom: Padding.p_11xs,
  },
  frameChild: {
    position: "relative",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOrange,
    width: 74,
    height: 74,
  },
  frameItem: {
    position: "relative",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGold,
    width: 74,
    height: 74,
    marginTop: 5,
  },
  frameInner: {
    position: "relative",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorOlivedrab,
    width: 74,
    height: 74,
    marginTop: 5,
  },
  frame7: {
    width: 74,
    height: 232,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 7,
  },
  frameIcon1: {
    position: "relative",
    width: 5,
    height: 232,
    overflow: "hidden",
    marginLeft: 7,
  },
  frame6: {
    width: 335,
    height: 232,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame5: {
    width: 338,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 10,
  },
  frame3: {
    height: 273,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 14,
  },
  depo: {
    color: Color.colorBlack,
  },
  trash: {
    color: Color.colorOlivedrab,
  },
  depotrash: {
    fontSize: FontSize.inlingH1_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.inlingH1,
    textAlign: "left",
    height: 20,
    marginRight: 213,
  },
  maskGroupIcon: {
    position: "relative",
    width: 150,
    height: 115,
  },
  organik: {
    position: "relative",
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.inlingH1,
    color: Color.colorWhite,
    textAlign: "left",
    marginTop: 7,
  },
  cardorganik: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorOlivedrab,
    width: 150,
    height: 150,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardanorganik: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorOlivedrab,
    width: 150,
    height: 150,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 35,
  },
  frame9: {
    width: 335,
    height: 150,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 3,
    marginTop: 9,
  },
  frame8: {
    width: 338,
    height: 179,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 14,
  },
  groupChild: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderTopLeftRadius: Border.br_17xl_5,
    borderTopRightRadius: Border.br_17xl_5,
    backgroundColor: Color.colorPalegoldenrod,
    borderStyle: "solid",
    borderColor: Color.colorOlivedrab,
    borderWidth: 1,
  },
  home: {
    position: "absolute",
    top: "71.83%",
    left: "27.69%",
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorOlivedrab,
    textAlign: "left",
  },
  groupItem: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  rectangleParent: {
    position: "absolute",
    height: "100%",
    width: "21.38%",
    top: "0%",
    right: "78.62%",
    bottom: "0%",
    left: "0%",
  },
  groupInner: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderTopLeftRadius: Border.br_17xl_5,
    borderTopRightRadius: Border.br_17xl_5,
    backgroundColor: Color.colorPalegoldenrod,
  },
  wallet: {
    position: "absolute",
    top: "71.83%",
    left: "16.92%",
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorOlivedrab,
    textAlign: "center",
  },
  rectangleGroup: {
    position: "absolute",
    height: "100%",
    width: "21.38%",
    top: "0%",
    right: "39.14%",
    bottom: "0%",
    left: "39.47%",
  },
  profile: {
    position: "absolute",
    top: "71.83%",
    left: "15.38%",
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontFamily: FontFamily.koulenRegular,
    color: Color.colorOlivedrab,
    textAlign: "center",
  },
  groupChild2: {
    position: "absolute",
    top: 12,
    left: 13,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  rectangleContainer: {
    position: "absolute",
    height: "100%",
    width: "21.38%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "78.62%",
  },
  groupParent: {
    position: "relative",
    width: 304,
    height: 71,
  },
  mainMenuInner: {
    height: 71,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 14,
  },
  mainMenu: {
    position: "relative",
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default MainMenu1;
