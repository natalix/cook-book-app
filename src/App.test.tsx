import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);
it('should render <App/>', () => {
  expect(wrapper);
});
