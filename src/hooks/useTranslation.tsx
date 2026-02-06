"use client";

import { createContext, useContext, useState, ReactNode } from "react";
// Import English directly as default
import en from "../../public/locales/en/translation.json";
import ru from "../../public/locales/ru/translation.json";
import uz from "../../public/locales/uz/translation.json";

const resources = {
    en,
    ru,
    uz,
};

type Language = "en" | "ru" | "uz";

interface I18nContextProps {
    t: (key: string) => string;
    i18n: {
        language: Language;
        changeLanguage: (lang: string) => void;
    };
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");

    const changeLanguage = (lang: string) => {
        if (resources[lang as Language]) {
            setLanguage(lang as Language);
        }
    };

    const t = (path: string): string => {
        const keys = path.split(".");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let current: any = resources[language];
        for (const key of keys) {
            if (current[key] === undefined) return path;
            current = current[key];
        }
        return typeof current === "string" ? current : path;
    };

    return (
        <I18nContext.Provider
            value={{
                t,
                i18n: {
                    language,
                    changeLanguage,
                },
            }}
        >
            {children}
        </I18nContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useTranslation must be used within an I18nProvider");
    }
    return context;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Trans = ({ i18nKey, children }: { i18nKey: string; children: ReactNode }) => {
    return <>{children}</>;
};
