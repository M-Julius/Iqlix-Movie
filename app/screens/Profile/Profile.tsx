import React, { FC, useState } from "react"
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { Screen, Text, Toggle } from "../../components"
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { colors } from "app/theme"
import { useStores } from "app/models"

export interface ProfileScreenProps {}

export const ProfileScreen: FC<any> = function ProfileScreen(_props) {
  const [toggle, setToggle] = useState(false)
  const {
    authenticationStore: { logout },
  } = useStores()

  const menus = [
    { icon: "account-outline", title: "Personal Info" },
    { icon: "card-bulleted-outline", title: "Payment Methods" },
    { icon: "movie-open-outline", title: "Favorite Movie" },
    { icon: "bell-outline", title: "Notification" },
    { icon: "security", title: "Security" },
    { icon: "translate", title: "Language" },
    {
      icon: "theme-light-dark",
      title: "Dark Mode",
      action: () => {
        setToggle(!toggle)
      },
    },
    {
      icon: "logout",
      title: "Logout",
      action: () => logout(),
    },
  ]
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <View style={styles.containerHeader}>
        <Text size={"lg"} style={styles.titleHeader}>
          Profile
        </Text>
        <FontAwesome6 name="edit" size={24} color={colors.tint} />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.row}>
          <View style={styles.imageProfile} />
          <Text size="md" style={styles.nameUser}>
            Leomord
          </Text>
        </View>
        <Ionicons name="qr-code-outline" size={24} color={colors.palette.neutral600} />
      </View>
      <View style={styles.infoAcc}>
        <View style={styles.row}>
          <Ionicons name="call-outline" size={24} color={colors.palette.neutral600} />
          <Text style={styles.textInfoAcc}>
            {"   "}
            +62 8312 121 21
          </Text>
        </View>
        <View style={[styles.row, styles.mTop]}>
          <Ionicons name="mail-outline" size={24} color={colors.palette.neutral600} />
          <Text style={styles.textInfoAcc}>
            {"   "}
            leomord@iqlix.com
          </Text>
        </View>
      </View>

      {menus.map((item, index) => {
        const title = item.title.toLowerCase()

        return (
          <TouchableOpacity
            onPress={item.action}
            key={index.toString()}
            style={styles.menuContainer}
          >
            <View style={styles.row}>
              <MaterialCommunityIcons
                name={item.icon as any}
                size={26}
                color={title === "logout" ? colors.error : colors.tint}
                style={styles.icLeft}
              />
              <Text style={$titleStyle(title) as ViewStyle}>{item.title}</Text>
            </View>
            <View style={styles.row}>
              {title === "language" && (
                <Text style={{ color: colors.palette.neutral600 }}>English (US)</Text>
              )}
              {title !== "logout" && title !== "dark mode" && (
                <MaterialCommunityIcons name="chevron-right" size={26} />
              )}
            </View>
            {title === "dark mode" && (
              <Toggle variant="switch" value={toggle} onValueChange={item.action} />
            )}
          </TouchableOpacity>
        )
      })}
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flexGrow: 1,
  paddingHorizontal: 20,
  paddingBottom: 150,
}

const $titleStyle = (title: string) => ({
  fontWeight: "700",
  color: title === "logout" ? colors.error : colors.palette.neutral900,
})

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    width: "100%",
  },
  icLeft: { marginRight: 15 },
  imageProfile: {
    backgroundColor: colors.palette.neutral300,
    borderRadius: 80,
    height: 80,
    marginRight: 15,
    width: 80,
  },
  infoAcc: {
    borderBottomColor: colors.palette.neutral300,
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  mTop: { marginTop: 10 },
  menuContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  nameUser: { fontWeight: "bold" },
  profileContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  row: { alignItems: "center", flexDirection: "row" },
  textInfoAcc: { color: colors.palette.neutral600, fontWeight: "700" },
  titleHeader: { fontWeight: "bold" },
})
