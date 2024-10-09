export const getReposUserProfile = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  return data;
};
