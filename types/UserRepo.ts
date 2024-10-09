export type UserRepo = {
  id: number;
  name: string;
  description: string;
  license: {
    name: string;
  };
  forks_count: number;
  stargazers_count: number;
};
