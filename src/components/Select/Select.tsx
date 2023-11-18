import * as SelectRadix from "@radix-ui/react-select";
import {
  CaretRight,
  CaretUp,
  CaretDown,
  CaretLeft,
} from "@phosphor-icons/react";
import { forwardRef } from "react";
import { SelectProps, SelectRadixProps } from "./Select.types";

const SelectItem = forwardRef<HTMLDivElement, SelectRadixProps>(function (
  { children, ...props }: SelectRadixProps,
  ref
) {
  return (
    <SelectRadix.Item
      ref={ref}
      {...props}
      textValue="adwad"
      className="relative flex h-6 cursor-pointer select-none items-center rounded-[3px] pl-6 pr-9 text-sm font-medium leading-none hover:bg-slate-300/30 hover:text-violet-900"
    >
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      <SelectRadix.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CaretRight className="text-violet-900" weight="bold" size={14} />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  );
});

SelectItem.displayName = "SelectItem";

function Select(props: SelectProps) {
  const renderItems = () =>
    props.items.map((item) => (
      <SelectItem key={item.id} textValue="none" value={item.value}>
        {item.name}
      </SelectItem>
    ));

  return (
    <SelectRadix.Root
      value={props.defaultItem}
      onValueChange={props.onSelect}
      defaultValue={props.defaultItem}
    >
      <SelectRadix.Trigger
        className="inline-flex h-9 items-center justify-center gap-1 rounded bg-white px-4 text-sm font-medium leading-none text-violet-900  shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-sm"
        aria-label="Food"
      >
        <SelectRadix.Value placeholder={props.placeholder} />
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content
          hideWhenDetached
          className="overflow-hidden rounded-md bg-white shadow-sm"
        >
          <SelectRadix.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-white">
            <CaretUp className="text-violet-900" weight="bold" size={14} />
          </SelectRadix.ScrollUpButton>

          <SelectRadix.Viewport className="p-[5px]">
            <SelectRadix.Group>{renderItems()}</SelectRadix.Group>
          </SelectRadix.Viewport>

          <SelectRadix.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-white">
            <CaretDown className="text-violet-900" weight="bold" size={14} />
          </SelectRadix.ScrollDownButton>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}

export default Select;
