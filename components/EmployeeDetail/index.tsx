import React, {useState} from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import { useListEmployee } from "../../components/ListEmployeeState";


const EmployeeDetail:React.FC = () => {
  const {state, ListEmployeeDispatcher} = useListEmployee();
  const selectedEmployee = state.employees[state.selectedEmployeeIndex];

  return (
    <Item>
      <ImageBlock>
        <Image 
        src ={selectedEmployee.image}
        width={180}
        height={180}
        />
      </ImageBlock>
      <ItemContent>
        <Title>{selectedEmployee.name}</Title>
        <Desc>
          <SubTitle>Biography</SubTitle>
          {selectedEmployee.biography}</Desc>
      </ItemContent>
      {/* {selectedEmployee.popularity} */}
    </Item>
  )
}

export default EmployeeDetail;

const Item = styled.div`
  color: ${({theme}) => theme.colors.white};
  position: relative;

`

const ImageBlock = styled.div`
  border: 1px solid ${({theme}) => theme.colors.white};
  border-radius: 4px;
  width: 180px;
  position: absolute;
  left: 0;
`

const ItemContent = styled.div`
  padding: 0 50px 30px 250px;
  margin-top: -45px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 40px;
  padding-bottom: 60px;
`;

const SubTitle = styled.h4`
  margin: 0;
  font-size: 40px;
  font-weight: ${({theme}) => theme.fonts.weights.semiBold};
  padding-bottom: 60px;
`;

const Desc = styled.div`
background: ${({theme}) => theme.colors.gray};
padding: 30px;
border-radius: 5px;
`
