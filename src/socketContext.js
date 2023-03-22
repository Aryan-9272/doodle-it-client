import React, { createContext } from "react";
import io from "socket.io-client";

export const socket = io.connect("http://192.168.0.117:5000");

const SocketContext = createContext(socket);

export default SocketContext;
