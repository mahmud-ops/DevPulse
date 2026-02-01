import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <HStack
      w={{
        base: "90%",
        md: "40%",
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <MdSearch color="gray" />
        </InputLeftElement>

        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Search project"
          variant="filled"
        />
      </InputGroup>
    </HStack>
  );
};

export default SearchInput;
