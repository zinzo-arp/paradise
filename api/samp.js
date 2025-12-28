export default async function handler(req, res) {
    try {
        // Replace with your SA-MP server IP
        const serverIP = '151.243.226.80';

        // Call public SA-MP API
        const apiResponse = await fetch(`https://samp-api.tk/server/${serverIP}`);
        const data = await apiResponse.json();

        // Format data for your website
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
