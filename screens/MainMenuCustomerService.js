import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const MainMenuCustomerService = ({route}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mainMenuCustomerService, styles.iconLayout1]}>
      <View>
        <View style={styles.frame}>
          <View style={[styles.header, styles.frameShadowBox]}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame7.png")}
            />
            <Image
              style={[
                styles.materialSymbolscontactSuppoIcon,
                styles.iconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/materialsymbolscontactsupportrounded2.png")}
            />
          </View>
        </View>
        <View style={styles.mingcutebackFillParent}>
          <Pressable
            style={styles.mingcutebackFill}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/mingcutebackfill.png")}
            />
          </Pressable>
          <Text
            style={[styles.costumerService, styles.amTypo]}
          >{`Costumer Service `}</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
        <View style={[styles.frameWrapper, styles.frameShadowBox]}>
          <View style={styles.assistantParent}>
            <Text style={[styles.assistant, styles.amTypo]}>Assistant</Text>
            <View
              style={[
                styles.selamatPagiSelamatDatangDWrapper,
                styles.wrapperSpaceBlock,
              ]}
            >
              <Text style={[styles.selamatPagiSelamat, styles.selamatTypo]}>
                Selamat pagi, selamat datang di Costumer service TRASCH.
                Adakah yang bisa kami bantu ?
              </Text>
            </View>
            <View style={[styles.amWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.am, styles.amTypo]}>08:16 AM</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <View
            style={[
              styles.sayaInginSetorSampahDiJabWrapper,
              styles.selamatWrapperSpaceBlock,
            ]}
          >
            <Text style={[styles.sayaInginSetor, styles.selamatTypo]}>
              Saya ingin setor sampah di JABODETABEK
            </Text>
          </View>
          <View style={[styles.amContainer, styles.wrapperSpaceBlock]}>
            <Text style={[styles.am, styles.amTypo]}>08:15 AM</Text>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <View style={styles.assistantParent}>
            <Text style={[styles.assistant, styles.amTypo]}>Assistant</Text>
            <View
              style={[
                styles.selamatPagiSelamatDatangDWrapper,
                styles.wrapperSpaceBlock,
              ]}
            >
              <Text
                style={[styles.selamatPagiSelamat, styles.selamatTypo]}
              >{`Kami memiliki fitur jemput sampah, bisa akses di dalam halaman sampah organik atau anorganik. Kemudian bisa pilih alamat sesuai dengan lokasi anda. `}</Text>
            </View>
            <View style={[styles.amWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.am, styles.amTypo]}>08:16 AM</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.mingcutesendFillParent, styles.frameGroupSpaceBlock]}
      >
        <Pressable style={styles.mingcutesendFill} onPress={() => {}}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/mingcutesendfill.png")}
          />
        </Pressable>
        <View style={styles.ketikDisiniWrapper}>
          <TextInput
            style={styles.ketikDisini}
            placeholder="Ketik disini..."
            placeholderTextColor="#b4b1b1"
          />
        </View>
        <Image
          style={[styles.mingcutesendFillIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mingcutesendfill1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  frameShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
  },
  iconLayout: {
    width: 34,
    height: 34,
    overflow: "hidden",
  },
  amTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
  },
  frameGroupSpaceBlock: {
    marginTop: 103,
    alignItems: "center",
  },
  wrapperSpaceBlock: {
    marginTop: 5,
    flexDirection: "row",
  },
  selamatTypo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_base,
  },
  frameSpaceBlock: {
    marginTop: 10,
    width: 333,
  },
  selamatWrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
  },
  frameIcon: {
    width: 189,
    height: 43,
    overflow: "hidden",
  },
  materialSymbolscontactSuppoIcon: {
    marginLeft: 114,
    height: 34,
  },
  header: {
    height: 105,
    paddingHorizontal: 22,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    width: 390,
    backgroundColor: Color.colorWhitesmoke,
  },
  frame: {
    height: 115,
    width: 390,
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  mingcutebackFill: {
    width: 24,
    height: 24,
  },
  costumerService: {
    fontWeight: "700",
    color: Color.colorPalegoldenrod,
    marginLeft: 184,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  mingcutebackFillParent: {
    paddingHorizontal: 28,
    paddingVertical: Padding.p_2xs,
    marginTop: -10,
    backgroundColor: Color.colorDarkolivegreen,
    justifyContent: "center",
    flexDirection: "row",
    width: 390,
    alignItems: "center",
  },
  assistant: {
    fontWeight: "600",
    color: Color.colorDarkolivegreen,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  selamatPagiSelamat: {
    color: Color.colorDarkolivegreen,
    flex: 1,
  },
  selamatPagiSelamatDatangDWrapper: {
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.colorPalegoldenrod,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    alignSelf: "stretch",
    marginTop: 5,
  },
  am: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
  },
  amWrapper: {
    alignSelf: "stretch",
    marginTop: 5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  assistantParent: {
    width: 285,
  },
  frameWrapper: {
    width: 334,
    flexDirection: "row",
  },
  sayaInginSetor: {
    color: Color.colorWhite,
  },
  sayaInginSetorSampahDiJabWrapper: {
    borderTopLeftRadius: Border.br_3xs,
    height: 44,
    backgroundColor: Color.colorDarkolivegreen,
    alignItems: "flex-end",
  },
  amContainer: {
    width: 202,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameContainer: {
    alignItems: "flex-end",
  },
  frameView: {
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameGroup: {
    justifyContent: "flex-end",
  },
  mingcutesendFill: {
    width: 35,
    height: 34,
  },
  ketikDisini: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_base,
  },
  ketikDisiniWrapper: {
    borderRadius: 188,
    backgroundColor: "#fbffff",
    borderStyle: "solid",
    borderColor: "#9dd9d2",
    borderWidth: 1,
    width: 303,
    height: 37,
    paddingHorizontal: 15,
    paddingVertical: 0,
    marginLeft: 5,
    justifyContent: "center",
  },
  mingcutesendFillIcon: {
    marginLeft: 5,
    height: 34,
  },
  mingcutesendFillParent: {
    backgroundColor: Color.colorOlivedrab,
    paddingHorizontal: 0,
    paddingVertical: 7,
    justifyContent: "center",
    flexDirection: "row",
    width: 390,
  },
  mainMenuCustomerService: {
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
  },
});

export default MainMenuCustomerService;
