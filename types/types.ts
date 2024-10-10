export interface User {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
}

export interface UserFinded {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
}

export interface UserRepo {
  id: number;
  name: string;
  description: string;
  license: {
    name: string;
  };
  forks_count: number;
  stargazers_count: number;
  html_url: string;
}
