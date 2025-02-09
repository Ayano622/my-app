"use client";
import { Sidebar } from "../components/Sidebar";
import { MenuCard } from "../components/MenuCard";
import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="">
        <div style={{ display: "flex" }}>
          <Sidebar></Sidebar>
          <div style={{ display: "flex", paddingRight: '140px' }}>
            <MenuCard id={1} name="cake1" image="image1"></MenuCard>
            <MenuCard id={2} name="cake2" image="image1"></MenuCard>
            <MenuCard id={3} name="cake3" image="image1"></MenuCard>
            <MenuCard id={3} name="cake3" image="image1"></MenuCard>
          </div>
        </div>
      </div>
    </div>
  );
}
