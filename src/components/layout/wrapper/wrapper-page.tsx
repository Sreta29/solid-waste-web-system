"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSessionStorage } from "usehooks-ts";

import Loader from "./loader";

interface WrapperPageProps {
  navbar?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
export default function WrapperPage({
  children,
  navbar,
  footer,
}: WrapperPageProps) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [LoaderStatus, setLoaderStatus] = useSessionStorage("firstload", false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted && !LoaderStatus) {
      setTimeout(() => {
        setLoaderStatus(true);
      }, 2000);
    }

    setCurrentTheme(theme);
  }, [isMounted, LoaderStatus, setLoaderStatus, theme]);

  if (!isMounted || !LoaderStatus) {
    return <Loader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.75, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.75, ease: "easeInOut" },
      }}
      className="h-full flex p-2 gap-2"
    >
      {navbar && navbar}
      <motion.div
        key={`${pathname}-${currentTheme}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className={`h-full rounded-md border-[#0071D1] border-2 w-full`}
      >
        <main
          className={`
                h-full
                space-y-4
                overflow-auto
                p-2
                `}
        >
          <h1 className="px-5 pt-5 text-2xl uppercase font-bold">
            {pathname.replace("/", "")}
          </h1>
          {children}
        </main>
      </motion.div>
      {footer && footer}
    </motion.div>
  );
}
