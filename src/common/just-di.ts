const DependencyCreators = {};

const Dependencies = {};

export function registerDependency(key: string, creator: () => object): void {
    DependencyCreators[key] = creator;
}

export function getDependency<T>(key: string): T {
    const creator = DependencyCreators[key];

    if (!creator) {
        throw new Error('No dependency registered');
    }

    if (!Dependencies[key]) {
        Dependencies[key] = creator();
    }

    return Dependencies[key];
}
