import React, { useEffect }  from "react";
import "../styles/Translate.css";
import countries from "../data";

const Translate = () => {
    useEffect(()=>{
        const fromText = document.querySelector(".fromText");
        const toText = document.querySelector(".toText");
        const selectTag = document.querySelectorAll("select");
        const translateBtn = document.querySelector("button");
        selectTag.forEach((tag , id)=>{
            for(let country_code in countries){
                let selected = id === 0 ? 
                  country_code === 'en-GB' ? 'selected' : ''
                : country_code === 'hi-IN' ? 'selected' : '';
                let option =`<option ${selected} value="${country_code}">${countries[country_code]}</option>`
                tag.insertAdjacentHTML("beforeend",option);

                fromText.addEventListener('keyup', () =>{
                    if(!fromText.value){
                        toText.value = "";
                    }
                });
                translateBtn.addEventListener('click', ()=>{
                    let text = fromText.value.trim();
                    let translateFrom =selectTag[0].value;
                    let translteTo = selectTag[1].value;
                    if(!text) return;
                    toText.setAttribute("placeholder", "Translating...");
                    let apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translteTo}`;
                    fetch(apiURL).then((res) => res.json()).then((data)=>{
                        toText.value = data.responseData.translatedText;
                    });
                    toText.setAttribute("placeholder","Translate")
                });
            };
           
        });
    },[]);
  return (
    <div className="transMainDiv">
      <div className="transContainer">
        <div className="wrapper">
          <div className="text-input">
            <textarea
              spellCheck="false"
              className="fromText"
              placeholder="Enter Text"
            ></textarea>
            <textarea
              readOnly
              spellCheck="false"
              className="toText"
              placeholder="Translate"
            ></textarea>
          </div>
          <ul className="controls">
            <li className="row from">
              <select></select>
            </li>
            <li className="row to">
              <select></select>
            </li>
          </ul>
          
        </div>
        <button>Translate Text</button>
      </div>
    </div>
  );
};

export default Translate;
