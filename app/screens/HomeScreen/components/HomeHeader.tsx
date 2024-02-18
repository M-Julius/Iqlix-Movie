import { Text } from "app/components"
import { colors } from "app/theme"
import React, { FC } from "react"
import { StyleSheet, View } from "react-native"
import { Fontisto } from "@expo/vector-icons"

export const HomeHeader: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowCenter}>
        <View style={styles.imageProfile} />
        <View>
          <Text>
            Hay, <Text style={styles.textName}>Julius</Text>
          </Text>
          <Text size="xxs">Good morning</Text>
        </View>
      </View>
      <Fontisto size={24} color={colors.palette.neutral600} name="bell" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  imageProfile: {
    backgroundColor: colors.separator,
    borderRadius: 50,
    height: 50,
    marginRight: 14,
    width: 50,
  },
  rowCenter: { alignItems: "center", flexDirection: "row" },
  textName: { fontWeight: "bold" },
})
