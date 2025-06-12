import {
  Card,
  CardMedia,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";
import Searchbar from "../Searchbar/Searchbar";

const CoffeeMenu = () => {
  const [coffeeData, setCoffeeData] = useState<CoffeeTypes[]>([]);
  const [filteredData, setFilteredData] = useState<CoffeeTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCoffee, setCurrentCoffee] = useState<CoffeeTypes | null>(null);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.sampleapis.com/coffee/hot");

        // Filter unique images
        const uniqueImages = response.data.filter(
          (item: CoffeeTypes, index: number, self: CoffeeTypes[]) =>
            index === self.findIndex((t) => t.image === item.image)
        );

        setCoffeeData(uniqueImages);
        setFilteredData(uniqueImages);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffeeData();
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      if (!query) {
        setFilteredData(coffeeData);
        return;
      }

      const matches = coffeeData.filter((coffee) =>
        coffee.title?.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredData(matches);
    },
    [coffeeData]
  );

  const handleSelectCoffee = (coffee: CoffeeTypes) => {
    setCurrentCoffee(coffee);
    setModalOpen(true);
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        Loading...
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", color: "red" }}>
        Failed to fetch coffee data.
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", pb: 8 }}>
      <Searchbar coffeeList={coffeeData} onSelect={handleSelectCoffee} onSearch={handleSearch} />

      {filteredData.length === 0 ? (
        <Typography sx={{ textAlign: "center", mt: 4 }}>Coffee not found</Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: 2,
            width: "100%",
          }}
        >
          {filteredData.map(
            (item) =>
              item.image && (
                <Card
                  key={item.id}
                  sx={{ width: "100%", aspectRatio: "1 / 1", borderRadius: 0, cursor: "pointer" }}
                  onClick={() => handleSelectCoffee(item)}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title || "Coffee image"}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Card>
              )
          )}
        </Box>
      )}

      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        <DialogContent
          sx={{
            position: "relative",
            p: 0,
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          {currentCoffee && (
            <>
              {currentCoffee.image && (
                <img
                  src={currentCoffee.image}
                  alt={currentCoffee.title || "Coffee image"}
                  style={{
                    width: "100%",
                    maxHeight: "60vh",
                    objectFit: "contain",
                    backgroundColor: "#111",
                  }}
                />
              )}

              <CardContent sx={{ width: "100%", backgroundColor: "#111", p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  {currentCoffee.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {currentCoffee.description}
                </Typography>
                {currentCoffee.ingredients && (
                  <div style={{ marginTop: 16 }}>{Object.values(currentCoffee.ingredients).join(", ")}</div>
                )}
              </CardContent>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CoffeeMenu;
