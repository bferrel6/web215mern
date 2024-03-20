const localAddress = 'http://localhost';
const remoteAddress = 'https://web215mern-server.onrender.com';

export const serverAddress = import.meta.env.PROD ? remoteAddress : localAddress;