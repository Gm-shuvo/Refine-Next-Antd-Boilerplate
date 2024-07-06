import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authProvider } from "@src/providers";
import { LoginForm } from "@components/loginForm";
import logger from "@utils/logger";

export default function Login() {
  return <LoginForm />;
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);
  // console.log("authenticated", authenticated);
  logger.info({
    message: "authenticated",
    stack: authenticated,
  });

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (authenticated) {
    return {
      props: {
        ...translateProps,
      },
      redirect: {
        destination: redirectTo ?? "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};
