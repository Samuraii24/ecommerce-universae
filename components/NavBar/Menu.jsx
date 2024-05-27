'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";



const Menu = ({href, name}) => {

    const pathName = usePathname();

    const isActive = pathName === href;

    return (
        <Link className={`${isActive && " bg-red-200"}`} href={href}>
             {name} 
        </Link>
    );
}

export default Menu;
