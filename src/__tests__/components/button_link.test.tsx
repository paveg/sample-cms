import * as React from 'react';
import renderer from 'react-test-renderer';
import ButtonLink from '../../components/button_link';

const testHref = '/test';
const testText = 'TEST';

describe('ButtonLink', () => {
  describe('when normal call', () => {
    const component = renderer.create(<ButtonLink href={testHref}>{testText}</ButtonLink>);
    it('renders correctly component', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('with small props', () => {
    const component = renderer.create(
      <ButtonLink href={testHref} small>
        {testText}
      </ButtonLink>,
    );
    it('renders correctly component', () => {
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
