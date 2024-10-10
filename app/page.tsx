"use client";

import { Header } from "./components/Header";
import { ProfileSearch } from "./components/ProfileSearch";
import { MainUserInfo } from "./components/MainUserInfo/MainUserInfo";
import { getUserProfile } from "./services/getUserProfile";
import { UserRepositoriesWrapper } from "./components/UserRepositoriesWrapper";
import { getReposUserProfile } from "./services/getReposUserProfile";
import { RepoCard } from "./components/RepoCard";
import { User } from "../types/types";

import { useEffect, useState } from "react";
import { UserRepo } from "@/types/types";

export default function Home() {
  const [user, setUser] = useState<User>();
  const [userRepositories, setUserRepositories] = useState<UserRepo[]>([]);
  const [username, setUsername] = useState("webzma");
  const [reposLimit, setReposLimit] = useState(true);

  useEffect(() => {
    async function getData(username: string) {
      const userProfile = await getUserProfile(username);
      const userRepos = await getReposUserProfile(username);

      if (userProfile !== user) {
        setUser(userProfile);
        setUserRepositories(userRepos);
      }
    }

    getData(username);
  }, [username]);

  // Hacer algo bonito al cargar los datos, un loading o algo creativo
  if (!user) return <div>Loading...</div>;

  return (
    <main>
      <Header>
        <ProfileSearch setUsername={setUsername} />
      </Header>

      <div className="flex">
        <MainUserInfo user={user} />
      </div>

      <UserRepositoriesWrapper>
        {userRepositories
          .slice(0, reposLimit ? 4 : userRepositories.length)
          .map((repo: UserRepo) => (
            <RepoCard
              id={repo.id}
              key={repo.id}
              name={repo.name}
              description={repo.description}
              license={repo.license}
              forks_count={repo.forks_count}
              stargazers_count={repo.stargazers_count}
            />
          ))}
      </UserRepositoriesWrapper>
      <button
        onClick={() => setReposLimit(!reposLimit)}
        className="m-auto block text-center my-8 text-bold text-lg hover:underline cursor-pointer text-paleGray"
      >
        View {reposLimit ? "all" : "fewer"} repositories
      </button>
    </main>
  );
}
