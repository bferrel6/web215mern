const localAddress = 'http://localhost:5555';
const remoteAddress = 'https://web215mern-server.onrender.com:10000';

export const serverAddress = import.meta.env.PROD ? remoteAddress : localAddress;