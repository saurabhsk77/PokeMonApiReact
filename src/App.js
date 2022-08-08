import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [datas, setDatas] = React.useState([]);
  const [stats, setStats] = React.useState();
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    let data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${page * 25}&offset=${0}`
    );
    data = await data.json();
    setPage(page + 1);
    setDatas(data.results);
    console.warn(datas);
  };

  const fetchInfo = async (name) => {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    data = await data.json();
    setStats([...data.stats]);
    console.table(stats);
  };

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
    console.log(isFetching);
  };

  const fetchMoreListItems = () => {
    fetchData();
    setIsFetching(false);
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  React.useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="cards">
      {datas.map((item, index) => (
        <div className="flip-card" onMouseEnter={() => fetchInfo(item.name)}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div className="rank">{`#${index + 1}`}</div>
              <h2>{item.name}</h2>
            </div>
            <div className="flip-card-back">
              {stats &&
                stats.map((item) => {
                  const {
                    stat: { name },
                    base_stat,
                  } = item;
                  return (
                    // <span key={name}>
                    //   <label htmlFor="file">{name}</label>
                    //   <progress id="file" value={base_stat} max="200">
                    //     {base_stat}
                    //   </progress>
                    //   <span>{base_stat}</span>
                    // </span>
                    <table style={{ width: 100, borderCollapse: "collapse" }}>
                      <tr>
                        <td>{name}</td>
                        <td>
                          <progress id="file" value={base_stat} max="200">
                            {base_stat}
                          </progress>
                        </td>
                        <td>{base_stat}</td>
                      </tr>
                    </table>
                  );
                })}
            </div>
          </div>
        </div>
      ))}
      {isFetching && <h1>Fetching more list items...</h1>}
    </div>
  );
}

export default App;
