/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React, { useRef } from "react"
import { TouchableOpacity } from "react-native"
import { colors } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { HomeScreen } from "app/screens/HomeScreen/HomeScreen"
import { CinemasScreen } from "app/screens/Cinemas/Cinemas"
import { FoodOrderScreen } from "app/screens/FoodOrder/FoodOrder"
import { TicketScreen } from "app/screens/Ticket/Ticket"
import { ProfileScreen } from "app/screens/Profile/Profile"
import {
  CurvedBottomBar,
  CurvedBottomBarExpo,
  ICurvedBottomBarRef,
} from "react-native-curved-bottom-bar"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { Text } from "app/components"

export type HomeTabParamList = {
  HomeScreen: undefined
  Cinemas: undefined
  Ticket: undefined
  FoodOrder: undefined
  Profile: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

// const Tab = createBottomTabNavigator<HomeTabParamList>()

/**
 * This is the main navigator for the demo screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `DemoNavigator`.
 */
export function HomeNavigator() {
  const ref = useRef<ICurvedBottomBarRef>(null)
  const $containerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <CurvedBottomBarExpo.Navigator
      shadowStyle={{
        shadowColor: "#DDDDDD",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
      }}
      ref={ref}
      type={'DOWN'}
      circlePosition={"CENTER"}
      circleWidth={60}
      bgColor="#f7f8f8"
      borderTopLeftRight
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}
      style={{ marginBottom: $containerInsets.paddingBottom, alignItems: "center" }}
      renderCircle={({ routeName, navigate }) => (
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: colors.tint,
            shadowColor: "#DDDDDD",
            bottom: 30,
          }}
          onPress={() => {
            navigate(routeName)
          }}
        >
          <Ionicons name="ticket-outline" size={30} color={"white"} />
        </TouchableOpacity>
      )}
      tabBar={({ routeName, selectedTab, navigate }) => {
        const Icon = MaterialCommunityIcons
        const iconName =
          routeName === "HomeTab"
            ? "home-variant-outline"
            : routeName === "Cinemas"
            ? "movie-roll"
            : routeName === "FoodOrder"
            ? "popcorn"
            : routeName === "Profile"
            ? "account-circle-outline"
            : "chatbubbles-outline"

        const tabName =
          routeName === "HomeTab"
            ? "Home"
            : routeName === "Cinemas"
            ? "Cinemas"
            : routeName === "FoodOrder"
            ? "Food Order"
            : routeName === "Profile"
            ? "Profile"
            : "Chat"

        return (
          <TouchableOpacity
            onPress={() => navigate(routeName)}
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Icon
              name={iconName as any}
              size={23}
              color={selectedTab === routeName ? colors.tint : colors.palette.neutral400}
            />
            <Text
              size="xs"
              style={{ color: selectedTab === routeName ? colors.tint : colors.palette.neutral400 }}
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        )
      }}
    >
      <CurvedBottomBarExpo.Screen
        name="HomeTab"
        position="LEFT"
        component={() => <HomeScreen />}
        options={{
          headerStyle: {
            headerShown: false,
          },
        }}
      />
      <CurvedBottomBarExpo.Screen
        name="Cinemas"
        component={() => <CinemasScreen />}
        position="LEFT"
      />
      <CurvedBottomBarExpo.Screen
        name="Ticket"
        component={() => <TicketScreen />}
        position="CIRCLE"
      />
      <CurvedBottomBar.Screen
        name="FoodOrder"
        position="RIGHT"
        component={() => <FoodOrderScreen />}
      />
      <CurvedBottomBar.Screen name="Profile" component={() => <ProfileScreen />} position="RIGHT" />
    </CurvedBottomBarExpo.Navigator>
  )
}
