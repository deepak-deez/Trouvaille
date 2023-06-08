import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./style.scss";

export default function SelectBox({ guestsData, setGuestsSelected }) {
  const [option, setOption] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setGuestsSelected(event.target.value);
    setOption(event.target.value);
  };

  return (
    <div className="w-full select-container">
      <FormControl className="w-full">
        <InputLabel id="demo-simple-select-autowidth-label">Guests</InputLabel>
        <Select
          className="w-full"
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
          label="guests"
        >
          <MenuItem value="none" className="w-full">
            <p>None</p>
          </MenuItem>
          {guestsData.map((data, index) => {
            return (
              <MenuItem className="w-full" value={data} key={index}>
                {data}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
