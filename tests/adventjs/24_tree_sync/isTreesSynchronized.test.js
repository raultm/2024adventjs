import { describe, it, expect } from 'vitest';
import { isTreesSynchronized } from '../../../src/adventjs/24_tree_sync/isTreeSynchronized';

describe('isTreesSynchronized', () => {

    const tree1 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' }
    }

    const tree2 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '⭐' },
    }

    const tree3 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '🎁' }
    }

    const tree4 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' }
    }

    it('si le pasamos primer caso nos devuelve resultado correcto', () => {
        expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '🎄'])
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        expect(isTreesSynchronized(tree1, tree3)).toEqual([false, '🎄'])
    })

    it('si le pasamos segundo caso nos devuelve resultado correcto', () => {
        expect(isTreesSynchronized(tree1, tree4)).toEqual([false, '🎄'])
    })


})
