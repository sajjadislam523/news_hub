import HeroSection from "@/components/HeroSection";
import NewsContainer from "@/components/NewsContainer";

function App() {
    return (
        <div className="mx-auto flex flex-col m-h-screen w-full bg-black">
            <div className="relative w-full">
                <HeroSection />
            </div>

            <div className="relative w-full">
                <NewsContainer />
            </div>
        </div>
    );
}

export default App;
