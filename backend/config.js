const localPort = 5555;
const renderPort = 10000;

export const PORT = process.env.NODE_ENV === 'production' ? renderPort : localPort;

export const mongoDBURL = 
    "mongodb+srv://bferrel6:TKIT3GhFmJgYdKbC@mern-music-store.7otix9v.mongodb.net/record-collection?retryWrites=true&w=majority&appName=mern-music-store"