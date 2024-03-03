import { Avatar } from "@nextui-org/react";
import React from "react";

export const Friends: React.FC = () => {
    return(
        <main className="w-screen mt-[10vh] min-h-[90vh] flex">
            <aside className="min-h-full flex flex-col gap-1 py-4 w-80 bg-purple-700">
                <div className="w-full h-20 flex items-center px-4 gap-3 bg-zinc-800">
                    <Avatar />
                    <div>
                        <h1 className="text-white font-bold">Mario Games</h1>
                        <p className="text-xs text-zinc-500">You: Go Fuck yourself</p>
                    </div>
                </div>

                <div className="w-full h-20 flex items-center px-4 gap-3 bg-zinc-800">
                    <Avatar />
                    <div>
                        <h1 className="text-white font-bold">Mario Games</h1>
                        <p className="text-xs text-zinc-500">You: Go Fuck yourself</p>
                    </div>
                </div>

                <div className="w-full h-20 flex items-center px-4 gap-3 bg-zinc-800">
                    <Avatar />
                    <div>
                        <h1 className="text-white font-bold">Mario Games</h1>
                        <p className="text-xs text-zinc-500">You: Go Fuck yourself</p>
                    </div>
                </div>

                <div className="w-full h-20 flex items-center px-4 gap-3 bg-zinc-800">
                    <Avatar />
                    <div>
                        <h1 className="text-white font-bold">Mario Games</h1>
                        <p className="text-xs text-zinc-500">You: Go Fuck yourself</p>
                    </div>
                </div>
            </aside>
            <section className="w-full min-h-full bg-cyan-950 p-20">
                
            </section>
        </main>
    )
}