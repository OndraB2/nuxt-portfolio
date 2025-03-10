export function useGithub () {
  const config = useRuntimeConfig();
  const username = config.public.githubUser;
  const token = config.public.githubToken;
  const headers: HeadersInit = token ? { Authorization: `token ${token}` } : {};

  async function getRepositories() {
    const { data: repos, error } = await useFetch(`https://api.github.com/users/${username}/repos`, { headers });

    if (!repos.value) return [];

    return repos.value.map((repo: any) => {
      return {
        name: repo.name,
        link: repo.html_url,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
      };
    });
  }

  return {
    getRepositories,
  };
}
