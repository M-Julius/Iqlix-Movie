import React, { FC } from "react"
import { Button, Text } from "app/components"
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { Fontisto } from "@expo/vector-icons"

export interface Movie {
  title: string
  poster: string
  genre: string
}

export const HomeSectionMovie: FC<{ movies: Movie[]; title: string }> = (props: {
  movies: Movie[]
  title: string
}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.containerMovie} showsHorizontalScrollIndicator={false}>
        {props.movies.map((item, i) => {
          const isLast = i === props.movies.length - 1
          return (
            <View
              key={i}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                marginRight: isLast ? 20 : 10,
                paddingRight: isLast ? 20 : 0,
              }}
            >
              {props.title === "Upcoming" && (
                <View style={styles.containerBadgeFavorite}>
                  <Fontisto name="bookmark" size={18} color={colors.tint} />
                </View>
              )}
              <View style={styles.containerImage}>
                <Image source={{ uri: item.poster }} style={styles.imagePoster} />
              </View>
              <Text style={styles.titleMovie}>{item.title}</Text>
              <Text size="xxs" style={styles.textGenre}>
                {item.genre}
              </Text>
              {props.title !== "Upcoming" && (
                <Button
                  style={styles.btnBook}
                  textStyle={{ color: colors.tint }}
                  preset="filled"
                  text="Book"
                />
              )}
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  btnBook: {
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.tint,
    borderWidth: 1,
    width: 100,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  containerBadgeFavorite: {
    alignItems: "center",
    backgroundColor: colors.palette.neutral100,
    borderRadius: 100,
    height: 30,
    justifyContent: "center",
    position: "absolute",
    right: 10,
    top: 5,
    width: 30,
    zIndex: 10,
  },
  containerImage: {
    backgroundColor: colors.palette.neutral300,
    borderRadius: 20,
    height: 220,
    width: 150,
  },
  containerMovie: { paddingLeft: 20 },
  imagePoster: { borderRadius: 20, flex: 1, height: 180, width: 150 },
  textGenre: { marginVertical: 5 },
  title: { fontWeight: "bold" },
  titleMovie: { fontWeight: "bold", marginTop: 5 },
  viewAll: { color: colors.tint },
})
