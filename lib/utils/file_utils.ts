import ky from 'ky';

export function join(...args: string[]): string {
  let parts: string[] = [];
  for (let i: number = 0, l = args.length; i < l; i++) {
    parts = parts.concat(args[i].split('/'));
  }
  let newParts: string[] = [];
  for (let i: number = 0, l = parts.length; i < l; i++) {
    let part: string = parts[i];
    if (!part || part === '.') continue;
    if (part === '..') newParts.pop();
    else newParts.push(part);
  }
  if (parts[0] === '') newParts.unshift('');
  return newParts.join('/') || (newParts.length ? '/' : '.');
}

export async function getHeaders(filePath: string): Promise<Headers> {
  return ky.head(filePath).then(r => r.headers);
}

export async function getFile(filePath: string): Promise<string> {
  return ky.get(filePath).text();
}

export async function getJSON<T extends Object = JSON>(
  filePath: string
): Promise<T> {
  return ky.get(filePath).json();
}
