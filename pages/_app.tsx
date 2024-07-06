import { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import type { NextPage } from "next";

// Ant Design and Refine imports
import { Refine, AuthBindings } from "@refinedev/core";
import {
  ThemedLayoutV2,
  ThemedSiderV2,
  ThemedTitleV2,
  useNotificationProvider,
} from "@refinedev/antd";
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router/pages";

// Contexts, providers, and utils
import { ColorModeContextProvider } from "@contexts";
import dataProvider from "@src/providers/dataProvider";
// Component imports
import { Header } from "@components/header";
import { AppIcon } from "src/components/app-icon";

// Styles
import "@refinedev/antd/dist/reset.css";
import "@styles/global.css";

import { authProvider } from "@src/providers/authProvider";

import { resourcesProvider } from "@src/providers/resourcesProvider";
import { CustomThemedSiderV2 } from "@src/components/customThemeSiderV2";
import { customTitleHandler } from "@utils/helpers";

const API_URL = process.env.NEXT_PUBLIC_API_URL! as string;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const { t, i18n } = useTranslation();

  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <ThemedLayoutV2
        dashboard={false}
        Header={() => <Header sticky />}
        Sider={(props) => <CustomThemedSiderV2 {...props} />}
        Title={({ collapsed }) => (
          <ThemedTitleV2
            collapsed={collapsed}
            text="Going2Book"
            icon={<AppIcon />}
          />
        )}
      >
        <Component {...pageProps} />
      </ThemedLayoutV2>
    );
  };

  const i18nProvider = {
    translate: (key: any, params: any) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <>
      <ColorModeContextProvider>
        <Refine
          key={"going2book"}
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          authProvider={authProvider as AuthBindings}
          notificationProvider={useNotificationProvider}
          i18nProvider={i18nProvider as any}
          resources={resourcesProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
            useNewQueryKeys: true,
          }}
        >
          {renderComponent()}

          <DocumentTitleHandler handler={customTitleHandler} />
          <UnsavedChangesNotifier />
        </Refine>
      </ColorModeContextProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
