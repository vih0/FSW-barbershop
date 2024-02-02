import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import SideMenu from "./SideMenu";

const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-8 flex justify-between flex-row">
        <Image src="/LogoBarber.svg" alt="FSW Baber" height={22} width={120} />
        <Sheet>
          <SheetTrigger>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};
export default Header;
