import { describe, it, expect } from 'vitest';
import { isRobotBack } from '../../../src/adventjs/13_robot_back/isRobotBack';

describe('isRobotBack', () => {

    it('si le pasamos primer caso nos devuelve [1, 0]', () => {
        expect(isRobotBack("R")).toEqual([1, 0]);
    })

    it('si le pasamos segundo caso nos devuelve true', () => {
        expect(isRobotBack("RL")).toEqual(true);
    })

    it('si le pasamos tercer caso nos devuelve true', () => {
        expect(isRobotBack("RLUD")).toEqual(true);
    })

    it('si le pasamos cuarto caso "*RU" nos devuelve [2,1]', () => {
        expect(isRobotBack("*RU")).toEqual([2,1]);
    })

    it('si le pasamos quinto caso "R*U" nos devuelve [1,2]', () => {
        expect(isRobotBack("R*U")).toEqual([1,2]);
    })

    it('si le pasamos sexto caso LLL!R nos devuelve [-4,0]', () => {
        expect(isRobotBack("LLL!R")).toEqual([-4,0]);
    })

    it('si le pasamos septimo caso R?R nos devuelve [1,0]', () => {
        expect(isRobotBack("R?R")).toEqual([1,0]);
    })

    it('si le pasamos octavo caso U?D nos devuelve true', () => {
        expect(isRobotBack("U?D")).toEqual(true);
    })

    it('si le pasamos noveno caso R!L nos devuelve [2,0]', () => {
        expect(isRobotBack("R!L")).toEqual([2,0]);
    })

    it('si le pasamos decimo caso nos devuelve correcto', () => {
        expect(isRobotBack("U!D")).toEqual([0,2]);
    })

    it('si le pasamos undecimo caso nos devuelve correcto', () => {
        expect(isRobotBack("R?L")).toEqual(true);
    })

    it('si le pasamos duodecimo caso nos devuelve correcto', () => {
        expect(isRobotBack("U?U")).toEqual([0,1]);
    })

    it('si le pasamos 13 caso nos devuelve correcto', () => {
        expect(isRobotBack("*U?U")).toEqual([0,2]);
    })

    it('si le pasamos 14 caso nos devuelve correcto', () => {
        expect(isRobotBack("U?D?U")).toEqual(true);
    })

    
})
