export const fixPackages = (packages) => {
    while (packages.includes('(')) {
        packages = packages.replace(/\(([^()]+)\)/g, (_, inner) => [...inner].reverse().join(''));
    }
    return packages
}