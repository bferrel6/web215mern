const localAddress = 'localhost';
const remoteAddress = 'web215mern-server.onrender.com';

export const serverAddress = import.meta.env.PROD ? remoteAddress : localAddress;