import React, { useState } from "react";
import { Icons } from "@src/utils";
import {theme} from "antd";
interface DropdownProps {
  items: Array<DropdownItem>;
}

const { useToken } = theme;
export interface DropdownItem {
  label: string;
  subitems?: Array<DropdownItem>;
}

export const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const { token } = useToken();

  const toggleItem = (label: string) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === label ? null : label));
  };

  return (
    <>
      <div className="mt-3 flex flex-col gap-1 ">
        {items?.map((item, index) => (
          <div key={index}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.label);
              }}
            >
              <div className="flex justify-between h-9 items-center pl-2 pr-1 rounded-[10px] cursor-pointer" style={{backgroundColor: token.colorBgContainerDisabled}}>
                <p>{item.label}</p>
                <span>
                  {item?.subitems &&
                    (openItem === item.label ? (
                      <Icons.ChevronDown className="h-4 w-4" />
                    ) : (
                      <Icons.ChevronRight className="h-4 w-4" />
                    ))}
                </span>
              </div>
              {item.subitems && openItem === item.label && (
                <Dropdown items={item.subitems} />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
