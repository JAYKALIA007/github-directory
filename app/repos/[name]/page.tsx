import RepoDetails from "@/app/components/RepoDetails";
import RepoDirectoryInformation from "@/app/components/RepoDirectory";
import React from "react";

const RepoDetailsPage = ({
  params: { name },
}: {
  params: { name: string };
}) => {
  return (
    <div>
      <RepoDetails repoName={name} />
      <RepoDirectoryInformation repoName={name} />
    </div>
  );
};

export default RepoDetailsPage;
