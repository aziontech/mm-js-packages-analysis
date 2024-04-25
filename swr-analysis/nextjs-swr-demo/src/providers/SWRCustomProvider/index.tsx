"use client";
import { SWRConfig } from "swr";

export function SWRCustomProvider({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: any;
}) {
  return <SWRConfig value={{ fallback }}>{children}</SWRConfig>;
}
