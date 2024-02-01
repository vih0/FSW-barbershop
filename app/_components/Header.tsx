"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";

const Header = () => {
  const handleLoginClick = async () => {
    await signIn();
  };
  return (
    <Card>
      <CardContent className="px-5 py-8 flex justify-between flex-row">
        <Image src="/LogoBarber.svg" alt="FSW Baber" height={22} width={120} />
        {/* <Button variant="outline" size="icon" className="h-8 w-8">
                <HamburgerMenuIcon />
                </Button>    */}
        <Button onClick={handleLoginClick}>login</Button>
      </CardContent>
    </Card>
  );
};
export default Header;
