import { useState } from "react"
import './index.css'

const upsideDownChars = {
  "?": "¿",
  "!": "¡",
  '"': "„",
  "&": "⅋",
  "'": ",",
  "(": ")",
  ")": "(",
  ".": "˙",
  3: "Ɛ",
  4: "ᔭ",
  6: "9",
  7: "Ɫ",
  ";": "؛",
  "<": ">",
  ">": "<",
  A: "∀",
  B: "𐐒",
  C: "Ↄ",
  D: "◖",
  E: "Ǝ",
  F: "Ⅎ",
  G: "⅁",
  J: "ſ",
  K: "⋊",
  L: "⅂",
  M: "W",
  N: "ᴎ",
  P: "Ԁ",
  Q: "Ό",
  R: "ᴚ",
  T: "⊥",
  U: "∩",
  V: "ᴧ",
  Y: "⅄",
  "[": "]",
  "]": "[",
  _: "‾",
  a: "ɐ",
  b: "q",
  c: "ɔ",
  d: "p",
  e: "ǝ",
  f: "ɟ",
  g: "ƃ",
  h: "ɥ",
  i: "ı",
  j: "ɾ",
  k: "ʞ",
  l: "ʃ",
  m: "ɯ",
  n: "u",
  r: "ɹ",
  t: "ʇ",
  v: "ʌ",
  w: "ʍ",
  y: "ʎ",
  "{": "}",
  "}": "{",
  "‿": "⁀",
  "⁅": "⁆",
  "⁆": "⁅",
}

export const UpsideDownTextGenerator = () => {
  const [inputText, setInputText] = useState("")
  const [upsideDownText, setUpsideDownText] = useState("")

  const handleInputChange = (e) => {
    const text = e.target.value
    setInputText(text)
    setUpsideDownText(generateUpsideDownText(text))
  }

  const generateUpsideDownText = (text) => {
    return text
      .split("")
      .reverse()
      .map((char) => upsideDownChars[char] || char)
      .join("")
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
      🚀 Upside Down Text Generator 🚀
      </h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <p className="bg-gray-100 p-4 rounded-md">
        Upside Down:{" "}
        <span className="font-bold text-black-800">{upsideDownText}</span>
      </p>
    </div>
  )
}
