import {
  CheckCircleOutlined,
  MinusCircleOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Tag, TagProps } from "antd";

export const StatusTag: React.FC<{ status: any }> = ({ status }) => {
  let icon: React.ReactNode = null;
  let color: TagProps["color"] = undefined;

  switch (status) {
    case "Active":
      icon = <PlayCircleOutlined />;
      color = "cyan";
      break;
    case "Inactive":
      icon = <PlayCircleOutlined />;
      color = "red";
      break;
    case "QUALIFIED":
    case "NEGOTIATION":
      icon = <PlayCircleFilled />;
      color = "green";
      break;
    case "LOST":
      icon = <PlayCircleFilled />;
      color = "red";
      break;
    case "WON":
      icon = <CheckCircleOutlined />;
      color = "green";
      break;
    case "CHURNED":
      icon = <MinusCircleOutlined />;
      color = "red";
      break;

    default:
      break;
  }

  return (
    <Tag color={color} style={{ textTransform: "capitalize" }}>
      {icon} {status.toLowerCase()}
    </Tag>
  );
};
