import { TT_ENV, TT_PROFILE } from '@/env'

export const formatPublicPath = (path: string) => {
  const prefix = '/' + TT_PROFILE
  const isStartWithPoint = path.startsWith(prefix)
  const isProduction = TT_ENV === 'production'
  if (
    (isStartWithPoint && isProduction) ||
    (!isStartWithPoint && !isProduction)
  ) {
    return path
  } else if (isStartWithPoint && !isProduction) {
    return path.substring(prefix.length)
  } else {
    // (!isStartWithPoint && isProduction)
    return prefix + path
  }
}
