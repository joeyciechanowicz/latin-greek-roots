import {Injectable} from '@angular/core';
import {rootData, trieData, lettersOffsets} from './roots';
import {Alphabet} from '../../alphabet';

export interface Root {
    r: string[];
    o: number;
    m: string;
    e: string[];
}

export interface RootAndIndex {
    root: Root;
    index: number;
}

const VALUES_KEY = '$r';

@Injectable()
export class DataService {


    constructor() {

    }

    public getByLetter(letter: string): Root[] {
        const offsets = lettersOffsets[letter];
        return rootData.slice(offsets.start, offsets.end + 1) as Root[];
    }

    public getRootsByPrefixSearch(prefix: string): RootAndIndex[] {
        if (prefix === '') {
            return [];
        }

        let items: RootAndIndex[] = [];

        let node = trieData;
        let i = 0;
        while (i < prefix.length) {
            const char = prefix[i];
            items = items.concat(this.lookupRoots(node[VALUES_KEY]));

            if (node[char]) {
                node = node[char];
            }

            i++;
        }

        console.log('idxs', this.getAllRootsFromNodeChildren(node), 'items', items);

        items = items.concat(
            this.lookupRoots(node[VALUES_KEY]),
            Object.values<number>(this.getAllRootsFromNodeChildren(node)
                .reduce((acc, idx) => {
                    acc[idx] = idx;
                    return acc;
                }, {}))
                .map(x => ({index: x, root: rootData[x]}))
        );

        console.log('items', items);

        return items;
    }

    private lookupRoots(indices: number[]): RootAndIndex[] {
        if (!indices) {
            return [];
        }

        return indices.map(idx => ({
            index: idx,
            root: rootData[idx]
        }));
    }

    private getAllRootsFromNodeChildren(node): number[] {
        return [].concat.apply([],
            Alphabet.filter(letter => node[letter])
                .map(letter => {
                    if (node[letter]) {
                        return this.getAllRootsFromNodeChildren(node[letter]);
                    } else {

                    }
                }).concat(node[VALUES_KEY] || [])
        );
    }

}
