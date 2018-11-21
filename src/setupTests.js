import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })

// global.shallow = (element, options) => {
// 	const enzymeWrapper = shallow(element, options)
// 	return {
// 		toJSON: () => toJSON(enzymeWrapper),
// 		component: enzymeWrapper
// 	}
// }
