"use client";
import { Recipe } from "@/features/Recipe/components";
import SearchAi from "@/features/SearchAi";
import { Header } from "@/layout/Header";
import React from "react";

export default function SearchAiPage() {
  return (
    <div>
        <Header></Header>
    <SearchAi></SearchAi>

    </div>
  );
}
