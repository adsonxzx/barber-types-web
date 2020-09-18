import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { colorOrange } from '../../styles/colors';

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
  background: #f6f6f6;
  padding-bottom: 35px;
`;

export const Header = styled.div`
  background: #1f2326;
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
  overflow: hidden;
`;

export const ListProvider = styled(Carousel)`
  margin-top: 30px;
  width: 400px;

  /* Slider */
  .rec-item-wrapper {
    /* width: 120px !important; */
  }
  .rec-arrow {
    display: none;
  }
  .rec-pagination {
    display: none;
  }
`;

export const Provider = styled.li<IProvider>`
  background: ${({ selected }) => (selected ? '#FF9000' : '#fff')};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 12px;
  width: 100%;
  overflow: hidden;

  & + li {
    margin-left: 15px;
  }

  span {
    width: 20px;
    white-space: nowrap;
    display: inline-block;
    font-weight: 500;
    margin-left: 10px;
    color: #232129;
  }
`;

export const SelectDate = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 23px;
    color: #28262e;
    margin-bottom: 24px;
  }

  /* Daypicker */
  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    background: #fff;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px 16px 0 16px;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;

export const SelectHour = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 23px;
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
  background: ${({ selected }) => (selected ? '#FF9000' : '#fff')};
  color: #232129;
  border-radius: 10px;
  padding: 0px 15px;
  height: 40px;
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
