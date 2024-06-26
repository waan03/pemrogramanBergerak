import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingScreen}>
      <View style={styles.vectorRecycleParent}>
        <Image
          style={styles.vectorRecycleIcon}
          contentFit="cover"
          source={require("../assets/vectorrecycle.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.traschlogoParent}>
            <Image
              style={styles.traschlogoIcon}
              contentFit="cover"
              source={require("../assets/traschlogo.png")}
            />
            <Text style={styles.yourQualityLife}>Your Quality Life</Text>
          </View>
          <View style={styles.iconStart}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/earth.png")}
            />
            <Image
              style={[styles.recycleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/recycle.png")}
            />
            <Image
              style={[styles.recycleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/trashfilled.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  vectorRecycleIcon: {
    width: 232,
    height: 209,
  },
  traschlogoIcon: {
    width: 272,
    height: 61,
    overflow: "hidden",
  },
  yourQualityLife: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "300",
    fontFamily: FontFamily.inlingP,
    color: Color.colorDarkolivegreen,
    textAlign: "left",
    marginTop: 10,
  },
  traschlogoParent: {
    alignItems: "center",
  },
  recycleIcon: {
    marginLeft: 40,
  },
  iconStart: {
    flexDirection: "row",
    marginTop: 55,
  },
  frameParent: {
    marginTop: 110,
    alignItems: "center",
  },
  vectorRecycleParent: {
    paddingHorizontal: 0,
    paddingVertical: 55,
    alignItems: "center",
  },
  loadingScreen: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 59,
    paddingVertical: 195,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default LoadingScreen;
