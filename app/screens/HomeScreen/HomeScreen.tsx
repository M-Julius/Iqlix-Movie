import React, { FC } from "react"
import { Image, StyleSheet, View, ViewStyle } from "react-native"
import { Screen } from "../../components"
import { HomeSectionMovie, Movie } from "./components/HomeSectionMovie"
import { HomeHeader } from "./components/HomeHeader"

export interface HomeScreenProps {}

export const HomeScreen: FC<any> = function HomeScreen(_props) {
  const movies: Movie[] = [
    {
      title: "Into the spider verse",
      poster: "http://www.reelworldtheology.com/wp-content/uploads/2018/12/spider-verse-poster.jpg",
      genre: "Action, Thriller",
    },
    {
      title: "Into the spider verse",
      poster: "http://www.reelworldtheology.com/wp-content/uploads/2018/12/spider-verse-poster.jpg",
      genre: "Action, Thriller",
    },
    {
      title: "Into the spider verse",
      poster: "http://www.reelworldtheology.com/wp-content/uploads/2018/12/spider-verse-poster.jpg",
      genre: "Action, Thriller",
    },
    {
      title: "Into the spider verse",
      poster: "http://www.reelworldtheology.com/wp-content/uploads/2018/12/spider-verse-poster.jpg",
      genre: "Action, Thriller",
    },
  ]
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <HomeHeader />
      <View style={styles.containerBanner}>
        <Image
          source={{
            uri: "https://i0.wp.com/halcyonrealms.com/blogpics/spidyv2posters06.jpg?resize=750%2C500&ssl=1",
          }}
          style={styles.imageBanner}
        />
      </View>
      <HomeSectionMovie movies={movies} title="Recomendation" />
      <HomeSectionMovie movies={movies} title="Upcoming" />
      <View style={styles.footer} />
    </Screen>
  )
}

const styles = StyleSheet.create({
    containerBanner: {
      alignSelf: "center",
      borderRadius: 20,
      height: 170,
      marginTop: 20,
      width: "90%",
    },
    footer: { height: 150 },
    imageBanner: { borderRadius: 20, flex: 1, height: 170, width: "100%" },
  })

const $screenContainer: ViewStyle = {
  flexGrow: 1,
}
