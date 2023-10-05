import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/globalContext';

function Incomes() {
    const {addIncome} = useGlobalContext()
    return (
        <IncomesStyled>
            <InnerLayout>
                <h2>Incomes</h2>
                <div className='income-content'>
                    <div className='form-container'>Form Container</div>
                    <div className='incomes'></div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`

`;

export default Incomes