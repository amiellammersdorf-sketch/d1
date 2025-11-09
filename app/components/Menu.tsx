// app/components/Menu.tsx
"use client";

import { SECTIONS } from "../data/sections";

type Section = (typeof SECTIONS)[number];


type Props = {
  activeId: string;
  onSelect: (id: string) => void;
};

export default function Menu({ activeId, onSelect }: Props) {
  return (
    <nav className="p-4">
      <ul className="space-y-1 pl-0 list-none">
        {SECTIONS.map(({ id, label }: Section) => (
          <li key={id}>
            <button
              onClick={() => onSelect(id)}
              className={`w-full text-left text-[38px] leading-tight text-[#021695]
            transition outline-none focus:outline-none
            ${activeId === id ? "font-bold" : "hover:font-bold"}`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}