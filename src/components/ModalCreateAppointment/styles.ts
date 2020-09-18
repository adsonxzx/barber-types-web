import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import { colorOrange } from '../../styles/colors';

interface IModalCreateAppointment extends HTMLAttributes<HTMLElement> {
  open: boolean;
}

interface IHour {
  selected?: boolean;
}

export const Container = styled.div<IModalCreateAppointment>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  background: red;
  top: 0;
  left: 0;
  background-color: rgba(113, 113, 113, 0.5);
  z-index: 999;
  justify-content: flex-end;
`;

export const Content = styled.div`
  width: 420px;
  height: 100%;
  background: #f6f6f6;
  padding: 35px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ccc;
  }

  > form {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    label {
      flex-basis: 100%;
      font-size: 20px;
      display: block;
      margin-bottom: 20px;
      font-weight: 600;
    }

    input {
      height: 45px;
      border-radius: 7px;
      color: #666360;
      padding: 0 18px;
      border: 2px solid #f4f4f4;
    }

    button {
      margin-left: 10px;
      font-size: 14px;
    }

    span {
      color: #f96359;
      font-size: 13px;
      display: inline-block;
      bottom: -25px;
      position: absolute;
      left: 4px;
    }
  }

  > button {
    margin-top: 30px;
  }
`;

export const SelectDate = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 20px;
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
    font-size: 20px;
    color: #28262e;
    margin-bottom: 24px;
  }

  span {
    font-size: 14px;
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
  padding: 0px 14px;
  height: 37px;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Client = styled.div`
  padding: 7px 12px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: #fff;
  margin-top: 20px;
  border: 1px solid ${colorOrange};

  > .info {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    flex: 1;

    h3 {
      font-size: 16px;
      color: #232129;
      margin-bottom: 10px;
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 7px;
      color: #999591;
      font-size: 12px;

      svg {
        margin-right: 7px;
      }
    }
  }

  button {
    background: none;
    border: none;

    &:hover {
      svg {
        fill: #f96359;
      }
    }
  }
`;
