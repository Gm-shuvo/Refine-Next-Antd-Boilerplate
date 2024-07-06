import { DownOutlined } from "@ant-design/icons";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity, useGetLocale } from "@refinedev/core";
import {
  Avatar,
  Button,
  Dropdown,
  Layout as AntdLayout,
  MenuProps,
  Space,
  Switch,
  theme,
  Typography,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ColorModeContext } from "../../contexts";

const { Text } = Typography;
const { useToken } = theme;

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

interface customThemeLayoutProps extends RefineThemedLayoutV2HeaderProps {
  sticky?: boolean;
  title?: string;
  icon?: React.ReactNode;
}

export const Header: React.FC<customThemeLayoutProps> = ({
  sticky,
  title,
  icon,
}) => {
  const { data: user } = useGetIdentity<IUser>();

  const { token } = useToken();
  const { mode, setMode } = useContext(ColorModeContext);

  console.log(mode);
  console.log(user);

  const locale = useGetLocale();
  const { locales } = useRouter();
  const currentLocale = locale();

  const menuItems: MenuProps["items"] = [...(locales || [])]
    .sort()
    .map((lang: string) => ({
      key: lang,
      icon: (
        <span style={{ marginRight: 8 }}>
          <Avatar size={16} src={`/images/flags/${lang}.svg`} />
        </span>
      ),
      label: (
        <Link href="/" locale={lang}>
          {lang === "en" ? "English" : "German"}
        </Link>
      ),
    }));

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  const rightElementsStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 10;
  }

  return (
    <AntdLayout.Header style={headerStyles} title="DML">
      <Space>
        <Link href="/" style={{ display: "flex", alignItems: "center" , gap:"6px"}}>
          {icon}
          <Text strong>{title}</Text>
        </Link>
      </Space>
      <Space style={rightElementsStyle}>
        <Dropdown
          menu={{
            items: menuItems,
            selectedKeys: currentLocale ? [currentLocale] : [],
          }}
        >
          <Button type="text">
            <Space>
              <Avatar size={16} src={`/images/flags/${currentLocale}.svg`} />
              {currentLocale === "en" ? "English" : "German"}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "light"}
        />
        {(user?.name || user?.avatar) && (
          <Space style={{ marginLeft: "8px" }} size="middle">
            {user?.avatar && <Avatar src={user.avatar} />}
            {user?.name && (
              <Text className="text-sm uppercase">{user.name}</Text>
            )}
          </Space>
        )}
      </Space>
    </AntdLayout.Header>
  );
};
