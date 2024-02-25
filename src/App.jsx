import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import Box from "@mui/material/Box";

const App = () => {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectMode = event.target.value;
    setMode(selectMode);
  };
  return (
    <div>
      <Button variant="contained">Hello world</Button>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="select-dark-light-mode">Age</InputLabel>
        <Select
          labelId="select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="dark">
            <Box
              sx={{
                display: "flex",
                alightItems: "center",
                gap: 1,
              }}
            >
              <DarkModeIcon fontSize="small" /> Dark
            </Box>
          </MenuItem>
          <MenuItem value="light">
            <Box
              sx={{
                display: "flex",
                alightItems: "center",
                gap: 1,
              }}
            >
              <LightModeIcon fontSize="small" /> Light
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box
              sx={{
                display: "flex",
                alightItems: "center",
                gap: 1,
              }}
            >
              <Brightness6Icon fontSize="small" /> System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default App;
