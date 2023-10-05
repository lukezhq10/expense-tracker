import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Form() {
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        category: '',
        description: '',
        date: ''
    })

    const { title, amount, category, description, date } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    return (
        <FormStyled>
            <div className='input-control'>
                <input 
                    type='text'
                    value={title}
                    name={'title'}
                    placeholder='Salary Title'
                    onChange={handleInput('title')}
                />
            </div>
            <div className='input-control'>
                <input 
                    type='text'
                    value={'amount'}
                    name={'amount'}
                    placeholder={'Salary Amount'}
                    onChange={handleInput('amount')}
                />
            </div>
            <div className='input-control'>
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat={'dd/MM/yyyy'}
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`

`;

export default Form