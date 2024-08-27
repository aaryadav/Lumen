import React from "react";

const Tabs = ({ setInfoSource, sourceSetter }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const TabNames = ['Wikipedia', 'Youtube', 'Book']
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="">
          <ul
            className="bg-zinc-100 rounded flex mb-0 list-none flex-wrap flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-zinc-800"
                    : "text-black bg-transparent")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                  sourceSetter("wikipedia");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {TabNames[0]}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-zinc-800"
                    : "text-black bg-transparent")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                  sourceSetter("youtube");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                {TabNames[1]}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-zinc-800"
                    : "text-black bg-transparent")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                  sourceSetter("book");
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                {TabNames[2]}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1" style={{ "width": "650px" }}>
                  
                </div>
                
                <div className={openTab === 2 ? "block" : "hidden"} id="link2" style={{ "width": "650px" }}>
                  
                </div>
                
                <div className={openTab === 3 ? "block" : "hidden"} id="link3" style={{ "width": "650px" }}>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;