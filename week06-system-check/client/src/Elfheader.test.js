import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';
import ElfHeader from "./ElfHeader";

configure({ adapter: new Adapter() });

describe('Elfheader suite', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ElfHeader/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders h1 header test', () => {
        const wrapper = shallow(<ElfHeader/>);
        console.log('TESTER', wrapper.find('legend').debug());
    });

    it('renders h1 header', () => {
        const wrapper = shallow(<ElfHeader/>);
        const unknown = <h1>System Check</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(unknown)).toEqual(true);
    });
});