import { useState } from 'react';

import Search from "./Search";

const Page = () => {
   const results = [
                    {book: 'Sherlock Holmes', title: 'Chapter 1', paras: [{no: 0, content: 'Paragraph 0'}], id: 0},
                   {book: 'Harry Potter', title: 'Chapter 4', paras: [{no: 1, content: 'Paragraph 1'}], id: 1},
                  ]
  return (
    <div>
      <div className="container space-y-10 pt-10 pl-20">
          <div className="greet text-lg font-medium">
            Hello!<br />
            I am Lumen - a knowledge distillation tool.<br />
            <br />
          </div>
          <Search results={results}/>
        </div>
      </div>
  );
};

export default Page;