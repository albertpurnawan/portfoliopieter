import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  return (
    <div className="grid grid-cols-2 hp:p-4 tablet:px-20 border-b-2 z-10">
      <div className="hp:text-lg tablet:text-2xl">
        <p>Hello Everyone</p>
      </div>
      <div className="flex flex-row hp:justify-between tablet:justify-evenly hp:text-xs tablet:text-xl hp:pt-2">
        <a href="#about">About me</a>
        <a href="#skill">My Skills</a>
        <a href="#reach">Reach Me</a>
      </div>
    </div>
  );
}
