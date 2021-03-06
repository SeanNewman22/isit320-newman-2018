import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';
import ElfHeader from "./ElfHeader";

configure({ adapter: new Adapter() });

describe('Jest Create React Tests', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders h1 header', () => {
        const wrapper = shallow(<App/>);
        const unknown = <ElfHeader/>;
        elfDebugEnzyme.getLast(wrapper, 'ElfHeader', true);
        expect(wrapper.contains(unknown)).toEqual(true);
    });
});