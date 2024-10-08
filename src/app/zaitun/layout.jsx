import Link from "next/link"
import {
  Navbar as NextUINavbar,
  NavbarBrand,
} from "@nextui-org/navbar";

const Zaitun = ({children}) => {
  return (
    <>
      <NextUINavbar isBlurred={false} className="shadow-md">
        <NavbarBrand>
          <div className="flex gap-2 items-center justify-center">
            <div className="size-8 bg-neutral-400 rounded" />
            <h1 className="font-heading text-xl font-bold">ZAITUN</h1>
          </div>
        </NavbarBrand>
      </NextUINavbar>
      {children}
    </>
  )
}

export default Zaitun