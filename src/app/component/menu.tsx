import { TiThMenu } from "react-icons/ti";

import {
    Sheet,
    SheetContent,
    SheetTrigger,

} from "@/components/ui/sheet"

import Link from "next/link"
import { FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SheetDemo() {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <TiThMenu className="text-gray-500 hover:text-gray-700 text-2xl duration-300" />
                </SheetTrigger>
                <SheetContent className="w-40% h-20 shadow-md backdrop-blur transition-colors border-black bg-black">
                    <Link className="flex title-font font-bold items-center justify-center text-gray-500 md:mb-0 hover:text-gray-300 duration-300" href={"/"}>
                        <Image
                            src={require("../../../public/Assests/navbar-logo.png")}
                            alt="Muhammad Ahmed"
                            width={100}
                            height={100}
                            className="w-[50px] rounded-full"
                        />

                        <span className="ml-3 text-lg font-abc">Muhammad Ahmed</span>
                    </Link>
                    <div className="grid grid-row-4 gap-5 items-center text-base font-abc font-extrabold pt-12 text-gray-500 duration-300">
                        <Link href={"/"} className="mr-5 hover:text-gray-300 duration-300 ">
                            Home
                        </Link>
                        <Link href={"#about"} className="mr-5 hover:text-gray-300 duration-300">
                            About Me
                        </Link>
                        <Link href={"#Project"} className="mr-5 hover:text-gray-300  duration-300">
                            Projects
                        </Link>
                        <Link href={"#skills"} className="mr-5 hover:text-gray-300  duration-300">
                            Skills
                        </Link>
                        <Link href={"#contact"} className="mr-5 hover:text-gray-300  duration-300">
                            Contact Us
                        </Link>
                        <Link href="/Assests/My-CV.pdf" target="_blank">
                            <Button className="bg-gray-500 text-black hover:bg-gray-500 hover:text-gray-200">
                                Download CV
                                <FaDownload className="text-xl ml-2" />
                            </Button>
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
