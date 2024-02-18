/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { Pressable, TextInput, TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Icon,
  Screen,
  Text,
  TextField,
  TextFieldAccessoryProps,
  Toggle,
} from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { MaterialIcons } from "@expo/vector-icons"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const authPasswordInput = useRef<TextInput>(null)

  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [checkboxChecked, setCheckedBox] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    // setAuthEmail("ignite@infinite.red")
    // setAuthPassword("ign1teIsAwes0m3")

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  const error = isSubmitted ? validationError : ""

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(_props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral500}
            containerStyle={{ alignSelf: "center", paddingRight: 15 }}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
        <Pressable style={{ flex: 1 }}>
          <MaterialIcons size={42} color={colors.palette.neutral900} name="chevron-left" />
        </Pressable>
        <Text size="xl" style={{ fontWeight: "bold" }}>
          Iqlix Login
        </Text>
        <View style={{ flex: 1 }} />
      </View>
      <Button
        LeftAccessory={(_props) => <Icon size={18} style={{ marginRight: 10 }} icon="fb" />}
        text="Sign with Facebook"
        textStyle={{ fontWeight: "bold", color: "white" }}
        style={{ backgroundColor: "#017dd1", borderRadius: 50, marginBottom: 20 }}
      />
      <Button
        LeftAccessory={(_props) => <Icon size={18} style={{ marginRight: 10 }} icon="twitter" />}
        text="Sign with Twitter"
        textStyle={{ fontWeight: "bold", color: "white" }}
        style={{ backgroundColor: "#64b4ff", borderRadius: 50, marginBottom: 20 }}
      />
      <Button
        LeftAccessory={(_props) => <Icon size={18} style={{ marginRight: 10 }} icon="google" />}
        text="Sign with Google"
        textStyle={{ fontWeight: "bold", color: "black" }}
        style={{ backgroundColor: "white", borderRadius: 50, marginBottom: 20, elevation: 2 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <View style={{ height: 2, backgroundColor: colors.palette.neutral300, width: "43%" }} />
        <Text style={{ color: colors.palette.neutral400 }}>or</Text>
        <View style={{ height: 2, backgroundColor: colors.palette.neutral300, width: "43%" }} />
      </View>
      {/* <Text testID="login-heading" tx="loginScreen.signIn" preset="heading" style={$signIn} />
      <Text tx="loginScreen.enterDetails" preset="subheading" style={$enterDetails} /> */}
      {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />}

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        placeholder="Enter your email"
        helper={error}
        status={error ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
        LeftAccessory={(_props) => (
          <MaterialIcons
            size={20}
            name="email"
            color={colors.palette.neutral400}
            style={{ alignSelf: "center", paddingLeft: 15 }}
          />
        )}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        placeholder="Enter your password"
        onSubmitEditing={login}
        RightAccessory={PasswordRightAccessory}
        LeftAccessory={(_props) => (
          <MaterialIcons
            size={20}
            name="lock"
            color={colors.palette.neutral400}
            style={{ alignSelf: "center", paddingLeft: 15 }}
          />
        )}
      />

      <View style={{marginBottom:20}}>
        <Toggle
          label="Remember password"
          checkboxIcon="check"
          labelStyle={{ fontWeight: "500", color: colors.palette.neutral700 }}
          value={checkboxChecked}
          onValueChange={(checked) => setCheckedBox(checked)}
          inputOuterStyle={{
            borderColor: checkboxChecked ? colors.tint : colors.palette.neutral300,
          }}
          inputDetailStyle={{ backgroundColor: colors.tint, borderRadius: 4 }}
        />
      </View>

      <Button
        testID="login-button"
        text="Login"
        style={$tapButton}
        preset="reversed"
        onPress={login}
      />

      <View style={{alignItems:'center', marginTop:20}}>
        <Text>
          Don't have an account?{' '}
          <Text style={{color: colors.tint}}>Sign up Now</Text>
        </Text>

        <Text style={{paddingVertical:15, color:colors.tint}}>Forgot Password?</Text>
      </View>

    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  // paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
}

// @demo remove-file
