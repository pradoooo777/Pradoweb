"use client";

import { useMemo, useState } from "react";
import { SearchForm } from "@/components/molecules/SearchForm/SearchForm";
import { HeritageGrid } from "@/components/organisms/HeritageGrid/HeritageGrid";
import { HeritageSite } from "@/data/heritage-sites";

export function HeritageExplorer({ sites }: { sites: HeritageSite[] }) {
  const [query, setQuery] = useState("");

  const filteredSites = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return sites;

    return sites.filter(
      (site) =>
        site.name.toLowerCase().includes(normalized) ||
        site.location.toLowerCase().includes(normalized) ||
        site.category.toLowerCase().includes(normalized) ||
        site.description.toLowerCase().includes(normalized) ||
        site.rarity.toLowerCase().includes(normalized)
    );
  }, [query, sites]);

  return (
    <>
      <SearchForm onSearch={setQuery} />
      <section id="sites" className="py-10 sm:py-14">
        <HeritageGrid sites={filteredSites} />
      </section>
    </>
  );
}
