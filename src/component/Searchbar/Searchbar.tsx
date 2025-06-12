import React, { useCallback, useMemo, useState, useEffect } from "react";
import {
  TextField,
  Box,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import debounce from "lodash/debounce";
import {
  searchBarContainer,
  searchInput,
} from "../../styles/Searchbar/Searchbar.styles";
import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";

interface SearchbarProps {
  coffeeList: CoffeeTypes[];
  onSelect: (coffee: CoffeeTypes) => void;
  onSearch?: (query: string) => void; // optional prop to notify parent
}

const Searchbar = ({ coffeeList, onSelect, onSearch }: SearchbarProps) => {
  const [query, setQuery] = useState("");
  const [filteredList, setFilteredList] = useState<CoffeeTypes[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  // Debounced filtering
  const debounceFilter = useMemo(() => {
    const handler = debounce((input: string) => {
      const results = coffeeList.filter((coffee) =>
        coffee.title?.toLowerCase().includes(input.toLowerCase())
      );

      setFilteredList(results);
      setShowSuggestions(true);
      setHasTyped(true);

      if (onSearch) {
        onSearch(input);
      }
    }, 300);

    return handler;
  }, [coffeeList, onSearch]);

  // Prevent memory leak on unmount
  useEffect(() => {
    return () => {
      debounceFilter.cancel();
    };
  }, [debounceFilter]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setQuery(value);
      debounceFilter(value);
    },
    [debounceFilter]
  );

  const handleSelect = (coffee: CoffeeTypes) => {
    setQuery(coffee.title);
    setShowSuggestions(false);
    onSelect(coffee);
  };

  return (
    <Box sx={searchBarContainer}>
      <TextField
        sx={searchInput}
        label="Search"
        variant="outlined"
        value={query}
        onChange={handleChange}
        size="small"
        fullWidth
      />

      {showSuggestions && (
        <Paper
          elevation={3}
          sx={{
            mt: 1,
            position: "absolute",
            width: "100%",
            zIndex: 10,
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          {filteredList.length > 0 ? (
            <List>
              {filteredList.map((coffee) => (
                <ListItemButton
                  key={coffee.id}
                  onClick={() => handleSelect(coffee)}
                >
                  <ListItemText primary={coffee.title} />
                </ListItemButton>
              ))}
            </List>
          ) : hasTyped && query.trim() !== "" ? (
            <Box sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Coffee not found
              </Typography>
            </Box>
          ) : null}
        </Paper>
      )}
    </Box>
  );
};

export default Searchbar;
