import { useState, useEffect } from 'react';

import Tabs from "./Tabs";

const Search = () => {
  const BASEURL = "https://booksearch-server.thepirate.repl.co/"
  const [infoSource, setInfoSource] = useState("wikipedia");
  const [results, setResults] = useState([]);
  const [labelMsg,
         setLabelMsg] = useState("Article Title");
  const [srcUrl, setsrcUrl] = useState(BASEURL + "wiki-sum?title=");
  const [wiki, setWiki] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [book, setBook] = useState([]);
  
  const [inputs, 
         setInputs] = useState({
    source: "",
    question: ""
  });

  const { source, question } = inputs;
  
  const sourceSetter = (src) => {
    setInfoSource(src);
  };

  useEffect(() => {
    if (infoSource=="wikipedia") {
      setLabelMsg("Article Title");
      setsrcUrl(BASEURL + "wiki-sum?title=" + source)
      setWiki(wiki);
    };
    if (infoSource=="youtube") { 
      setLabelMsg("Youtube Link");
      setsrcUrl(BASEURL + "youtube?url=" + source)
      setYoutube(youtube);
    };
    if (infoSource=="book") { 
      setLabelMsg("Book Name"); 
      setsrcUrl(BASEURL + "book?title=" + source + "&query=" + question)
      setBook(book);
    };
  });

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    console.log(question, source);
    try {
      const body = { source, question };
      const response = await fetch(
        srcUrl,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json"
          }
        }
      );
      const data = await response.json();
      console.log(data);
      if (infoSource == "wikipedia") { setWiki(data); };
      if (infoSource == "youtube") { setYoutube(data); };
      if (infoSource == "book") { setBook(data); };
      
    } catch (err) {
      console.error(err.message);
    }
  };
  
  return (
    <div>
    <div className="search space-y-10">
      <div className="search-options space-y-5">
        <Tabs setInfoSource={setInfoSource} sourceSetter={sourceSetter}/>
        <form className="space-y-5" onSubmit={onSubmitForm}>
        <div className="source flex flex-col">
          <label htmlFor="bookname" className="mb-2">
            Enter { labelMsg } : 
          </label>
          
          <input 
            name="source"
            value={source}
            onChange={e => onChange(e)}
            id="bookname" 
            placeholder="" 
            type="text" 
            className="w-96 rounded border border-slate-300 p-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" />
          
        </div>
        <div className="query flex flex-col">
          <label htmlFor="query" className="mb-2">Enter Query : </label>
          <input 
            name="question"
            value={question} 
            onChange={e => onChange(e)}
            id="query" 
            placeholder="" 
            type="text" 
            className="w-96 rounded border border-slate-300 p-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500" />
        </div>
        <button className="bg-zinc-900 text-white rounded-md px-3 py-2 ">OK</button>
        </form>
      </div>
      <div className="response text-justify whitespace-pre-line" style={{ "width": "650px" }} >
          {infoSource == "wikipedia" && wiki.map(res => (
            <div className="" key={res.id}>
              <span><b>{res.subheading}</b></span>
              <span className=''>{res.content}</span>
              <br/>
            </div>
          ))}
          {infoSource == "youtube" && youtube.map(res => (
            <div className="" key={res.id}>
              <span><b>{res.title}</b></span>
              <span className=''>{res.transcript}</span>
              <br/>
            </div>
          ))}
        {infoSource == "book" && book.map(res => (
            <div className="" key={res.id}>
              <span><b>{res.subheading}</b></span>
              <span className=''>{res.content}</span>
              <br/>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Search;