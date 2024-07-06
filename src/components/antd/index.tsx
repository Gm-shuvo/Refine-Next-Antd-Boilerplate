import {
  Popconfirm,
  Popover,
  Modal,
  ModalProps,
} from "antd";

export const ModalComponent = (props: ModalProps) => {
  const { ...restProps } = props;

  return <Modal footer={null} closable={true} {...restProps} />;
};

export const PopoverComponent = Popover;

export const PopconfirmComponent = Popconfirm;

