import React from 'react'
import { Container } from 'react-bootstrap'
import FormSearch from './FormSearch'
import './header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Container >
                <div className='inpt'>
                    <FormSearch />
                </div>
            </Container>
        </div>
    )
}

export default Header