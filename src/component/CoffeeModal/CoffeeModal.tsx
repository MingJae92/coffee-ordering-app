import { CoffeeModalProps } from "../../types/CoffeeTypes/CoffeeTypes.types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import {
  dialogContentStyles,
  closeButtonStyles,
  imageStyles,
  cardContentStyles,
  coffeeHeadingStyles,
} from "../../styles/CoffeeModal/CoffeeModal.styles";

const CoffeeModal = ({ coffee, open, onClose }: CoffeeModalProps) => {
  if (!coffee) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
    >
      <DialogContent sx={dialogContentStyles}>
        <IconButton onClick={onClose} sx={closeButtonStyles} aria-label="close">
          <CloseIcon />
        </IconButton>

        {coffee.image && (
          <img
            src={coffee.image}
            alt={coffee.title || "Coffee image"}
            style={imageStyles}
          />
        )}

        <CardContent sx={cardContentStyles}>
          <Typography variant="h6" sx={coffeeHeadingStyles}>
            ☕ Your Coffee
          </Typography>
          <Typography variant="h5" gutterBottom>
            {coffee.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {coffee.description}
          </Typography>
          {Array.isArray(coffee.ingredients) &&
            coffee.ingredients.length > 0 && (
              <div style={{ marginTop: 16 }}>
                {coffee.ingredients.join(", ")}
              </div>
            )}
        </CardContent>
      </DialogContent>
    </Dialog>
  );
};

export default CoffeeModal;
