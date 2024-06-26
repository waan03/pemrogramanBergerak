import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  View,
  Text,
  Linking,
  TouchableHighlight
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const MainMenu = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView
      style={[styles.mainMenu, styles.iconLayout]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      pagingEnabled={true}
      contentContainerStyle={styles.mainMenuScrollViewContent}
    >
      <View style={styles.frame}>
        <View style={styles.header}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <Pressable
            style={styles.materialSymbolscontactSuppo}
            onPress={() => navigation.navigate("MainMenuCustomerService")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/materialsymbolscontactsupportrounded.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={[styles.frame1, styles.frameSpaceBlock2]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
        </View>
        <View style={[styles.frame3, styles.frameSpaceBlock1]}>
          <LinearGradient
            style={[styles.cardwelcome, styles.frameLayout2]}
            locations={[0, 1]}
            colors={["rgba(243, 255, 182, 0)", "rgba(243, 255, 182, 0.5)"]}
          >
            <Text
              style={[styles.welcometext, styles.welcometextTypo]}
            >{`This is the welcoming page, go collect some trash and trade it here ! Earn more points to trade it into ur wallet.   `}</Text>
            <Image
              style={styles.undrawThrowAwayReX60k1Icon}
              contentFit="cover"
              source={require("../assets/undraw-throw-away-re-x60k-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={[styles.frame4, styles.frameSpaceBlock2]}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Text style={[styles.welcome, styles.welcomeTypo]}>News</Text>
        </View>
        <View style={[styles.frame6, styles.frameSpaceBlock1]}>
          <View style={[styles.frame7, styles.frameLayout2]}>
            <Pressable
              style={styles.news1}
              onPress={() =>
                Linking.openURL(
                  "https://www.kemenkopmk.go.id/72-juta-ton-sampah-di-indonesia-belum-terkelola-dengan-baik"
                )
              }
            >
              <Image
                style={styles.unsplash5wfttm2cjeiIcon}
                contentFit="cover"
                source={require("../assets/unsplash5wfttm2cjei.png")}
              />
              <Text style={[styles.loremIpsum, styles.loremSpaceBlock]}>
                72 ton sampah ! 
              </Text>
              <Text style={[styles.loremIpsumDolor, styles.loremSpaceBlock]}>
                kemenkopmk.go.id
              </Text>
            </Pressable>
            <ScrollView
              style={[styles.frame8, styles.frameSpaceBlock]}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.frameScrollViewContent}
            >
              <View style={styles.frameChild} />
              <View style={[styles.frameItem, styles.frameLayout1]} />
              <View style={[styles.frameInner, styles.frameLayout1]} />
            </ScrollView>
            <Image
              style={[styles.frameIcon1, styles.frameSpaceBlock]}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frame9, styles.frameSpaceBlock2]}>
        <View style={[styles.frame10, styles.frameFlexBox]}>
          <Text style={[styles.depotrash, styles.welcomeTypo]}>
            <Text style={styles.depo}>Depo</Text>
            <Text style={styles.trash}>trash</Text>
          </Text>
        </View>
        <View style={[styles.frame11, styles.frameFlexBox]}>
          <View style={[styles.frame12, styles.frameLayout2]}>
            <Pressable
              style={[styles.cardorganik, styles.cardorganikShadowBox]}
              onPress={() => navigation.navigate("MainMenuOrganik")}
            >
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require("../assets/mask-group.png")}
              />
              <Text style={styles.organik}>Organik</Text>
            </Pressable>
            <Pressable
              style={[styles.cardanorganik, styles.cardorganikShadowBox]}
              onPress={() => navigation.navigate("MainMenuAnorganik")}
            >
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require("../assets/mask-group1.png")}
              />
              <Text style={styles.organik}>Anorganik</Text>
            </Pressable>
          </View>
        </View>
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
          <TouchableHighlight
            style={styles.container}
            underlayColor="#fff"
            onPress={() => navigation.navigate("Profile")}
          >
          <>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/frame-32.png")}
            />
            </>
            </TouchableHighlight>
            <Text style={[styles.wallet, styles.homeTypo]}>PROFILE</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mainMenuScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameSpaceBlock2: {
    marginTop: 14,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  welcomeTypo: {
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    fontSize: FontSize.inlingH1_size,
  },
  frameSpaceBlock1: {
    marginTop: 10,
    justifyContent: "center",
    width: 338,
    overflow: "hidden",
  },
  frameLayout2: {
    width: 335,
    flexDirection: "row",
  },
  welcometextTypo: {
    fontFamily: FontFamily.inlingP,
    fontWeight: "300",
    fontSize: FontSize.inlingP_size,
  },
  loremSpaceBlock: {
    marginTop: 2,
    color: Color.colorWhite,
    textAlign: "left",
    lineHeight: 20,
  },
  frameSpaceBlock: {
    marginLeft: 7,
    overflow: "hidden",
  },
  frameLayout1: {
    marginTop: 5,
    height: 74,
    width: 74,
    borderRadius: Border.br_8xs,
  },
  cardorganikShadowBox: {
    borderRadius: Border.br_3xs,
    elevation: 10,
    shadowRadius: 10,
    width: 150,
    backgroundColor: Color.colorOlivedrab,
    height: 150,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  homeTypo: {
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_base,
    color: Color.colorOlivedrab,
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  frame: {
    alignItems: "center",
    height: 115,
    width: 390,
    overflow: "hidden",
  },
  welcome: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 20,
  },
  frame2: {
    width: 332,
  },
  welcometext: {
    width: 156,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 20,
  },
  undrawThrowAwayReX60k1Icon: {
    width: 186,
    height: 104,
    marginLeft: -37,
    overflow: "hidden",
  },
  cardwelcome: {
    borderColor: Color.colorDarkolivegreen,
    height: 120,
    paddingHorizontal: Padding.p_5xs,
    paddingTop: Padding.p_2xs,
    paddingBottom: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    width: 335,
    borderRadius: Border.br_8xs,
  },
  frame3: {
    alignItems: "center",
  },
  frame1: {
    height: 150,
    alignItems: "center",
    width: 338,
  },
  unsplash5wfttm2cjeiIcon: {
    width: 231,
    height: 180,
    borderRadius: Border.br_8xs,
  },
  loremIpsum: {
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    fontSize: FontSize.inlingH1_size,
  },
  loremIpsumDolor: {
    fontFamily: FontFamily.inlingP,
    fontWeight: "300",
    fontSize: FontSize.inlingP_size,
  },
  news1: {
    width: 241,
    paddingHorizontal: 5,
    paddingTop: 6,
    paddingBottom: 2,
    backgroundColor: Color.colorOlivedrab,
    height: 232,
    borderRadius: Border.br_8xs,
  },
  frameChild: {
    backgroundColor: "#f9a620",
    height: 74,
    width: 74,
    borderRadius: Border.br_8xs,
  },
  frameItem: {
    backgroundColor: Color.colorGold,
  },
  frameInner: {
    backgroundColor: Color.colorOlivedrab,
  },
  frame8: {
    maxWidth: 74,
    width: 74,
    marginLeft: 7,
    flex: 1,
  },
  frameIcon1: {
    width: 5,
    height: 232,
  },
  frame7: {
    height: 232,
    alignItems: "center",
    overflow: "hidden",
  },
  frame6: {
    alignItems: "flex-end",
  },
  frame4: {
    height: 273,
    alignItems: "center",
  },
  depo: {
    color: Color.colorBlack,
  },
  trash: {
    color: Color.colorOlivedrab,
  },
  depotrash: {
    textAlign: "left",
    lineHeight: 20,
  },
  frame10: {
    width: 334,
  },
  maskGroupIcon: {
    width: 150,
    height: 115,
  },
  organik: {
    marginTop: 7,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.inlingH1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.inlingH1_size,
  },
  cardorganik: {
    width: 150,
  },
  cardanorganik: {
    marginLeft: 35,
    width: 150,
  },
  frame12: {
    height: 150,
    alignItems: "center",
    overflow: "hidden",
  },
  frame11: {
    marginTop: 9,
    width: 338,
    alignItems: "flex-end",
  },
  frame9: {
    height: 179,
    width: 338,
    justifyContent: "flex-end",
  },
  mainMenu: {
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    width: "100%",
  },
  
  frameParent2: {
    width: 304,
    flexDirection: "row",
  },
  frameParent2Layout: {
    height: 71,
    alignItems: "center",
  },
  mainMenuAnorganikInner: {
    marginTop: 16,
    overflow: "hidden",
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
  frameChild1: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  home: {
    textAlign: "left",
  },
  frameParent3: {
    paddingLeft: Padding.p_2xs,
    paddingRight: Padding.p_xs,
  },
  frameParent4: {
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_4xs,
  },
  wallet: {
    marginTop: -1,
    textAlign: "center",
  },
});

export default MainMenu;
