import { Input } from "antd";

export const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
  return (
    <Input
      placeholder="Search here..."
      className="mb-4"
      onChange={(e) => {
        e.preventDefault();
        onSearch(e.target.value);
      }}
      allowClear
    />
  );
};