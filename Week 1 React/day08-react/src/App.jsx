import { useState, useEffect } from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";
import User from "./User";
import ControlledInput from "./ControlledInput";
import UserDirectory from "./UserDirectory";
import ProductCard from "./ProductCard";
import "./App.css";
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let isCurrent = true;
    fetch("https://randomuser.me/api/", {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error(`HTTP error: ${res.status}`);
      })
      .then((data) => {
        if (!isCurrent) return;
        const { results } = data;
        if (results?.length > 0) setUser(results[0]);
        else throw new Error("Không tìm thấy User");
      })
      .catch((err) => {
        if (!isCurrent) return;
        if (err.name === "AbortError") return;
        setError(err);
      })
      .finally(() => {
        if (!isCurrent) return;
        setLoading(false);
      });
    return () => {
      controller.abort();
      isCurrent = false;
    };
  }, [refreshKey]);

  function renderStatus() {
    if (loading) return <p>Loading user...</p>;
    if (error) return <p>Không tải được user.</p>;

    return null;
  }

  const products = [
    {
      id: 1,
      name: "keyChrone K8",
      price: 1290000,
      rating: 4.5,
      reviewCount: 128,
      description: "Bàn phím cơ nhỏ gọn.",
      image:
        "https://www.phongcachxanh.vn/cdn/shop/products/ban-phim-c-filco-majestouch-minila-r-convertible-37018668663029.jpg",
    },
    {
      id: 2,
      name: "Filco Majestic",
      price: 4500000,
      rating: 4.0,
      reviewCount: 140,
      description: "Bàn phím cơ nhỏ gọn.",
      image:
        "https://www.phongcachxanh.vn/cdn/shop/products/ban-phim-c-filco-majestouch-minila-r-convertible-37018668663029.jpg",
    },
  ];

  function renderProducts() {
    return products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
  }

  // const users = [
  //   {
  //     id: 1,
  //     name: "An Nguyễn",
  //     role: "Frontend Developer",
  //     avatar: "https://i.pravatar.cc/150?img=12",
  //   },
  //   {
  //     id: 2,
  //     name: "Bình Trần",
  //     role: "UI Designer",
  //     avatar: "https://i.pravatar.cc/150?img=13",
  //   },
  //   {
  //     id: 3,
  //     name: "Chi Lê",
  //     role: "Backend Developer",
  //     avatar: "https://i.pravatar.cc/150?img=47",
  //   },
  // ];
  // function renderUser(users) {
  //   return users.map((user) => {
  //     return (
  //       <Greeting
  //         name={user.name}
  //         role={user.role}
  //         avatar={user.avatar}
  //         key={user.id}
  //       />
  //     );
  //   });
  // }
  return (
    <div>
      {/* {renderUser(users)} */}
      {/* <Counter /> */}
      {/* day 10- useEffect */}
      {/* {!loading && user && <User user={user} />}
      {renderStatus()}
      <button
        onClick={() => {
          setRefreshKey(refreshKey + 1);
          setLoading(true);
          setError(null);
        }}
      >
        Refresh User
      </button> */}
      {/* end day 10*/}
      {/* day 11- Forms & Validation */}
      {/* <ControlledInput /> */}
      {/* end day 11*/} 
      {/* day 12- Lists, Search & Filter */}
      {/*<UserDirectory />*/}
      {/* end day 12*/}
      {/* day 13- Component Design & Styling */}
      {renderProducts()}
      {/* end day 13*/}
    </div>
  );
}
