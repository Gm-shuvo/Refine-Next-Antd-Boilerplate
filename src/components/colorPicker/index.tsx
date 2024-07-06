import { Col, Flex, InputNumber, Row, Space } from "antd";
import { FC, useMemo, useState } from "react";
import { ColorPicker, ColorPickerProps } from "antd";
import { extractRgb } from "@src/utils/helpers/extractRgb";

interface RgbColorPickerProps {
  defaultColor?: {
    r: number;
    g: number;
    b: number;
  };
}

export const RgbColorPicker: FC<RgbColorPickerProps> = ({
  defaultColor = { r: 22, g: 119, b: 255 },
}) => {
  // const defaultRgb = { r: 22, g: 119, b: 255 };
  const [colorRgb, setColorRgb] = useState<ColorPickerProps["value"]>(
    `rgb(${defaultColor.r}, ${defaultColor.g}, ${defaultColor.b})`
  );
  const [formatRgb, setFormatRgb] = useState<ColorPickerProps["format"]>("rgb");

  const [r, setR] = useState(defaultColor.r);
  const [g, setG] = useState(defaultColor.g);
  const [b, setB] = useState(defaultColor.b);

  const handleColorChange = (value: ColorPickerProps["value"]) => {
    console.log(value);
    const rgb = extractRgb(value as string);
    console.log(rgb);
    setR(rgb?.r || 0);
    setG(rgb?.g || 0);
    setB(rgb?.b || 0);
    setColorRgb(value);
  };

  // console.log(rgbString);
  // console.log(colorRgb);

  const handleRgbChange = (value: number, color: "r" | "g" | "b") => {
    if (color === "r") setR(value);
    if (color === "g") setG(value);
    if (color === "b") setB(value);

    setColorRgb(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <Flex style={{ gap: "2px" }}>
      <Space>
        <span>R: </span>
        <InputNumber
          min={0}
          max={255}
          value={r}
          onChange={(value: any) => handleRgbChange(value, "r")}
        />
        <span>G: </span>
        <InputNumber
          min={0}
          max={255}
          value={g}
          onChange={(value: any) => handleRgbChange(value, "g")}
        />
        <span>B: </span>
        <InputNumber
          min={0}
          max={255}
          value={b}
          onChange={(value: any) => handleRgbChange(value, "b")}
        />
      </Space>
      <ColorPicker
        format={formatRgb}
        value={colorRgb}
        onChange={(value) => handleColorChange(value.toRgbString())}
        onFormatChange={setFormatRgb}
      />
    </Flex>
  );
};
