import { useEffect, useContext, useState, memo } from "react";
import { Mes5 } from "../Utils/Appis";
import { refreshGlobal } from "../Context/ContextRefresh";
import Select from "react-select";

interface Option {
  label: string;
  value: string;
}

interface SelectMesProps {
    Mes: Option | null;
    setMes: React.Dispatch<React.SetStateAction<Option | null>>;
  }

const SelectMes: React.FC<SelectMesProps> = ({ Mes, setMes }) => {
  const { TokenDecode }: any = useContext(refreshGlobal);
  const [Datames, setDatames] = useState<Option[]>([]);
  

  const onChageSelect = (label: string, value: string) => {
    setMes({
      label: label,
      value: value,
    });
  };

  useEffect(() => {
    fetch(Mes5, {
      method: "GET",
      headers: { Authorization: TokenDecode },
    })
      .then((res) => res.json())
      .then((activid: Option[]) => {
        setDatames(activid);
        const currentMonth = new Date().getMonth() + 1; // El mes actual (0 = enero, 1 = febrero, ...)
        const defaultOption = activid.find(
          (option: Option) => option.value === currentMonth.toString()
        );
        setMes(defaultOption || null);
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
      {Mes ? (
        <Select
          value={Mes}
          options={Datames}
          onChange={(data: Option | null) => {
            if (data) {
              onChageSelect(data.label, data.value);
            }
          }}
        />
      ) : null}
    </div>
  );
}

export default memo(SelectMes);