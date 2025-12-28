import dgram from 'dgram';

export default async function handler(req, res) {
    const serverIP = '151.243.226.80';
    const serverPort = 7777;

    try {
        // Minimal SA-MP query using UDP
        const client = dgram.createSocket('udp4');
        const message = Buffer.from([0xFE, 0xFD, 0x09, 0x00, 0x00, 0x00, 0x00]);
        
        client.send(message, serverPort, serverIP);

        client.on('message', (msg) => {
            // Parse response (simple example, adjust as needed)
            const players = Math.floor(Math.random()*50); // placeholder
            client.close();
            res.status(200).json({
                online: true,
                players: players,
                maxplayers: 100,
                playersList: Array.from({length:players}, (_,i)=>`Player${i+1}`)
            });
        });

        client.on('error', () => {
            client.close();
            res.status(200).json({online:false, players:0, maxplayers:0, playersList:[]});
        });

    } catch(e) {
        res.status(200).json({online:false, players:0, maxplayers:0, playersList:[]});
    }
}
