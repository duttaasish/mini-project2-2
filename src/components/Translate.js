import React, { useState , useEffect }  from "react";
import "../styles/Translate.css";
import axios from 'axios';


const Translate = () => {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translateLanguage = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate',params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>{
      console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);
  
  return (
    <div className="transMainDiv">
      <div className="transContainer">
        <div className="wrapper">
          <div className="text-input">
            <textarea
              spellCheck="false"
              className="fromText"
              placeholder="Enter Text..." onInput={(e) => setInput(e.target.value)}
            ></textarea>
            <textarea
              readOnly
              spellCheck="false"
              className="toText"
              placeholder="Translate..." value={output}
            ></textarea>
          </div>
          <ul className="controls">
            <li className="row from">
              <select onChange={(e) => setFrom(e.target.value)}>
              {options.map((opt) => (
              <option key={opt.code} value={opt.code}>
              {opt.name}
              </option>
              ))}
              </select>
            </li>
            <li className="row to">
              <select onChange={(e) => setTo(e.target.value)}>
              {options.map((opt) => (
              <option key={opt.code} value={opt.code}>
              {opt.name}
              </option>
              ))}
              </select>
            </li>
          </ul>
          
        </div>
        <button onClick={e=>translateLanguage()}>Translate Text</button>
      </div>
    </div>
  );
};

export default Translate;
