import { ChevronUpIcon } from "@heroicons/react/24/solid";

export default function Up({ scrollRef }) {
  const handleScrollToTop = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-2 right-10 z-50 w-10 h-10 bg-black text-white rounded-full opacity-70 flex items-center justify-center cursor-pointer hover:opacity-50"
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
}

