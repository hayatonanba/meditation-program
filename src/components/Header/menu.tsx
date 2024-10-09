import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"  
import { Binoculars, FlameKindling, Mail, MenuIcon, MoonStar, Mountain, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger className="max-sm:hidden">Menu</SheetTrigger>
            <SheetTrigger className="sm:hidden"><MenuIcon /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                    <ul className="w-[50%] text-2xl">
                      <li className="py-5"><Link to ="/aboutfield" className="flex gap-4"><Binoculars />田園</Link></li>
                      <li className="py-5"><Link to ="/aboutfire" className="flex gap-4"><FlameKindling />焚き火</Link></li>
                      <li className="py-5"><Link to ="/aboutforest" className="flex gap-4"><Mountain />森林</Link></li>
                      <li className="py-5"><Link to ="/aboutocean" className="flex gap-4"><Waves />浜辺</Link></li>
                      <li className="py-5"><Link to ="/aboutstar" className="flex gap-4"><MoonStar />星空</Link></li>
                      <li className="py-5"><Link to ="/aboutstar" className="flex text-xl gap-4"><Mail />お問い合わせ</Link></li>
                    </ul>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Menu;