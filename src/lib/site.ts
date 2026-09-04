export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pradoooo777.github.io/Pradoweb";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_PAGES === "true" && repoName ? `/${repoName}` : "");

export function assetPath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  if (BASE_PATH && path.startsWith(`${BASE_PATH}/`)) {
    return path;
  }

  return `${BASE_PATH}${path}`;
}

export const PROJECT_TITLE = "Pangasinan Heritage Digital Showcase";
export const STUDENT_NAME = "John Recto Prado";
