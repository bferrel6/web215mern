export const PORT = 5555;

export const localMongoDBURL = 
    "mongodb+srv://bferrel6:TKIT3GhFmJgYdKbC@mern-music-store.7otix9v.mongodb.net/record-collection?retryWrites=true&w=majority&appName=mern-music-store"

const atlasAddresses = [
    '3.129.111.220',
    '3.134.238.10',
    '52.15.118.168'
]
const randomAtlasIP = atlasAddresses[Math.floor(Math.random() * atlasAddresses.length)];

export const remoteMongoDBURL = 
    `mongodb://bferrel6:TKIT3GhFmJgYdKbC@${randomAtlasIP}/record-collection?retryWrites=true&w=majority&appName=mern-music-store`