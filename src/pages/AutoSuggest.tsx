// auto complete search suggestion
import { useEffect, useState } from "react";

const AutoSuggest = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<number>(-1);
  const [isSearchComplete, setIsSearchComplete] = useState<boolean>(false);

  const fetchSuggestion = async () => {
    if (!searchTerm) {
      setSuggestions([]);
      return;
    }

    try {
      const url = `https://dummyjson.com/products/search?q=${searchTerm}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log({ data });
      setSuggestions(data.products);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleKeyDown = (e: any) => {
    // console.log({ e });
    if (e.key === "ArrowDown" && selectedSuggestion < suggestions.length - 1) {
      setSelectedSuggestion((prev) => prev + 1);
    } else if (e.key === "ArrowUp" && selectedSuggestion > 0) {
      setSelectedSuggestion((prev) => prev - 1);
    } else if (e.key === "Enter" && selectedSuggestion >= 0) {
      setSearchTerm(suggestions[selectedSuggestion]?.title);
      setSuggestions([]);
      setIsSearchComplete(true);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setIsSearchComplete(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestion();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="h-screen w-full mt-40 flex flex-col items-center">
      <input
        className="w-96 rounded-lg p-2 h-12 border border-slate-200"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="overflow-y-scroll max-h-40">
        {!isSearchComplete &&
          suggestions.length > 0 &&
          suggestions.map((suggestion: any, index: number) => {
            return (
              <div
                key={suggestion.id}
                className={`p-1 cursor-pointer ${
                  selectedSuggestion === index ? "bg-slate-500" : ""
                }`}
                onClick={() => handleSuggestionClick(suggestion.title)}
              >
                {suggestion.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AutoSuggest;
