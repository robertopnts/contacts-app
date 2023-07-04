import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-900 flex items-center justify-center">
      <div className="flex flex-col gap-6 rounded-md shadow-md container py-32 justify-center">
        <h1 className="text-3xl text-center font-bold">Contacts App</h1>
        <div className="flex flex-row items-center justify-center gap-2">
          <Link href="login">
            <button className="rounded bg-zinc-400 w-24 py-1 text-white hover:opacity-75">Login</button>
          </Link>
          <Link href="register">
            <button className="rounded bg-zinc-400 w-24 py-1 text-white hover:opacity-75">Register</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
