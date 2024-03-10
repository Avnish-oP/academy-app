"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("sticky top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}//if navbar is not sticky then remove sticky class
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem active={active} setActive={setActive} item={"Home"}>
            <div>Home</div>
          </MenuItem>
          
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="md:grid-cols-2 text-sm grid grid-cols-1 gap-10 p-4 ml-16 max-w-sm lg:max-w-xl ">
            <ProductItem
              title="Class IX"
              href="/courses/class-ix"
              description="Prepare for tech interviews like never before."
              src="/images/algochurn.png"
            />
            <ProductItem
              title="Class X"
              href="https://tailwindmasterkit.com"
              description="Production ready Tailwind css components for your next project"
              src="/images/tailwind-master-kit.png"
            />
            <ProductItem
              title="Class XI"
              href="https://gomoonbeam.com"
              description="Never write from scratch again. Go from idea to blog in minutes."
              src="/images/moonbeam.png"
            />
            <ProductItem
              title="Class XII"
              href="https://userogue.com"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              src="/images/rogue.png"
            />
          </div>
        </MenuItem>
        <Link href={"/notes"}>
        <MenuItem setActive={setActive} active={active} item="Notes">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Class IX</HoveredLink>
            <HoveredLink href="/individual">Class X</HoveredLink>
            <HoveredLink href="/team">Class XI</HoveredLink>
            <HoveredLink href="/enterprise">Class XII</HoveredLink>
          </div>
        </MenuItem>
        </Link>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div>Contact Us </div>
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
