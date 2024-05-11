import {useState} from 'react';
import { useNavigate, useContext } from 'react-router-dom'
import style from './AnimalMatchInfo.module.css'
import { MyContext } from '../../../App';

import styled from "styled-components";

const AnimalMatchInfo = () => {
    console.log("AnimalMatchInfo 잘 들어옴!");
    return (
        <entire_Container>
            <Container>
                <Title>미팅정보입력</Title>
                <Box>이름입력</Box>
                <Box>전화번호입력</Box>
                <MeetingStart>미팅시작</MeetingStart>
          </Container>
        </entire_Container>
    );
}
export default AnimalMatchInfo;

const entire_Container = styled.div`
    width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
`
const Title = styled.div`
    font-size : 50px;
`
const MeetingStart = styled.div`
    width: 335px;
    height: 56px;
    border-radius: 50px;
    border: none;
    background-color: #ff4b4b;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    margin: 12px 0px;
    font-weight: bold;
    cursor: pointer;
`

const Box = styled.div`
    width: 335px;
    height: 56px;
    border-radius: 35px;
    padding: 24px;
    background-color: #FFFFFF;
    border-color: #E5E5E5;
    margin: 4px 0px;
    font-size: 16px;
    color: #999999;
    border-style: solid;
`