import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useCountry from "@/hooks/useCountry";
import { Globe } from "lucide-react";

const CountrySelector = ({ className = "" }: { className?: string }) => {
    const { country, setCountry } = useCountry();

    const countries = [
        { code: "ae", name: "United Arab Emirates", flag: "🇦🇪" },
        { code: "ar", name: "Argentina", flag: "🇦🇷" },
        { code: "at", name: "Austria", flag: "🇦🇹" },
        { code: "au", name: "Australia", flag: "🇦🇺" },
        { code: "be", name: "Belgium", flag: "🇧🇪" },
        { code: "bg", name: "Bulgaria", flag: "🇧🇬" },
        { code: "br", name: "Brazil", flag: "🇧🇷" },
        { code: "ca", name: "Canada", flag: "🇨🇦" },
        { code: "ch", name: "Switzerland", flag: "🇨🇭" },
        { code: "cn", name: "China", flag: "🇨🇳" },
        { code: "co", name: "Colombia", flag: "🇨🇴" },
        { code: "cu", name: "Cuba", flag: "🇨🇺" },
        { code: "cz", name: "Czech Republic", flag: "🇨🇿" },
        { code: "de", name: "Germany", flag: "🇩🇪" },
        { code: "eg", name: "Egypt", flag: "🇪🇬" },
        { code: "fr", name: "France", flag: "🇫🇷" },
        { code: "gb", name: "United Kingdom", flag: "🇬🇧" },
        { code: "gr", name: "Greece", flag: "🇬🇷" },
        { code: "hk", name: "Hong Kong", flag: "🇭🇰" },
        { code: "hu", name: "Hungary", flag: "🇭🇺" },
        { code: "id", name: "Indonesia", flag: "🇮🇩" },
        { code: "ie", name: "Ireland", flag: "🇮🇪" },
        { code: "il", name: "Israel", flag: "🇮🇱" },
        { code: "it", name: "Italy", flag: "🇮🇹" },
        { code: "jp", name: "Japan", flag: "🇯🇵" },
        { code: "kr", name: "South Korea", flag: "🇰🇷" },
        { code: "lt", name: "Lithuania", flag: "🇱🇹" },
        { code: "lv", name: "Latvia", flag: "🇱🇻" },
        { code: "ma", name: "Morocco", flag: "🇲🇦" },
        { code: "mx", name: "Mexico", flag: "🇲🇽" },
        { code: "my", name: "Malaysia", flag: "🇲🇾" },
        { code: "nl", name: "Netherlands", flag: "🇳🇱" },
        { code: "no", name: "Norway", flag: "🇳🇴" },
        { code: "nz", name: "New Zealand", flag: "🇳🇿" },
        { code: "ph", name: "Philippines", flag: "🇵🇭" },
        { code: "pl", name: "Poland", flag: "🇵🇱" },
        { code: "pt", name: "Portugal", flag: "🇵🇹" },
        { code: "ro", name: "Romania", flag: "🇷🇴" },
        { code: "rs", name: "Serbia", flag: "🇷🇸" },
        { code: "ru", name: "Russia", flag: "🇷🇺" },
        { code: "se", name: "Sweden", flag: "🇸🇪" },
        { code: "sg", name: "Singapore", flag: "🇸🇬" },
        { code: "si", name: "Slovenia", flag: "🇸🇮" },
        { code: "sk", name: "Slovakia", flag: "🇸🇰" },
        { code: "th", name: "Thailand", flag: "🇹🇭" },
        { code: "tr", name: "Turkey", flag: "🇹🇷" },
        { code: "tw", name: "Taiwan", flag: "🇹🇼" },
        { code: "ua", name: "Ukraine", flag: "🇺🇦" },
        { code: "us", name: "United States", flag: "🇺🇸" },
        { code: "ve", name: "Venezuela", flag: "🇻🇪" },
        { code: "za", name: "South Africa", flag: "🇿🇦" },
    ];

    const selectedCountry = countries.find((c) => c.code === country);

    return (
        <div className={className}>
            <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="w-50 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <SelectValue placeholder="Select Country">
                            {selectedCountry && (
                                <span className="flex items-center gap-2">
                                    <span>{selectedCountry.flag}</span>
                                    <span className="hidden sm:inline">
                                        {selectedCountry.name}
                                    </span>
                                </span>
                            )}
                        </SelectValue>
                    </div>
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-white/20 text-white backdrop-blur-xl max-h-75">
                    <SelectGroup>
                        <SelectLabel className="text-gray-400 font-semibold">
                            Select Your Region
                        </SelectLabel>
                        {countries.map((country) => (
                            <SelectItem
                                value={country.code}
                                key={country.code}
                                className="cursor-pointer text-white! hover:bg-white/10! focus:bg-white/10! focus:text-white! data-highlighted:bg-white/10! data-highlighted:text-white!"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">
                                        {country.flag}
                                    </span>
                                    <span>{country.name}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default CountrySelector;
