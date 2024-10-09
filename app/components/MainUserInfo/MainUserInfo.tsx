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
      <div className="flex w-full">
        <div>
          <AvatarUserProfile userAvatar={user.avatar_url} />
        </div>
        <div className="flex items-center gap-x-4 w-full ml-10">
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
