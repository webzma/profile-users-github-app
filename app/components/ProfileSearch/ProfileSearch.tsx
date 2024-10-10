import { useState } from "react";
import { getUserProfile } from "@/app/services/getUserProfile";
import Image from "next/image";
import { UserFinded } from "@/types/types";

export function ProfileSearch({
  setUsername,
}: {
  setUsername: (username: string) => void;
}) {
  const [searchValue, setSearchValue] = useState("");
  const [userFinded, setUserFinded] = useState<UserFinded | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getData = async (username: string) => {
    const userProfile = await getUserProfile(username);
    setUserFinded(userProfile);
  };

  const handleClick = () => {
    if (userFinded?.login) {
      setUsername(userFinded.login);
    }
    setSearchValue("");
  };

  const handleSearchGetData = () => {
    getData(searchValue);
  };

  const handleSearchGetDataByEnter = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      getData(searchValue);
    }
  };

  return (
    <div className="h-auto mt-6">
      <div className="flex items-center bg-darkGray rounded-md focus-within:ring-2 focus-within:ring-brightBlue">
        <button
          className="h-14 p-4 stroke-[#4A5567] hover:stroke-white"
          onClick={handleSearchGetData}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
        <input
          value={searchValue}
          onKeyUp={(e) => {
            handleSearchGetDataByEnter(e);
          }}
          type="text"
          placeholder="webzma..."
          className="text-paleGray text-md font-medium bg-darkGray h-14 w-[500px] border-none focus-visible:border-none focus:outline-none"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {userFinded && searchValue !== "" && (
        <div className="bg-darkBlue p-4 rounded-lg mt-2 max-w-[600px]">
          <button
            onClick={handleClick}
            className="transition-all hover:bg-darkGray w-full rounded-xl p-2"
          >
            <article className="flex items-center gap-x-4">
              <div>
                <Image
                  src={userFinded?.avatar_url || "/default-avatar.png"}
                  width={80}
                  height={80}
                  alt="Image profile"
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col text-left ">
                <p className="font-semibold text-lg text-paleGray">
                  {userFinded?.name}
                </p>
                <p className="text-sm text-paleGray/80 text-balance">
                  {userFinded?.bio}
                </p>
              </div>
            </article>
          </button>
        </div>
      )}
    </div>
  );
}
