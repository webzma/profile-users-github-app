import { AvatarUserProfile } from "../AvatarUserProfile";
import { InfoUserBadge } from "../InfoUserBadge/InfoUserBadge";

interface User {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  location: string;
}

export function MainUserInfo({ user }: { user: User }) {
  return (
    <div className="w-3/4 m-auto">
      <div className="flex flex-col lg:flex-row first-letter: w-full">
        <div>
          <AvatarUserProfile userAvatar={user.avatar_url} />
        </div>
        <div className="flex flex-col gap-4 w-full mb-8 lg:mb-0 lg:ml-10 lg:flex-row lg:items-center max-w-[400px] lg:max-w-0">
          <InfoUserBadge label="Followers" value={user.followers} />
          <InfoUserBadge label="Following" value={user.following} />
          <InfoUserBadge label="Location" value={user.location} />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-2 text-paleGray">{user.name}</h2>
        <p className="text-paleGray">{user.bio}</p>
      </div>
    </div>
  );
}
