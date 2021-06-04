import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();



const Search = (username,setUsername) => {



  return (
    <Wrapper>
      <InputBox>
      <Octicon name="search" />
      <Input value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Search Gists for the username" />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search