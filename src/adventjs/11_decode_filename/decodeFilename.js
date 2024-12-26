function decodeFilename(filename) {
    //let nameWithExtensions = filename.split("_").slice(1).join("_")
    //splitUnderscore.shift();
    //let nameWithExtensions = splitUnderscore.join('_');
    let [name, extension, wrongextension] = filename.split("_")
      .slice(1)
      .join("_")
      .split(".")
    return `${name}.${extension}`
  }