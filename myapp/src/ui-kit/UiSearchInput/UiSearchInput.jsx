import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";

const UiSearchInput = ({ value, onChange, placeholder = "Поиск...", ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.searchInput}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export default UiSearchInput;