export function removeExtension(file) {
  return file
    .split('.')
    .slice(0, -1)
    .join('.');
}

export function getCleanName(filename) {
  let standard = filename.match(/(.*)\.\(?\d{4}\)?\./); // https://en.wikipedia.org/wiki/Standard_(warez)
  if (!standard) {
    standard = filename.match(/(.*) \(\d{4}\)/); // variant like "Name (date) tags.ext"
  }
  const source = standard ? standard[1] : removeExtension(filename);
  return source
    .normalize()
    .replace(/\[[^\]]*]/g, ' ') // remove content in bracket
    .replace(/\./g, ' ')
    .replace(/\s+/, ' ')
    .replace(/(^\s*\d{4}\s*-)|(-\s*\d{4}\s*$)/, '') // remove starting or ending date (2018 - XXX) or (XXX - 2018)
    .trim();
}

export function getYear(filename) {
  let match = filename.match(/.+\.\(?(\d{4})\)?\./); // https://en.wikipedia.org/wiki/Standard_(warez)
  if (!match) {
    match = filename.match(/.+\((\d{4})\).*/); // variant like "Name (date) tags.ext"
  }
  if (!match) {
    match = filename.match(/.+ - (\d{4}) - .+/); // variant like "Name - date - tags.ext"
  }
  if (match) {
    return match[1];
  }
  const name = removeExtension(filename)
    .replace(/\[[^\]]*]/g, ' ') // remove content in bracket
    .trim();
  const year = name.match(/^(\d{4})\s*-/) || name.match(/-\s*(\d{4})$/); // starting or ending date
  if (year) {
    return year[1];
  }
  return '';
}
