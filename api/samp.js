export default function handler(req, res) {
    res.status(200).json({
        online: true,
        players: 23,         // placeholder number
        maxplayers: 100,     // placeholder max
        playersList: [
            "Player1",
            "Player2",
            "Player3"
        ]
    });
}
