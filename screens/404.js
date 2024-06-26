import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const Pagenotfound = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.view, styles.viewLayout]}>
      <View style={[styles.frame, styles.frameLayout1]}>
        <View style={[styles.frameChild, styles.frameLayout1]} />
        <Pressable
          style={styles.mingcutebackFill}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.viewLayout]}
            contentFit="cover"
            source={require("../assets/mingcutebackfill.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.frame1, styles.frameLayout]}>
        <View style={[styles.frame2, styles.frameLayout]}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <Text style={styles.pageOnDeployment}>Page on deployment</Text>
        </View>
        <Text style={styles.youCanUse}>
          You can use the search to find something in the blog. After this, if
          you didn’t find it, you can contact us.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameLayout1: {
    height: 47,
    width: 390,
  },
  frameLayout: {
    width: 319,
    overflow: "hidden",
  },
  frameChild: {
    marginLeft: -195,
    top: 0,
    left: "50%",
    backgroundColor: Color.colorDarkolivegreen,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  mingcutebackFill: {
    left: 28,
    top: 11,
    width: 24,
    height: 24,
    position: "absolute",
  },
  frame: {
    overflow: "hidden",
  },
  imageIcon: {
    width: 310,
    height: 190,
    overflow: "hidden",
  },
  pageOnDeployment: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorDarkolivegreen,
    marginTop: 44,
    textAlign: "center",
  },
  frame2: {
    height: 270,
    paddingLeft: Padding.p_12xs_5,
  },
  youCanUse: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorOlivedrab,
    width: 305,
    marginTop: 18,
    textAlign: "center",
  },
  frame1: {
    height: 336,
    paddingRight: Padding.p_12xs_5,
    marginTop: 220,
    alignItems: "center",
  },
  view: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 844,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Pagenotfound;
