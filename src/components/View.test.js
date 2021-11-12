import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from "../services/articleServices";

jest.mock('../services/articleServices');

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce([]);
    render(<View />);
   
    await waitFor(() => {
      const articles = screen.queryAllByTestId("article");
      expect(articles).toHaveLength(0);
  
  });
})

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce([
        {
            id: 1,
            headline: "test article 1",
            author: "test author 1",
            createdOn: "test createdOn 1",
            summary: "test summary 1",
            body: "test body 1"
        },
        {
            id: 2,
            headline: "test article 2",
            author: "test author 2",
            createdOn: "test createdOn 2",
            summary: "test summary 2",
            body: "test body 2"
        },
        {
            id: 3,
            headline: "test article 3",
            author: "test author 3",
            createdOn: "test createdOn 3",
            summary: "test summary 3",
            body: "test body 3"
        }
    ]);
    render(<View />);
    await waitFor(() => {
      const articles = screen.queryAllByTestId("article");
      expect(articles).toHaveLength(3);
    });
  });

