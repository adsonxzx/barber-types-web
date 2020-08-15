import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colorGrayLight, colorBlack } from '../../styles/colors';

export const Container = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 45px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Content = styled.div`
  flex: 1;
  margin-right: 70px;
  max-width: 920px;
`;

export const ContentHeader = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > div {
    h1 {
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      color: #ff9000;
    }
  }

  button {
    background: #fdcd88;
    color: #000;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    padding: 9px 23px;
  }
`;

export const CalendarMonth = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 50px;
  margin-top: 25px;

  &::after {
    content: '';
    width: 50px;
    height: 100%;
    background: #fff;
    opacity: 0.75;
    display: block;
    position: absolute;
    right: 0;
    z-index: 99;
  }

  &::before {
    content: '';
    width: 50px;
    height: 100%;
    background: #fff;
    opacity: 0.75;
    display: block;
    position: absolute;
    left: 0;
    z-index: 99;
  }

  ul {
    position: absolute;
    left: -182px;
    display: flex;
    li {
      font-size: 22px;
      font-weight: 600;
      margin: 0 25px;
      cursor: pointer;
      color: #ababab;

      &.active {
        color: ${colorBlack};
      }
    }
  }
`;

export const CalendarDay = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  margin-top: 25px;

  &::after {
    content: '';
    width: 50px;
    height: 100%;
    background: #fff;
    opacity: 0.75;
    display: block;
    position: absolute;
    right: 0;
    z-index: 99;
  }

  &::before {
    content: '';
    width: 50px;
    height: 100%;
    background: #fff;
    opacity: 0.75;
    display: block;
    position: absolute;
    left: 0;
    z-index: 99;
  }

  ul {
    display: flex;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 15px;
      padding-bottom: 20px;

      &.active {
        border-bottom: 2px solid #b9b9b9;
        strong {
          background: ${colorBlack};
          color: #fff;
        }
      }

      strong {
        margin-bottom: 7px;
        font-weight: bold;
        background: ${colorGrayLight};
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      span {
        font-size: 15px;
        color: #c3c3c3;
      }
    }
  }
`;

export const Appointments = styled(motion.div)`
  height: 570px;
  overflow: hidden;
  margin-bottom: 100px;

  ul {
    width: 100%;
    position: relative;
    border-top: 2px solid ${colorGrayLight};
    padding-top: 15px;
    cursor: grab;

    li {
      display: flex;
      align-items: center;
      height: 70px;
      margin: 20px 0;
      position: relative;

      &.no {
        height: 45px;
        > div {
          display: none;
        }
      }

      &:before {
        content: '';
        width: 100%;
        height: 2px;
        background: ${colorGrayLight};
        position: absolute;
        left: 60px;
      }

      > span {
        margin-right: 40px;
        color: #ababab;
      }

      > div {
        flex: 1;
        position: relative;
        background: #eff0f2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 7px;
        padding: 10px 15px;

        .left {
          height: 100%;
          display: flex;

          strong {
            font-size: 15px;
            margin-bottom: 2px;
            display: block;
          }

          p {
            font-size: 13px;
            color: #97989a;
          }
        }

        .right {
          display: flex;
          align-items: center;

          svg {
            cursor: pointer;
            margin-left: 15px;
          }
        }
      }
    }
  }
`;

export const AvatarService = styled.div`
  background: #feffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60px;
  margin-right: 15px;
`;

export const ClienteAvatar = styled.div`
  img {
    width: 35px;
    border-radius: 50%;
  }
`;

export const SiderBar = styled.div`
  > img {
    margin: 0 auto;
    border-radius: 8px;
    text-align: center;
  }

  > strong {
    margin-top: 10px;
    margin-bottom: 5px;
    display: block;
    text-align: center;
    color: ${colorBlack};
  }

  > p {
    font-size: 13px;
    color: #ababab;
    display: block;
    text-align: center;
  }

  .available {
    display: flex;
    margin-top: 40px;

    > div {
      display: flex;
      flex-direction: column;
      flex: 1;
      text-align: center;

      span {
        color: #ababab;
        margin-bottom: 10px;
      }

      strong {
        font-size: 28px;
        font-weight: bold;
      }

      &:first-child {
        border-right: 1px solid #ccc;
      }
    }
  }

  .notifications {
    margin-top: 40px;

    h3 {
      font-size: 18px;
      color: ${colorBlack};
      margin-bottom: 15px;
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        border-radius: 4px;
        background: #f6f6f6;
        padding: 10px;
        color: #929699;
        margin-bottom: 10px;
        font-size: 14px;
      }
    }
  }
`;
