import React from 'react';
import { expect, test } from 'vitest'
import {render, screen, waitFor } from '@testing-library/react'
import Post from '../src/components/Post'
import { assert } from 'console';
 


test("Component post should have a text of title", async () => {
  const postPros = {id: 1, title: "Novo post", content: "Conteúdo do post", author: {name: "Testador"}}
  const wrapper = render(<Post post={postPros}/>)
  await waitFor(() => expect(screen.getByText("Novo post")).toBeInTheDocument())
  //screen.debug(); // text is present
});