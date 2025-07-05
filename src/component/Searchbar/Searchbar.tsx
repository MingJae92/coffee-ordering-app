import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  TextField,
  Box,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
} from "@mui/material";
import debounce from "lodash/debounce";
import {
  searchBarContainer,
  searchInput,
} from "../../styles/Searchbar/Searchbar.styles";
import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";
import { useCoffee } from "../CoffeeContext/CoffeeContext";

const Searchbar = () => {
  const { coffeeData, setSelected } = useCoffee();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CoffeeTypes[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement | null>(null);

  const debounceSearch = useCallback(
    debounce((input: string) => {
      const filtered = coffeeData.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
     
      );
      
      setResults(filtered);
    }, 300),
    [coffeeData]
  );

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setActiveIndex(-1);
      return;
    }
    debounceSearch(query);
    return () => debounceSearch.cancel();
  }, [query, debounceSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? results.length - 1 : prev - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    }
  };

  const handleSelect = (coffee: CoffeeTypes) => {
    setSelected(coffee);
    setQuery(coffee.title);
    setResults([]);
    setActiveIndex(-1);
  };

  // Scroll selected item into view when arrowing through
  useEffect(() => {
    const listEl = listRef.current;
    if (listEl && activeIndex >= 0 && listEl.children[activeIndex]) {
      const itemEl = listEl.children[activeIndex] as HTMLDivElement;
      itemEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <Box sx={searchBarContainer}>
      <TextField
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search coffee"
        sx={searchInput}
        fullWidth
      />

      {query.trim() !== "" && (
        <Paper elevation={3}>
          <Box sx={{ maxHeight: 250, overflowY: "auto" }}>
            <List ref={listRef}>
              {results.length > 0 ? (
                results.map((coffee, index) => (
                  <ListItemButton
                    key={coffee.id}
                    selected={index === activeIndex}
                    onClick={() => handleSelect(coffee)}
                  >
                    <ListItemText primary={coffee.title} />
                  </ListItemButton>
                ))
              ) : (
                <ListItem>
                  <ListItemText
                    primary="No results found"
                    sx={{ textAlign: "center", color: "gray" }}
                  />
                </ListItem>
              )}
            </List>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Searchbar;
