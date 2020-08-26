import styled from 'styled-components';

interface IProvider {
  selected?: boolean;
}

interface IHour {
  selected?: boolean;
}

interface IDone {
  active?: boolean;
}

export const Container = styled.div`
  background: #fdfdfd;
`;

export const Header = styled.div`
  background: #28262e;
  height: 100px;
  padding: 20px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 327px;
    margin: 0 auto;

    span {
      color: #f4ede8;
      font-size: 20px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 327px;
  margin: 0 auto;
`;

export const ListProvider = styled.ul`
  margin-top: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Provider = styled.li<IProvider>`
  background: ${({ selected }) => (selected ? '#FF9000' : '#3E3B47')};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 7px 10px;

  & + li {
    margin-left: 15px;
  }

  span {
    white-space: nowrap;

    display: inline-block;
    font-weight: 500;
    margin-left: 10px;
    color: ${({ selected }) => (selected ? '#232129' : '#fff')};
  }
`;

export const SelectDate = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 25px;
    color: #28262e;
    margin-bottom: 24px;
  }

  /* Daypicker */
  .DayPicker {
    width: 100%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .DayPicker-NavBar {
    span:first-child {
      left: 1.5em;
    }
  }

  .DayPicker-Caption {
    text-align: center;
  }

  .DayPicker-Month {
    width: 100%;
  }
`;

export const SelectHour = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 25px;
    color: #28262e;
    margin-bottom: 24px;
  }

  span {
    color: #999591;
    margin-bottom: 12px;
    display: block;
  }

  ul {
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
`;

export const Hour = styled.li<IHour>`
  background: ${({ selected }) => (selected ? '#FF9000' : '#3E3B47')};
  color: ${({ selected }) => (selected ? '#232129' : '#fff')};
  border-radius: 10px;
  padding: 0px 10px;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 12px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  height: 50px;
  background: #ff9000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #312e38;
  border: none;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  margin: 56px 0;
`;

export const Done = styled.div<IDone>`
  position: fixed;
  background: #fdfdfd;
  z-index: 9;
  top: 0;
  width: 100%;
  height: 100vh;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: #3e3b47;
    font-size: 30px;
    font-weight: 600;
    max-width: 230px;
    text-align: center;
    margin-bottom: 16px;
    margin-top: 40px;
  }

  p {
    max-width: 265px;
    text-align: center;
    color: #999591;
  }

  button {
    width: 80px;
    margin-top: 40px;
  }
`;
