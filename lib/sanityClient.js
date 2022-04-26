import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'pnnpvsyj',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk1o2QjGPRWjr49y6x6NDYPwHUbzBJqdedXGC5JIWG8bmwM19zsYiXDNna9wbwTNTBIdTieJ5vsmDri03X1KkU49kqp04GYs8FO2oWzzUkfuPvgIQJUJJKizrzpZrPgLesheNtsO1ivzN2MNLQ6IAfWvXtO1La9ysfigtqJby3n9zH7kUWeu',
  useCdn: false,
})
