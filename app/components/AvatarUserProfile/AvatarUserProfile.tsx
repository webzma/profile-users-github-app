import Image from "next/image";

interface AvatarUserProfileProps {
  userAvatar: string;
}

export function AvatarUserProfile({ userAvatar }: AvatarUserProfileProps) {
  return (
    <div className="p-3 bg-darkGray h-[170px] w-[170px] -translate-y-5 rounded-3xl">
      <Image
        src={userAvatar}
        alt="User Avatar"
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}
