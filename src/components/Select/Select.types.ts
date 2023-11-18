import { SelectItemProps as ItemProps } from "@radix-ui/react-select";

export interface SelectRadixProps extends ItemProps {
  children: React.ReactNode;
}

export interface SelectProps {
  items: SelectItemProps[];
  defaultItem?: string;
  placeholder: string;
  onSelect: (value: string) => void;
}

export interface SelectItemProps {
  id: string;
  name: string;
  value: string;
}
