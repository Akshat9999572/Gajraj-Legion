declare module "cloudflare:workers" {
  export const env: { DB?: unknown };
}

interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

interface D1Database {}
