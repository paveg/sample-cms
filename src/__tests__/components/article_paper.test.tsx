import * as React from 'react';
import renderer from 'react-test-renderer';
import ArticlePaper from '../../components/article_paper';
import { Article } from '../../types/articles';

const dateString = '2020-11-23T00:00:00.000Z';
const article: Article = {
  id: 'testId',
  title: 'testTitle',
  content: 'testContent',
  date: dateString,
  eyeCatching: { url: 'https://example.com/img' },
  createdAt: dateString,
  updatedAt: dateString,
  publishedAt: dateString,
};

describe('Layout', () => {
  describe('when does not include children', () => {
    const component = renderer.create(<ArticlePaper article={article} />);
    it('renders correctly component', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
