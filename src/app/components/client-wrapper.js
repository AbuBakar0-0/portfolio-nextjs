"use client";

import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

export default function ClientWrapper({ children }) {
  return (
    <>
      <MouseTrail strokeColor="#FF8541" lag={0} lineWidthStart={10} />
      {children}
    </>
  );
}
