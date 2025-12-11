import React from "react";

type TeamDetailsPageProps = {
  params: {
    name: string;
  };
};

const TeamDetailsPage = async ({ params }: TeamDetailsPageProps) => {
  const { name } = params;

  return (
    <div className="text-white text-5xl">
      {name}
    </div>
  );
};

export default TeamDetailsPage;
