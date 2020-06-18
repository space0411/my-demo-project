import { AppLoading } from "expo";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppNavigation from "./navigation/AppNavigation";
import { Provider } from "mobx-react";
import SessionsStore from "./stores/SessionsStore";

import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en } from "./service/i18n/en";
import { vi } from "./service/i18n/vn";

i18n.locale = Localization.locale;
i18n.fallbacks = true;
i18n.translations = { vi, en };

export const LocalizationContext = React.createContext(null);

export default function App(props: any) {
  const [locale, setLocale] = React.useState(Localization.locale);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <LocalizationContext.Provider value={localizationContext}>
        <Provider SessionsStore={SessionsStore}>
          <SafeAreaView style={styles.container}>
            <AppNavigation />
          </SafeAreaView>
        </Provider>
      </LocalizationContext.Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/login-logo.png"),
      require("./assets/images/Smart-House-square.png"),
      require("./assets/images/info-banner.jpg"),
      require("./assets/images/icon-user-default.png"),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
