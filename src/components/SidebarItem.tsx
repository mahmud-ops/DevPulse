import { HStack } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface Props {
    url: string
    children: ReactNode
    isActive?: boolean

}

const SidebarItem = ({url,children,isActive}: Props) => {
  return (
    <Link to={url}>
        <HStack
        fontWeight={'bold'}
        color={isActive ? '#00cc99': ''}
         _hover={{
            color: '#00cc99',
            transition: "all 0.3s"
        }}>{children}</HStack>
    </Link>
  )
}

export default SidebarItem