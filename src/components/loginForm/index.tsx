import { LoginFormTypes } from "@refinedev/core";

import {
  Row,
  Col,
  Layout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  theme,
} from "antd";

import { useLogin, useTranslate } from "@refinedev/core";
import { FC } from "react";
import {
  bodyStyles,
  headStyles,
  layoutStyles,
  titleStyles,
  containerStyles,
} from "./styles";
import { ThemedTitleV2 } from "@refinedev/antd";
import { AppIcon } from "@components/app-icon";

const { Text, Title } = Typography;
const { useToken } = theme;


export const LoginForm: FC<any> = ({}) => {
  const translate = useTranslate();
  const { mutate: login, isLoading } = useLogin();
  const { token } = useToken();
  const [form] = Form.useForm<LoginFormTypes>();

  //pageTitle
  const PageTitle = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px",
      }}
    >
      {
        <ThemedTitleV2
          collapsed={false}
          wrapperStyles={{ display: "flex", alignItems: "center" }}
          text="Portal Administration"
          icon={<AppIcon />}
        />
      }
    </div>
  );

  //cardTitle
  const CardTitle = (
    <Title
      level={3}
      style={{
        color: token.colorPrimaryTextHover,
        ...titleStyles,
      }}
    >
      {translate("pages.login.title", "Sign in to your account")}
    </Title>
  );

  // cardContent
  const CardContent = (
    <Card
      title={CardTitle}
      style={{
        ...containerStyles,
        ...headStyles,
        ...bodyStyles,
        backgroundColor: token.colorBgElevated,
      }}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={(values) => login(values)}
        requiredMark={false}
        initialValues={{ remember: false }}
      >
        <Form.Item
          name="username"
          label={translate("pages.login.username", "Username")}
          rules={[
            {
              required: true,
              message: translate(
                "pages.login.username.required",
                "Please enter your username!"
              ),
            },
          ]}
        >
          <Input
            size="large"
            placeholder={translate(
              "pages.login.username.placeholder",
              "Username"
            )}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={translate("pages.login.fields.password", "Password")}
          rules={[{ required: true }]}
        >
          <Input
            type="password"
            autoComplete="current-password"
            placeholder="●●●●●●●●"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={isLoading}
            block
            style={{ backgroundColor: token.colorPrimary }}
          >
            {translate("pages.login.signin", "Sign in")}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
  return (
    <Layout style={layoutStyles}>
      <Row
        justify="center"
        align={"middle"}
        style={{
          padding: "16px 0",
          minHeight: "100dvh",
          paddingTop: "16px",
        }}
      >
        <Col xs={22}>
          <>
            {PageTitle}
            {CardContent}
          </>
        </Col>
      </Row>
    </Layout>
  );
};
