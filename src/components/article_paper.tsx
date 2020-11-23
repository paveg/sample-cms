import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';
import ButtonLink from './button_link';
import { Article } from '../types/articles';

type Props = {
  article: Article;
};

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const formatDate = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const ArticlePaper: React.FC<Props> = ({ article }) => {
  const date = new Date(article.date);

  return (
    <Paper variant="outlined">
      <Box p={1}>
        <Typography variant="caption">
          <u>{formatDate(date)}</u>
        </Typography>
        <br />
        {article.eyeCatching && (
          <StyledImage src={article.eyeCatching.url} alt="an eye-catching image" />
        )}
        <Box textAlign="center">
          <ButtonLink small href={`articles/${article.id}`}>
            {article.title}
          </ButtonLink>
        </Box>
      </Box>
    </Paper>
  );
};

export default ArticlePaper;
