import CountrySelector from "@/components/CountrySelector";
import LightRays from "@/components/LightRays";
import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
    const words1 = ["Global", "Live", "Accurate", "Trusted", "Real-Time"];

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Light Rays */}
            <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="absolute inset-0 z-0"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
            />

            {/* Navigation - Higher z-index for interactivity */}
            <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:px-8 lg:px-12">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center">
                        <span className="text-black font-bold text-lg">N</span>
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight">
                        NewsHub
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <CountrySelector className="relative z-50" />
                </div>
            </nav>

            {/* Hero Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
                <div className="max-w-5xl w-full text-center">
                    {/* Main Heading */}
                    <h1 className="font-bold leading-tight text-white mb-6">
                        <span className="block text-lg sm:text-xl md:text-2xl text-gray-400 font-normal mb-4">
                            Welcome to the future of news
                        </span>
                        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            Delivering
                            <span className="inline-block">
                                <FlipWords
                                    words={words1}
                                    className="w-[8ch]"
                                    textClassName="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
                                />
                            </span>
                        </span>
                        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">
                            Coverage, Every Day
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Stay informed with breaking news from around the world,
                        delivered in real-time
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105">
                            Explore News
                        </button>
                        <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
