import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <HStack
      w={{
        base: "90%",
        md: "60%",
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <MdSearch color="gray" />
        </InputLeftElement>

        <Input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log(e.currentTarget.value);
            }
          }}
          
          type="text"
          placeholder="Search project"
          variant="filled"
        />
      </InputGroup>
    </HStack>
  );
};

export default SearchInput;
