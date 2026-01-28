import { CountryContext } from "@/context";
import { useState } from "react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [country, setCountry] = useState("");
    const countryInfo = {
        country,
        setCountry,
    };
    return (
        <CountryContext.Provider value={countryInfo}>
            {children}
        </CountryContext.Provider>
    );
};
