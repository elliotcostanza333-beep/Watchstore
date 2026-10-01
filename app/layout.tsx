import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"Watchstore — Montres authentiques",description:"Une sélection de montres pour homme, femme et junior."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}