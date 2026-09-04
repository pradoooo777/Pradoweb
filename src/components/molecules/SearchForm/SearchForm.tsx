"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { Icon } from "@/components/atoms/Icon/Icon";

export interface SearchFormProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  initialQuery?: string;
}

export function SearchForm({
  onSearch,
  placeholder = "Find a quest stage in Pangasinan...",
  initialQuery = "",
}: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search heritage sites"
      className="flex w-full flex-col gap-3 rounded-2xl border-4 border-black bg-arcade-panel/90 p-3 shadow-arcade sm:flex-row sm:items-center"
    >
      <div className="relative flex-1">
        <label htmlFor="heritage-search" className="sr-only">
          Search heritage sites
        </label>
        <Icon
          name="search"
          size={18}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-arcade-cyan"
        />
        <input
          id="heritage-search"
          type="search"
          value={query}
          onChange={(event) => {
            const nextQuery = event.target.value;
            setQuery(nextQuery);
            onSearch?.(nextQuery);
          }}
          placeholder={placeholder}
          className="min-h-11 w-full rounded-xl border-4 border-black bg-arcade-navy py-2 pl-10 pr-4 text-base font-semibold text-white placeholder:text-cyan-100 focus:border-arcade-cyan focus:outline-none focus:ring-2 focus:ring-arcade-cyan/40"
        />
      </div>
      <Button type="submit" size="md" className="sm:min-w-[140px]">
        Scan Map
      </Button>
    </form>
  );
}
