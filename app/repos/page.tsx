"use client";
import Link from "next/link";
import { SearchBar } from "../components/Search";
import { useState, useEffect, useMemo } from "react";

const fetchRepos = async () => {
  const url = `https://api.github.com/users/JAYKALIA007/repos`;
  const data = await fetch(url, {
    next: {
      revalidate: 60, //seconds
    },
  });
  const repos = await data.json();
  return repos;
};
const ReposPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [repos, setRepos] = useState([]);

  const filteredRepos = repos.filter((repo: any) =>
    repo.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRepos();
      setRepos(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      {filteredRepos.map((repo: any) => (
        <Link
          href={`/repos/${repo.name}`}
          key={repo.id}
          className="text-sm border shadow-lg p-4 rounded-lg"
        >
          <div>{repo.name}</div>
          <div>{repo.description}</div>
        </Link>
      ))}
    </div>
  );
};

export default ReposPage;
