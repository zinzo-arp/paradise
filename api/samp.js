export default async function handler(req, res) {
    try {
        // Use a reliable SA-MP query API
        const serverIP = '151.243.226.80';
        const apiResponse = await fetch(`https://samp-api.tk/server/${serverIP}`);
        const data = await apiResponse.json();

        const responseData = {
            online: data.online || false,
            players: data.players || 0,
            maxplayers: data.maxplayers || 0,
            playersList: data.list ? data.list.map(p => p.nickname) : []
        };

        res.status(200).json(responseData);

    } catch (error) {
        console.error(error);
        res.status(200).json({
            online: false,
            players: 0,
            maxplayers: 0,
            playersList: []
        });
    }
}
