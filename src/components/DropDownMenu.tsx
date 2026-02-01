import { useState } from "react"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi"

interface Props {
  name: string // initial button text
  options: string[] // list of dropdown items
  onSelect?: (value: string) => void // optional callback when selected
}

const DropDownMenu = ({ name, options, onSelect }: Props) => {
  const [selected, setSelected] = useState(name)

  const handleSelect = (value: string) => {
    setSelected(value)
    if (onSelect) onSelect(value) // call callback if provided
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selected}
      </MenuButton>
      <MenuList>
        {options.map((opt, idx) => (
          <MenuItem key={idx} onClick={() => handleSelect(opt)}>
            {opt}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default DropDownMenu
