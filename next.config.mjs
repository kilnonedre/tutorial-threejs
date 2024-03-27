/** @type {import('next').NextConfig} */
const nextConfig = {}

if (process.env.NEXT_PUBLIC_TT_ENV === 'production') {
  nextConfig.output = 'export'
  nextConfig.basePath = `/${process.env.NEXT_PUBLIC_TT_PROFILE}`
}

export default nextConfig
