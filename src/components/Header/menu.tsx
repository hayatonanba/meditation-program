import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"  

const Menu = () => {
  return (
    <div>
        <Sheet>
            <SheetTrigger>Menu</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                    Coming Soon
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Menu;