async function send (props: Record<string, unknown>): Promise<void> {
  const regexp = /[:punct:\t]+/
  const form = chomp(validate(props, regexp))
  const csv = format(form)
  const email = (await form).email
  if (typeof email === 'string') {
    action(email, await csv)
  }
}

/**
 * Validate User data filled in form
 * @param form user data
 * @param pattern pattern
 * @returns validated form
 */
function validate (form: Record<string, unknown>, pattern: RegExp): PromiseLike<Record<string, unknown>> {
  return new Promise<Record<string, unknown>>((resolve, reject) => {
    for (const member in Object.values(form))
    {
      if (typeof member === 'string') {
        if (member.search(pattern) !== 0) {
          reject(form)
        }
      }
    }
    resolve(form)
  })
  .catch(reason => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('form is not valid data entry.', reason)
    }
    return reason
  })
}

/**
 * Chomp space and newline derived characters
 * @param form user data
 * @returns chomped user data
 */
async function chomp(form: PromiseLike<Record<string, unknown>>): Promise<Record<string, unknown>> {
  return JSON.parse(JSON.stringify(form).replace(/[.\r\n\t]+$/, ''))
}

/**
 * Receive an Object and Convert it into CSV
 * @param form user data
 * @returns user data formated in CSV
 */
async function format (form: PromiseLike<Record<string, unknown>>): Promise<Buffer> {
  let csv = ''
  for (const key in Object.keys(await form)) {
    csv += `${key}, `
  }
  csv += '\n'
  for (const value in Object.values(await form)) {
    csv += `${value}, `
  }
  return Buffer.from(csv.replace(/[.,]+$/, '\n'))
}

function action (mailto: string, attachment: Buffer): PromiseLike<void> {
  return Promise.resolve(attachment)
  .then(attachment => {
    return {
      ...document.createElement('a'),
      href: 'data:text/csv;charset=utf-8,' + encodeURI(attachment.toString()),
      target: '_blank',
      //provide the name for the CSV file to be downloaded
      download: `form-${Date.now()}.csv`
    }
  })
  .then(hiddenElement => {
    hiddenElement.click()
    hiddenElement.remove()
    window.open(mailto)
  })
  .catch(reason => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Cannot prepare data when buffer is empty.')
    }
    return reason
  })
}

export interface Email {
  toEmail: string,
  toName: string
  subject: string,
  body: string
}

export interface HTMLEmail extends Email {
  bodyHTML: string,
  attachments: string[],
  titleColor: string
}

export default {
  send
}
