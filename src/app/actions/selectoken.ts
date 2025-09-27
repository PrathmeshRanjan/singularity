// src/app/(wallet)/select-token/actions.ts

export async function fetchTokens(chainId: string) {
  const res = await fetch(`/api/tokens?chainId=${chainId}`);
  if (!res.ok) throw new Error('Failed to fetch tokens');
  return res.json();
}
