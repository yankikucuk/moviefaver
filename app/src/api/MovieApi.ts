import * as env from "../env.ts";

function headers(memberId: string) {
  return { "Content-Type": "application/json", "X-MID": memberId || null };
}

export function init(memberId: string) {
  return fetch(`${env.apiPath}/init`, {
    headers: headers(memberId),
  });
}

export function search(key: string) {
  const path = `${env.apiPath}/movies/search?`;
  return fetch(path + new URLSearchParams({ key }));
}

export function getDetails(id: number) {
  return fetch(`${env.apiPath}/movies/${id}`);
}

export function addToFavs(memberId: string, movieId: number, comment: string) {
  return fetch(`${env.apiPath}/movies/${movieId}/favs`, {
    method: "POST",
    headers: headers(memberId),
    body: JSON.stringify({ comment }),
  });
}
