export const fixPackages = (packages) => {
    while (packages.includes('(')) {
        packages = packages.replace(
            /\(([^()]+)\)/g, 
            (_, inner) => inner
                .split('')
                .reverse()
                .join('')
        );
    }
    return packages
}