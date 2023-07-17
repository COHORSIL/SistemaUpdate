/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext, useState, memo } from "react";
import { Year } from "../Utils/Appis";
import { refreshGlobal } from "../Context/ContextRefresh";
import Select from "react-select";

interface Option {
  label: string;
  value: string;
}

interface SelectYearProps {
  Years: Option | null;
  setYears: React.Dispatch<React.SetStateAction<Option | null>>;
}

const SelectYear: React.FC<SelectYearProps> = ({ Years, setYears }) => {
  const { TokenDecode }: any = useContext(refreshGlobal);
  const [DataYear, setDataYear] = useState<Option[]>([]);

  const onChageSelect = (label: string, value: string) => {
    setYears({
      label: label,
      value: value,
    });
  };

  useEffect(() => {
    fetch(Year, {
      method: "GET",
      headers: { Authorization: TokenDecode },
    })
      .then((res) => res.json())
      .then((activid: Option[]) => {
        setDataYear(activid);
        const currentYear = new Date().getFullYear(); // El mes actual (0 = enero, 1 = febrero, ...)
        const defaultOption = activid.find(
          (option: Option) => option.value === currentYear.toString()
        );
        setYears(defaultOption || null);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [TokenDecode]);

  return (
    <div
      style={{
        width: 300,
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      {Years ? (
        <Select
          value={Years}
          options={DataYear}
          onChange={(data: Option | null) => {
            if (data) {
              onChageSelect(data.label, data.value);
            }
          }}
        />
      ) : null}
    </div>
  );
};

export default memo(SelectYear);
