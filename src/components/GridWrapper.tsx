import React from "react";

const GridWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {children}
            </div>
        </div>
    );
};

export default GridWrapper;
