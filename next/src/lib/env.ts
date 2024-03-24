export default process.env.NODE_ENV === 'development' ||
	process.env.IS_STAGING === 'true'

export const BASE_URL = 'https://takumi-maru-web.vercel.app'
