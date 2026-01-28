import HeroSection from "@/components/HeroSection";
import NewsContainer from "@/components/NewsContainer";

function App() {
    return (
        <div className="mx-auto flex flex-col gap-5 m-h-screen w-full">
            <div className="relative w-full">
                <HeroSection />
            </div>

            <div className="relative w-full bg-background">
                <NewsContainer />
            </div>
        </div>
    );
}

export default App;
