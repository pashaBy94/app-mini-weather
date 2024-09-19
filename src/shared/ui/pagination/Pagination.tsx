export function Pagination({
    totalResults,
    numbPage,
    nextPage,
}: {
    totalResults?: number;
    numbPage?: number;
    nextPage?: number | string | null;
}) {
    return (
        <div className=" fixed bottom-0 left-0 right-0 bg-white">
            totalResults: {totalResults}
            numbPage: {numbPage}
            nextPage: {nextPage}
        </div>
    );
}
