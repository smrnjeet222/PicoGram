import React, { useState } from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

function App() {
  const [selectImg, setSelectImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectImg={setSelectImg} />
      {selectImg && <Modal selectImg={selectImg} setSelectImg={setSelectImg} />}
    </div>
  );
}

export default App;
