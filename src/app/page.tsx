import Link from "next/link";

async function ping() {
  const res = await fetch("/api/ping", { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await ping();

  return (
    <div className="container">
      <div className="card">
        <h1 style={{marginTop:0}}>🚀 Next.js Starter</h1>
        <p>Deployed on Vercel. API route check:</p>
        <pre className="mono">{JSON.stringify(data, null, 2)}</pre>

        <p>
          Edit <code className="mono">src/app/page.tsx</code> in GitHub and commit — Vercel redeploys automatically.
        </p>

        <p>
          Try the API route: <Link href="/api/ping">/api/ping</Link>
        </p>
      </div>
    </div>
  );
}
