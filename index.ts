switch (process.env.NODE_ENV) {
  case 'graphql':
    import('./index-gcp-ql')
    break
  case 'express':
    import('./index-gcp-express')
    break
  default:
    import('./index-local')
}
