
module.exports = async (io) => {
    const usersSocket = []
    io.on('connection',(socket) => {
    const {_id} = socket.handshake.query;
    usersSocket[_id] = socket.id;
    console.info("usuario conectado ",socket.id);
    socket.on('disconnect',() =>  {
        delete usersSocket[_id]
    })
 })
}