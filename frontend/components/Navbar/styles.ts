import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  span.horizontal-divisor {
    height: 40px;
    width: 1px;
    background: #c4c4c4;
    margin: 0 20px;
  }
  div.navbar-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 1200px) {
      padding: 30px 30px;
    }
    margin: 0 auto;
    padding: 30px 0;
    h1 {
      color: #5c5c5c;
      font-family: 'Righteous';
      font-size: 36px;
      min-width: 210px;
    }
    div.navbar-search {
      width: 50%;
      display: flex;
      @media (max-width: 700px) {
        display: none;
      }
      position: relative;
      margin-left: 10%;
      @media (max-width: 900px) {
        margin-left: 2%;
      }
      margin-right: 20px;
      input {
        width: 100%;
        height: 40px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #5c5c5c;
        padding-left: 40px;
      }
      img {
        position: relative;
        left: 30px;
      }
    }
    div.navbar-rightActions {
      margin-left: auto;
      display: flex;
      @media (max-width: 700px) {
        display: none;
      }
      align-items: center;
      div {
        display: flex;
        align-items: center;
        img {
          margin-right: 5px;
        }
      }
      div.navbar-menu {
        img {
          width: 18px;
        }
      }
    }
    div.navbar-burger {
      display: none;
      @media (max-width: 700px) {
        display: flex;
      }
      width: 100%;
      button {
        margin-left: auto;
        img {
          width: 25px;
        }
      }
      div.navbar-burger-content {
        width: 100%;
        height: 100vh;
        overflow-x: hidden;

        position: absolute;
        z-index: 5;
        top: 0;
        left: 0;
        .navbar-burger-menu {
          background: #fff;
          padding: 30px;
          display: flex;
          flex-direction: column;
          div.burger-menu-header {
            display: flex;
            flex-direction: column;
            button {
              background: #fff;
              img {
                width: 25px;
              }
              padding: 5px;
            }
            p {
              font-size: 1.2rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;
