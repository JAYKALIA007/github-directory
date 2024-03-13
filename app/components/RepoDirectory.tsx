import React from "react";
const fetchRepoDirectory = async (repoName: string) => {
  const url = `https://api.github.com/repos/JAYKALIA007/${repoName}/contents`;
  const data = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });
  const dirs = await data.json();
  return dirs;
};
const RepoDirectoryInformation = async ({ repoName }: { repoName: string }) => {
  const dirs = await fetchRepoDirectory(repoName);
  return (
    <div>
      {dirs?.map((dir: any, index: number) => (
        <div key={`${dir.name}-${index}`}>
          <a
            className="text-blue-800 underline text-sm"
            href={dir.html_url}
            target="_blank"
          >
            {dir.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default RepoDirectoryInformation;
