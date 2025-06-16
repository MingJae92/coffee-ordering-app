import { CoffeeModalProps } from "../../types/CoffeeTypes/CoffeeTypes.types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const CoffeeModal = ({ coffee, open, onClose }: CoffeeModalProps) => {
  if (!coffee) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth scroll="paper">
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
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
            zIndex: 2,
          }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        {/* Image */}
        {coffee.image && (
          <img
            src={coffee.image}
            alt={coffee.title || "Coffee image"}
            style={{
              width: "100%",
              maxHeight: "60vh",
              objectFit: "contain",
              backgroundColor: "#111",
            }}
          />
        )}

        {/* Content */}
        <CardContent sx={{ width: "100%", p: 3 }}>
          <Typography variant="h5" gutterBottom>
            {coffee.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {coffee.description}
          </Typography>
          {coffee.ingredients && (
            <div style={{ marginTop: 16 }}>
              {Object.values(coffee.ingredients).join(", ")}
            </div>
          )}
        </CardContent>
      </DialogContent>
    </Dialog>
  );
};

export default CoffeeModal;
