import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { searchBarContainer, searchInput } from '../../styles/Searchbar/Searchbar.styles';

interface SearchbarProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

const Searchbar = ({ value, onChange, placeholder = 'Search...' }: SearchbarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={searchBarContainer}>
      <TextField
        sx={searchInput}
        label="Search"
        variant="outlined"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size="small"
      />
    </Box>
  );
};

export default Searchbar;
