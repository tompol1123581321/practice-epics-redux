import axios from 'axios';
import * as React from 'react';
import { Button, Col, Container, Form, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addNews, fetchTodo } from './news/newsSlice';
import { getNews } from './news/selectors';
import { News } from './news/types';

const App = () => {
  const news = useSelector(getNews);

  const dispatch = useDispatch();

  const [headerValue, setHeaderValue] = React.useState('');
  const [bodyValue, setBodyValue] = React.useState('');

  const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBodyValue(e.target.value);
  };
  const onChangeHeader = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderValue(e.target.value);
  };
  const submit = () => {
    const newNews: News = {
      id: Math.random() * 1000,
      head: headerValue,
      body: bodyValue
    };
    dispatch(addNews(newNews));
    dispatch(fetchTodo(''));
    setBodyValue('');
    setHeaderValue('');
  };

  return (
    <div>
      <Container>
        <Form style={{ maxWidth: '20rem', margin: 'auto' }}>
          <Form.Group onChange={onChangeHeader} controlId="exampleForm.ControlInput1">
            <Form.Label>Header</Form.Label>
            <Form.Control value={headerValue} type="Header" placeholder="something" />
          </Form.Group>

          <Form.Group onChange={onChangeBody} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control value={bodyValue} as="textarea" rows={3} />
          </Form.Group>
          <Button onClick={submit}>Save</Button>
        </Form>
        <Col style={{ maxWidth: '15rem' }}>
          {news.length ? (
            <ListGroup>
              {news.map((n: News) => (
                <ListGroup.Item>{n.head}</ListGroup.Item>
              ))}
            </ListGroup>
          ) : null}
        </Col>
      </Container>
    </div>
  );
};

export default App;
