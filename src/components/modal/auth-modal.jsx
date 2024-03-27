import React, { useState } from "react";
import "./auth-modal.css";
import { useModalProvider } from "../../context/modal-context";
const data = {
  username: "semih",
  password: "123",
};
const AuthModal = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setIsOpen } = useModalProvider();
  const [error, setError] = useState({
    err: false,
    message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();

    if (data.username === userName && data.password === password) {
      setIsOpen(false);
      console.log("selam");
    } else {
      setError({ err: true, message: "Kullanıcı adı veya şifre yanlış." });
    }
  };
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <h1>Giriş Yap</h1>
        <div className="auth-wrapper">
          <form action="" onSubmit={onSubmit}>
            <div>
              <label htmlFor="ad">Kullanıcı adı</label>
              <input
                id="ad"
                type="text"
                placeholder="kolemnia"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Şifre</label>
              <input
                id="password"
                type="password"
                placeholder="**************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>Giriş Yap</button>
          </form>
          {error.err && <div>{error.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
