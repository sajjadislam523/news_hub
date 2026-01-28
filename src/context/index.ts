import type { CountryContextType } from "@/types/types";
import { createContext } from "react";

export const CountryContext = createContext<CountryContextType | null>(null);
