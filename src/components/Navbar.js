import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
const menuList = ["Woman", "Man", "Kids", "Acc", "Home", "Sale", "Brand"];

const Navbar = ({ authenticate, setAutenticate }) => {
  const navigate = useNavigate();
  //검색란에 작성 후 엔터 입력 시 작동할 함수 ex) 후드티 입력 후 해당 단어가 포함 된 상품표기 >> filter 함수 사용안하고 쿼리값을 통해서 찾아올것이다. >> 검색 한 단어가 주소창으로 전달되어야함
  const onCheckEnter = (event) => {
    //onKeyup >> 해당 눌린 키를 인식함
    if (event.key === "Enter") {
      //form안에 있는 target이라는 key 안에 value 값을 찾아옴 해당 값을 쿼리값으로 주소창에 보낸다.
      navigate(`?q=${event.target.value}`);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="nav-header">
        <div className="burger-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {authenticate ? (
          <div onClick={() => setAutenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>LogOut</span>
          </div>
        ) : (
          <div onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>Login</span>
          </div>
        )}
      </div>

      <div className="nav-logo">
        <Link to="/">
          <img
            src="https://www.shinailbo.co.kr/news/photo/202106/1419496_624961_3416.jpg"
            alt="logo"
            width={150}
          />
        </Link>
      </div>

      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          onKeyUp={onCheckEnter}
        />
      </div>
    </div>
  );
};

//검색기능 내 생각
// searchicon 를 눌러서(엔터를누르면) input.value값이 ㅋ
//엔터를 누르면 주소창에 쿼리로 표시되면서
// ?q=입력한값 으로 주소가 바뀐다.
//이 바뀐 주소의 파라미터값과 ProductDetail의 product.title값 중 일치하는 것을
//filter로 찾아내서 setProduct로 product값을 새로 만들어줌

export default Navbar;
