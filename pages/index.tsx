import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authProvider } from "@src/providers";
import { HomeTemplate } from "@src/ui";

function HomePage() {
  return <HomeTemplate />;
}

export default HomePage;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);
  // const { authenticated, redirectTo } = await authProvider.check(context);
  // if (!authenticated) {
  //   return {
  //     props: {},
  //     redirect: {
  //       destination: redirectTo ?? "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      ...translateProps,
    },
  };
};

HomePage.noLayout = false;
