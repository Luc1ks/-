import { createContext } from 'react'
import io from 'socket.io-client';
import socketUrl from '../urls/socketUrl';

const SocketContext = createContext({
    socket: io.connect(socketUrl)
})
export default  SocketContext;