const localAddress = 'http://localhost:5555';
const remoteAddress = 'https://web215mern-server.onrender.com';

export const serverAddress = import.meta.env.PROD ? remoteAddress : localAddress;