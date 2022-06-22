import React from 'react';
import { shallow } from 'enzyme';

import ZipyWebNetwork from './../../src/ZipyWebNetwork';

it('renders without crashing', () => {
  const element = shallow(<ZipyWebNetwork />);
  expect(element).toMatchSnapshot();
});
