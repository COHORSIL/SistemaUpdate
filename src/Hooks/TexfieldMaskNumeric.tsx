import React from "react";

import TextField, { TextFieldProps } from "@mui/material/TextField";
import Format from "../Utils/Format";

import {InputAdornment,withStyles} from "./../Utils/MaterialUIComponents";

interface ValueInput {
  value: string;
  valuetemp: string;
}

interface TexfieldMaskNumericProps extends Omit<TextFieldProps, "value" | "onChange"> {
  Valueinput: ValueInput;
  setValueinput: React.Dispatch<React.SetStateAction<ValueInput>>;
}

const TexfieldMaskNumeric: React.FC<TexfieldMaskNumericProps> = ({
  Valueinput,
  setValueinput,
  classes,
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value.replace(
      /[,/#!$%^&*;:{}=\-_`~()”“"…A-Z a-z + @ ? | " ' {} ><: [\] "/" ]/g,
      ""
    );

    // Validar más de un punto
    const parts = val.split(".");
    if (parts.length > 2) {
      val = `${parts[0]}.${parts.slice(1).join("")}`;
    }

    // Validar punto al principio
    if (val.startsWith(".")) {
      if (val.length > 1 && /^\d/.test(val.slice(1))) {
        val = `0${val}`;
      } else {
        val = "";
      }
    }
    setValueinput({ ...Valueinput, value: val, valuetemp: val });
  };


  return (
    <CssTextField
      {...rest}
      inputProps={{
        min: 0,
        style: {
          textAlign: "center",
          color: "black",
          fontSize: 15,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
      InputProps={{
        startAdornment: <InputAdornment position="start">L.</InputAdornment>,
      }}
      variant="outlined"
      size="small"
      id="input-with-icon-grid"
      value={Valueinput.valuetemp}
      onChange={handleChange}
      onBlur={() =>
        setValueinput({
          ...Valueinput,
          valuetemp: Valueinput.valuetemp ? Format(Valueinput.valuetemp) : "",
        })
      }
      onFocus={() =>
        setValueinput({ ...Valueinput, valuetemp: Valueinput.value })
      }
    />
  );
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3498db",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3498db",
      borderWidth: 1,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3498db",
        borderWidth: 1,
      },
      "&:hover fieldset": {
        borderColor: "#3498db",
        borderWidth: 1,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3498db",
        borderWidth: 1,
      },
    },
  },
})(TextField);

export default TexfieldMaskNumeric;
