import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/700.css";
import { useState } from "react";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";
import "./index.css";

function App() {
  const [isError, setIsError] = useState<boolean>(false);
  return (
    <main>
      <div>
        <Label htmlFor="email">주소</Label>
        <DefaultTextField
          errorMessage="주소를 확인해주세요"
          iconAlt="delete"
          iconPath="/icons/delete.png"
          id="email"
          isError={isError}
          onChange={() => {}}
          onIconClick={() => {}}
          placeholder="주소를 입력해주세요"
          value=""
        />
        <button onClick={() => setIsError((prev) => !prev)}>버튼</button>
      </div>
    </main>
  );
}

export default App;
