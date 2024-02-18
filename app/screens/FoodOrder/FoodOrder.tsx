import React, { FC } from "react"
import { Image, StyleSheet, View, ViewStyle } from "react-native"
import { Header, Screen } from "../../components"
import { Food, FoodOrderSection } from "./components/FoodOrderSection"

export interface FoodOrderScreenProps {}

export const FoodOrderScreen: FC<any> = function FoodOrderScreen(_props) {
  const foods: Food[] = [
    {
      title: "Premium Popcorn",
      poster: "https://edtimes.in/wp-content/uploads/2020/11/Popcorn-869302844.jpg",
      price: 5.5,
    },
    {
      title: "French Fries",
      poster:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2018619/rs_1024x1024-180719122106-1024-mcdonalds-fries.jpg?fit=inside%7C900:auto&output-quality=90",
      price: 4.5,
    },
    {
      title: "Drink Cola",
      poster:
        "https://www.foleydentalgroup.com/wp-content/uploads/2017/02/data-83-category-bt-lib-99-1000x1000.jpg",
      price: 3.5,
    },
    {
      title: "Premium Popcorn",
      poster: "https://edtimes.in/wp-content/uploads/2020/11/Popcorn-869302844.jpg",
      price: 10.5,
    },
  ]
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <Header title="Iqlix Snacks" />
      <View style={styles.containerBanner}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/ef/d5/74/efd5744015bebd74b63288c4c09a3fcc.jpg",
          }}
          style={styles.image}
        />
      </View>
      <FoodOrderSection key={'snacks'} foods={foods} title="Top Snacks" />
      <FoodOrderSection key={'meals'} foods={foods} title="Meals" />
      <View style={styles.footer} />
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flexGrow: 1,
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
  image: { borderRadius: 20, flex: 1, height: 170, width: "100%" },
})
