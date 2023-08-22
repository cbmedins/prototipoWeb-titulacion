"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/cardioBlue.png"
              alt="cardiovascularDisease logo"
              width="40"
              height="40"
              className="mr-2 rounded-sm"
            ></Image>
            
          </Link>
          <Link href="/" className="flex font-display text-2xl">
          <Image
              src="/UGLogo.png"
              alt="Universidad de Guayaquil logo"
              width="37"
              height="37"
              className="mr-2 rounded-sm"
            ></Image>
            </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded border bg-red-500 p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black border-b-4 border-pink-700 font-semibold"
                onClick={() => setShowSignInModal(true)}
              >
              Iniciar sesión
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}