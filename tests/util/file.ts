
export function evaluate (file: string, resolve: (value: string | PromiseLike<string>) => void, reject: (value?: string | PromiseLike<string>) => void): void {
  if (file === undefined) {
    reject('Wrong file path')
  }
  resolve(file)
}

export default {
  evaluate
}
