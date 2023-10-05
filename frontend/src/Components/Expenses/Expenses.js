import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layouts';

function Expenses() {
    return (
        <ExpensesStyled>
            <InnerLayout>
                <h2>Expenses</h2>
            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`

`;

export default Expenses