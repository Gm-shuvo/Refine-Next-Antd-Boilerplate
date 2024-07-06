import { Image, ImageProps } from "antd";
import React from "react";

export const AppIcon = (props: ImageProps) => {
  return (
    <Image
      preview={false}
      src="/logo.png"
      onError={(e) => {
        e.currentTarget.src = "/logo.png";
      }}
      {...props}
    />
  );
};
