import React, { ReactNode } from "react";
import { Aside } from "./Aside";
import { useRouter } from "next/router";
interface myProps {
  children?: ReactNode;
}

export const Layout = ({ children }: myProps): JSX.Element => {
  const route = useRouter();
  return (
    <>
      <main
        className={
          route.pathname == "/"
            ? "block"
            : route.pathname == "/login"
            ? "block"
            : route.pathname == "/registerRes"
            ? "block"
            : "flex bg-[#b7c2c9]"
        }>
        <div
          className={
            route.pathname == "/"
              ? "hidden"
              : route.pathname == "/login"
              ? "hidden"
              : route.pathname == "/registerRes"
              ? "hidden"
              : "basis-2/12 h-full"
          }>
          <Aside />
        </div>
        <div
          className={
            route.pathname == "/"
              ? "basis-12/12"
              : route.pathname == "/login"
              ? "basis-12/12"
              : route.pathname == "/registerRes"
              ? "basis-12/12"
              : "basis-10/12"
          }>
          {" "}
          {children}
        </div>
      </main>
    </>
  );
};
