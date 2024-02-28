import Link from "next/link";

const fetchRepos = async () => {
  const url = `https://api.github.com/users/JAYKALIA007/repos`;
  const data = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });
  const repos = await data.json();
  return repos;
};
const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div className="flex flex-col gap-2">
      {repos.map((repo: any) => (
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
