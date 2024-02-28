import Link from "next/link";

const fetchRepoDetails = async (repoName: string) => {
  const url = "https://api.github.com/repos/JAYKALIA007/" + repoName;
  const data = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });
  const repoDetails = await data.json();
  return repoDetails;
};
const RepoDetails = async ({ repoName }: { repoName: string }) => {
  const repoDetails = await fetchRepoDetails(repoName);
  return (
    <div>
      <Link className="hover:underline text-sm" href="/repos">
        Back to repos
      </Link>
      {/* <pre className="">{JSON.stringify(repoDetails, undefined, 2)}</pre> */}
      <p>{repoDetails.name}</p>
      <p>{repoDetails.full_name}</p>
      <p>{repoDetails.description}</p>
    </div>
  );
};

export default RepoDetails;
