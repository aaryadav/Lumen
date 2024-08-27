import { useState } from 'react';

const Results = () => {
  const results = [
                    {book: 'Sherlock Holmes', title: 'Chapter 1', paras: [{no: 0, content: 'Paragraph 0'}], id: 0},
                   {book: 'Harry Potter', title: 'Chapter 4', paras: [{no: 1, content: 'Paragraph 1'}], id: 1},
                  ]
  return (
    <div>
      {results.map(res => (
        <div className="note border-yellow-400" key={res.id}>
          <h3>{res.book}</h3>
          <span><b>{res.chapter}</b></span>
          {res.paras.map(p => (
            <div>
              <span>{p.no}</span><br />
              <span>{p.content}</span>
            </div>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Results;