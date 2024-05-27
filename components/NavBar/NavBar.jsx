import { menuList } from "@/config";
import Menu from "./Menu";

function NavBar() {

    const menus = menuList.map( menu  => <Menu key={menu.name} {...menu}/> )

    return (
    <nav className="flex gap-4">
    {menus}
    </nav>

    )
}

export default NavBar;