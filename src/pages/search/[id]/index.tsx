"use client";
import { Search } from "@/features/Search/components";
import { Header } from "@/layout/Header";
import React from "react";

export default function SearchPage() {
  return (
    <div>
      <Header />
      <Search></Search>
    </div>
  );
}
