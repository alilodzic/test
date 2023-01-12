import { useEffect, useRef } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useGlobalContext } from '../context/context';

const FormSearch = () => {
    const {setSearchTerm, resultTitle} = useGlobalContext();
    const searchText = useRef('')
    const arr = []

    for (let i = 10; i < 1501; i = i + 10) {
        arr.push(i)

    }
    useEffect(() => {
        const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
        console.log(total)

   

    }, [])
    const handSubmit = (e) => {
        e.preventDefault() ;
        setSearchTerm(searchText.current.value);

        console.log('first')
    }

    return (
        <form onSubmit={handSubmit}>
            <FloatingLabel
                controlId="floatingInput"
                label="book search"
                className="mb-3"
            >
                <Form.Control type="text"   placeholder='book search' ref={searchText}
                />
            </FloatingLabel>
            {resultTitle && <Form.Text id="passwordHelpBlock" muted>
            {resultTitle}
        </Form.Text> }
        </form>
    )
}

export default FormSearch