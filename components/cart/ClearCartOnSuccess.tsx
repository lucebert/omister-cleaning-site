"use client";

import { useEffect } from "react";
import { useCart } from "./CartContext";

export default function ClearCartOnSuccess() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  }, [clear]);

  return null;
}
