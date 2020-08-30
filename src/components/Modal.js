import React from "react";
import { motion } from "framer-motion";

export default function Modal({ selectImg, setSelectImg }) {
  const enlargedHandle = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={enlargedHandle}
    >
      <motion.img
        src={selectImg}
        alt="enlarged"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}
