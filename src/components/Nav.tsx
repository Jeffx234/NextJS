import { Box, Flex } from "@chakra-ui/react"
import Link from "next/link"

const Nav = () => {
  return (
    <Box padding="10" height="60px" width="100vw" bg="lightgray" borderBottom="1px solid" borderColor="InfoBackground">
      <Flex align="center" justify="space-between" width="100%" height="100%">

        <Link href="/">
          <a> Note App </a>
        </Link>

        <Link href="/notes">
          <a> Notes </a>
        </Link>

        <Box color="black" fontSize="1rem" cursor="pointer">
          <a href={process.env.HELP_APP_URL}>
            Help
          </a>
        </Box>
      
      </Flex>
    </Box>
  )
}



export { Nav }