"use client"

import Link from "next/link"

export default function Dashboard () {
  return (
    <main className="flex flex-col h-screen bg-cyan-900 flex items-center justify-center">
      <header className="w-screen flex bg-slate-100 fixed top-0  shadow-md">
        <div className="container justify-between mx-auto px-2 flex py-1">
          <h2 className="text-lg font-bold">user</h2>
          <button onClick={() => console.log("click")} className="rounded bg-zinc-400 p-1 text-white hover:opacity-75">Adicionar Contato</button>
        </div>
      </header>
      <div className="flex flex-col rounded-md shadow-md container h-full mt-12">
        <div className="flex flex-col h-full rounded-md bg-slate-100  border-zinc-300 items-center gap-2 py-3">
          <ul className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
            <Link href="contact" className="w-[320px] flex flex-col border-black border">
              <div className="flex flex-col px-2">
                <span className="text-lg font-bold">Roberto</span>
                <span>roberto@pontes.com</span>
                <span>(96) 98119-2497</span>
              </div>
            </Link>
            <li className="w-[320px] bg-slate-600 h-12"></li>
            <li className="w-[320px] bg-slate-600 h-12"></li>
          </ul>
        </div>
      </div>
    </main>
  )
}