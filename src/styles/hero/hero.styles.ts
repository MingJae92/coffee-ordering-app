// heroStyles.ts
import { SxProps, Theme } from "@mui/material";

export const heroStyles: { [key: string]: SxProps<Theme> } = {
  container: {
    height: "100vh",                // Full viewport height
    width: "100vw",                 // Full width of the viewport (use vw for full width)
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0w0iq_uYDzYZwDS2xDf0VVa_tttl07RKfA&s')", // Replace with your image URL
    backgroundSize: "cover",       // Make sure the image covers the entire container
    backgroundPosition: "center",  // Center the background image
    backgroundAttachment: "fixed", // Ensure the background is fixed while scrolling (optional)
    display: "flex",               // Use flexbox to center the content
    justifyContent: "center",      // Center horizontally
    alignItems: "center",          // Center vertically
    textAlign: "center",           // Center the text horizontally
    color: "white",                // White text color for contrast
    fontFamily: "'Roboto', sans-serif", // Optional: Use custom font
    position: "relative",          // Allows positioning of elements inside the Hero
    padding: 0,                    // Remove any padding that might affect full width
    margin: 0,                     // Remove margin if any to ensure full width
  },
  overlay: {
    position: "absolute",           // Position it above the background image
    top: 0,                         // Ensure overlay covers entire container
    left: 0,                        // Start from the left edge
    right: 0,                       // Stretch to the right edge
    bottom: 0,                      // Stretch to the bottom edge
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay (optional for readability)
    zIndex: 1,                      // Ensure the overlay is behind the text and button
  },
  heading: {
    fontWeight: "bold",
    fontSize: "3rem",              // Main heading size
    marginBottom: "20px",          // Margin space below the heading
    zIndex: 2,                     // Ensure the heading appears above the overlay
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add text shadow for better readability
    lineHeight: "1.2",             // Adjust line height for better text spacing
    maxWidth: "100%",              // Ensure text doesn't go outside the full width
    padding: "0 20px",             // Optional: Padding to prevent text from touching edges
  },
  subHeading: {
    fontWeight: "300",
    fontSize: "1.2rem",            // Smaller text for subheading
    marginBottom: "30px",          // Space below the subheading
    zIndex: 2,                     // Ensure the subheading appears above the overlay
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add text shadow for better readability
    lineHeight: "1.5",             // Adjust line height for readability
    maxWidth: "100%",              // Ensure text doesn't go outside the full width
    padding: "0 20px",             // Optional: Padding to prevent text from touching edges
  },
  button: {
    marginTop: 3,                  // Space between text and button
    padding: "15px 30px",          // Button padding
    fontSize: "1rem",              // Button text size
    textTransform: "uppercase",    // Capitalize the button text
    zIndex: 2,                     // Ensure the button is on top of the overlay
    backgroundColor: "#ff6600",    // Button background color (adjust as needed)
    color: "#fff",                 // Button text color
    border: "none",                // Remove border from the button
    cursor: "pointer",             // Pointer cursor on hover
  },
};
