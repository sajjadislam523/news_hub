import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControllerProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    start: number;
    end: number;
    totalPages: number;
}

const PaginationController = ({
    page,
    setPage,
    start,
    end,
    totalPages,
}: PaginationControllerProps) => {
    return (
        <Pagination>
            <PaginationContent className="bg-white/5 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        className={`${
                            page === 1 ? "pointer-events-none opacity-50" : ""
                        } cursor-pointer text-white hover:bg-white/10`}
                    />
                </PaginationItem>

                {Array.from({ length: end - start + 1 }).map((_, i) => {
                    const pageNumber = start + i;
                    return (
                        <PaginationItem key={pageNumber}>
                            <PaginationLink
                                className={`cursor-pointer ${
                                    page === pageNumber
                                        ? "bg-white text-black hover:bg-white"
                                        : "text-white hover:bg-white/10"
                                }`}
                                isActive={page === pageNumber}
                                onClick={() => setPage(pageNumber)}
                            >
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem>
                    <PaginationNext
                        onClick={() =>
                            setPage((p) => Math.min(p + 1, totalPages))
                        }
                        className={`${
                            page === totalPages
                                ? "pointer-events-none opacity-50"
                                : ""
                        } cursor-pointer text-white hover:bg-white/10`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationController;
