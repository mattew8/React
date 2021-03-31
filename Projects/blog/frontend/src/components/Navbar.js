import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import Login from "./Login";

const NavbarBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

Modal.setAppElement("#root"); // Modal이 App 요소임을 명시!
const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <NavbarBox>
      <div className="title">Velog</div>

      <button onClick={onModalOpen}>로그인</button>
      <Modal
        isOpen={modalIsOpen}
        // shouldCloseOnOverlayClick={false} // 모달 이외 영역 클릭해도 안꺼짐
        onRequestClose={() => {
          // 모달 이외 영역 클릭했을 시
          setModalIsOpen(false); // 무조건 꺼지도록!
        }}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            width: "30%",
            height: "30%",
            margin: "0 auto",
            padding: "2%  ",
          },
        }}
      >
        <button
          onClick={onModalOpen}
          className="modalEscape"
          style={{
            outline: "none",
            background: "none",
            border: "none",
            float: "right",
          }}
        >
          x
        </button>
        <Login />
      </Modal>

      <Route path="/login"></Route>
    </NavbarBox>
  );
};

export default Navbar;
