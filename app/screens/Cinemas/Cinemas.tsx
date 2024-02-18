import React, { FC, useEffect, useRef, useState } from "react"
import { FlatList, StyleSheet, View, ViewStyle } from "react-native"
import { Header, Screen, Text } from "../../components"
import { EvilIcons } from "@expo/vector-icons"
import { colors } from "app/theme"
import { CinemasTabBar } from "./components/CinemasTabBar"
import { Cinemas, CinemasItem } from "./components/CinemasItem"

export interface CinemasScreenProps {}

export const CinemasScreen: FC<any> = function CinemasScreen(_props) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  const [tabs, setTabs] = useState<number>(0)
  const [cinemas, setCinemas] = useState<Cinemas[]>([
    {
      id: 1,
      title: "Cinema 99 Premiere",
      direction: "4.1 km",
      location: "Jakarta",
      rate: 4,
      review: "10.5k",
      poster: "https://www.sortiraparis.com/images/58/108/5868-rex.jpg",
      isFavorite: true,
    },
    {
      id: 2,
      title: "Black Premiere Future",
      direction: "5.1 km",
      location: "Jakarta",
      rate: 4.9,
      review: "12.5k",
      poster: "https://conversationsabouther.net/wp-content/uploads/2015/07/empty-cinema.jpg",
      isFavorite: true,
    },
    {
      id: 3,
      title: "Ascedent Prime",
      direction: "6.3 km",
      location: "Jakarta",
      rate: 3.5,
      review: "9k",
      poster: "https://www.vernon-direct.fr/wp-content/uploads/2019/11/Visuel-salle-2.jpg",
      isFavorite: false,
    },
    {
      id: 4,
      title: "Century Nightwoll",
      direction: "4.1 km",
      location: "Jakarta",
      rate: 4,
      review: "10k",
      poster: "https://wallpaperaccess.com/full/3968676.jpg",
      isFavorite: true,
    },
  ])

  useEffect(() => {
    return () => timeout.current && clearTimeout(timeout.current)
  }, [])

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <Header title="Cinemas" />
      <View style={styles.containerLocation}>
        <EvilIcons name="location" size={24} color={colors.tint} />
        <Text style={styles.titleLocation}>Jakarta, Indonesia</Text>
      </View>
      <CinemasTabBar tabs={tabs} setTabs={setTabs} />
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={tabs === 1 ? cinemas.filter((cinema) => cinema.isFavorite) : cinemas}
        style={styles.flatlistStyle}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CinemasItem cinemas={cinemas} setCinemas={setCinemas} item={item} />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  containerLocation: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
    paddingLeft: 20,
  },
  contentContainer: { paddingBottom: 130 },
  flatlistStyle: { flex: 1, marginTop: 20, paddingHorizontal: 20, width: "100%" },
  titleLocation: { fontWeight: "bold", marginLeft: 10 },
})

const $screenContainer: ViewStyle = {
  flex: 1,
}
