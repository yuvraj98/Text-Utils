import React, { useEffect, useRef } from "react";
import countries from "../components/data"; // Assuming countries data contains language codes and their names

const Translate = () => {
  const translateBtnRef = useRef(null); // Reference to the translate button

  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    const exchangeIcon = document.querySelector(".exchange");
    const selectTag = document.querySelectorAll("select");
    const icons = document.querySelectorAll(".row i");

    // Populate language options in select elements
    selectTag.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code === "en-GB"
              ? "selected"
              : ""
            : country_code === "hi-IN"
            ? "selected"
            : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });

    // Exchange button functionality
    exchangeIcon.addEventListener("click", () => {
      console.log("Exchanging languages...");
      let tempText = fromText.value;
      let tempLang = selectTag[0].value;
      fromText.value = toText.value;
      toText.value = tempText;
      selectTag[0].value = selectTag[1].value;
      selectTag[1].value = tempLang;
    });

    // Clear translated text when source text changes
    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    // Translate button functionality with onClick handler
    translateBtnRef.current.addEventListener("click", () => {
      const text = fromText.value.trim();
      const translateFrom = selectTag[0].value;
      const translateTo = selectTag[1].value;

      if (!text) return;

      toText.setAttribute("placeholder", "Translating...");

      const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText; // Update UI with translated text
          toText.setAttribute("placeholder", "Translation");
        });
    });

    // Speech and copy functionality (unchanged)
    icons.forEach((icon) => {
      icon.addEventListener("click", ({ target }) => {
        // ... (existing speech and copy logic)
      });
    });
  }, []);

  return (
    <>
      <div className="bg-richblack-900 h-[100%]">
        <div className="text-white text-center">
            <h1 className="text-2xl font-bolt pt-9">Write your text to Translate </h1>
        </div>
        <div className="container mx-auto px-4 py-8 ">
            <div className="wrapper border rounded-md border-gray-300 p-4">
                <div className="text-input flex">
                    <textarea
                    spellCheck="false"
                    className="from-text w-full h-[500px] px-4 py-2 mt-2 border border-gray-300 rounded-md resize-none mr-2"
                    placeholder="Enter text"
                    ></textarea>
                    <textarea
                    spellCheck="false"
                    readOnly
                    disabled
                    className="to-text w-full h-[500] px-4 py-2 mt-2 border border-gray-300 rounded-md resize-none bg-richblack-5"
                    placeholder="Translation"
                    ></textarea>
                </div>
            <ul className="controls mt-3 flex justify-between">
                <li className="row from">
                
                <select className="border border-gray-300 rounded-md px-2 py-1 ml-2 bg-yellow-300"></select>
                </li>
                <li className="exchange mt-2">
                <i className="fas fa-exchange-alt"></i>
                </li>
                <li className="row to ">
                    <select className="border border-gray-300 rounded-md px-2 py-1 mr-2 bg-yellow-300"></select>
                
                </li>
            </ul>
            </div>
            <button
            ref={translateBtnRef}
            className="mt-4 py-2 px-4 bg-yellow-300 text-white rounded-md mx-auto ml-[45%]"
            >
            Translate Text
            </button>
        </div>
      </div>
    </>
  );
};

export default Translate;
