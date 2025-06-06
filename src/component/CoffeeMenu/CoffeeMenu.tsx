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
import { useEffect, useState } from "react";
import axios from "axios";
import { CoffeeTypes } from "../../types/CoffeeTypes/CoffeeTypes.types";

const CoffeeMenu = () => {
  const [coffeeData, setCoffeeData] = useState<CoffeeTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCoffee, setCurrentCoffee] = useState<CoffeeTypes | null>(null);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/coffee/hot"
        );

        // Filter unique images
        const uniqueImages = response.data.filter(
          (item: CoffeeTypes, index: number, self: CoffeeTypes[]) =>
            index === self.findIndex((t) => t.image === item.image)
        );

        setCoffeeData(uniqueImages);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffeeData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        Loading...
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          color: "red",
        }}
      >
        Failed to fetch coffee data.
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", pb: 8 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 2,
          width: "100%",
        }}
      >
        {coffeeData.map(
          (item) =>
            item.image && (
              <Card
                key={item.id}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: 0,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCurrentCoffee(item);
                  setModalOpen(true);
                }}
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

              <CardContent
                sx={{ width: "100%", backgroundColor: "#111", p: 3 }}
              >
                <Typography variant="h5" gutterBottom>
                  {currentCoffee.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {currentCoffee.description}
                </Typography>

                {currentCoffee.ingredients && (
                  <div style={{ marginTop: 16 }}>
                    {Object.values(currentCoffee.ingredients)}
                  </div>
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
