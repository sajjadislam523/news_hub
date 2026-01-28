import { CountryContext } from "@/context";
import { useContext } from "react";

const useCountry = () => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error("useCountry must be used within a CountryProvider");
    }
    return context;
};

export default useCountry;
