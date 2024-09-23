"use client";
import style from "@/app/components/Navbar/Navbar.module.css";
import { logoutHandler } from "@/utils/peticiones";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        logoutHandler(router);
      }}
      className={style.options}
    >
      v
    </button>
  );
}
