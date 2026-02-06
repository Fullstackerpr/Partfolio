"use client";

import { ReactNode, Suspense } from "react";
import { I18nProvider } from "../hooks/useTranslation";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <Suspense fallback={<div className="h-screen w-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
            <I18nProvider>
                {children}
            </I18nProvider>
        </Suspense>
    );
}
