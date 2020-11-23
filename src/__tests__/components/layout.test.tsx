import * as React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../../components/layout';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({}));

describe('Layout', () => {
  describe('when include string children', () => {
    const component = renderer.create(<Layout>children</Layout>);
    it('renders correctly component', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('when include children container', () => {
    const children = <div>children</div>;
    const component = renderer.create(<Layout>{children}</Layout>);
    it('renders correctly component', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
