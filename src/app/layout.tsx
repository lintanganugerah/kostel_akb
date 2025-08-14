import type {Metadata} from "next";
import {Lato, Raleway} from "next/font/google";
import "./globals.css";
import React from "react";

const fontLato = Lato({
    subsets: ['latin'],
    weight: ["100", "300", "400", "700", "900", "100", "300", "400", "700", "900"],
    variable: "--font-lato"
});

const fontRaleway = Raleway({
    subsets: ['latin'],
    weight: ["100", "300", "400", "700", "900", "100", "300", "400", "700", "900"],
    variable: "--font-raleway"
});

export const metadata: Metadata = {
    title: "Kostel",
    description: "Web App POS Kostel",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
            className={`${fontLato.className} ${fontLato.variable} ${fontRaleway.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
