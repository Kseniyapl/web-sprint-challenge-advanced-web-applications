import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: 12234567,
    headline: "test article",
    author: "test author",
    createdOn: "test createdOn",
    summary: "test summary.",
    body: "test body"
  };
  const associatedPress = {
      ...testArticle,
      author: ""
  }

test('renders component without errors', ()=> {
    render (<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render (<Article article={testArticle}/>);
    const headline= screen.getByText(/test article/i);
    const author= screen.getByText(/test author/i);
    const body= screen.getByText(/test body/i);
    const summary= screen.getByText(/test summary/i);


   expect(headline).toBeInTheDocument();
   expect(author).toBeInTheDocument();
   expect(body).toBeInTheDocument();
   expect(summary).toBeInTheDocument();

});

test('renders "Associated Press" when no author is given', ()=> {
    render (<Article article={associatedPress}/>);
    const anonymousAuthor = screen.getByText(/Associated Press/i);
    expect(anonymousAuthor).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const mHandleDelete = jest.fn();
    render (<Article article={testArticle} handleDelete={mHandleDelete}/>);
    const dButton = screen.getByTestId("deleteButton");
    userEvent.click(dButton);
    expect(mHandleDelete).toBeCalled();

});