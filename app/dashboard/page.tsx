"use client";

import Card from "@/components/home/card-form";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link"
import { nFormatter } from "@/lib/utils";
import ContactForm from "@/components/formulario/ContactForm";
import Cardform from "@/components/home/card-form";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { LayoutDashboard, LogOut } from "lucide-react";
import Popover from "@/components/shared/popover";
import { Session } from "next-auth";
export default function card({ session }: { session: Session }) {
  const { email, image } = session?.user || {};
  const [openPopover, setOpenPopover] = useState(false);

  if (!email) return null;

  console.log('Contenido de session:', email); // Agrega este log


}



