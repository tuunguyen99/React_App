import React, { useEffect, useState } from "react";

const Fetch = (props: {page:number}) => {
  const {page} = props;
  const [list, setList] = useState([]);
  const [url, setUrl] = useState(
    "https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users"
  );
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      // ...
      try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setList(responseJSON);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }
    fetchPostList();
  }, [url]);

  useEffect(() => {
    setShowList(list.slice((page - 1) * 20, page * 20));
  }, [page,list]);

  return (
    <tbody>
      {showList ? (
        showList.map((item: any) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.createdAt.slice(0, 10)}</td>
              <td>{item.status ? "on" : "off"}</td>
              <td>{item.email}</td>
            </tr>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </tbody>
  );
};

export default Fetch;
