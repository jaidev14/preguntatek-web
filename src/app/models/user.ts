import { get, set } from 'lodash';

export class User {
    uid: string = '';
    email: string = '';
    displayName: string = '';

    constructor(data: any) {
        propertyResolvers.forEach(({ property, path }) => {
            set(this, property, get(data, path));
        });
    }
}

interface PropertyResolver {
    property: string;
    path: string;
    defaultValue?: any;
}

const propertyResolvers: PropertyResolver[] = [
    { property: 'uid', path: 'uid' },
    { property: 'email', path: 'email' },
    { property: 'displayName', path: 'displayName'},
];