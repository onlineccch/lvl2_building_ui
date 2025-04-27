import { Button as MuiButton } from "@mui/material";
import { Button as ChaButton } from "@chakra-ui/react";

function App() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-lvh">
      <ChaButton variant="outline" colorPalette="teal">
        Click Chakra
      </ChaButton>
      <MuiButton variant="contained" color="primary">
        Click Mui
      </MuiButton>
      <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
        Click Tailwind
      </button>
    </div>
  );
}

export default App;
