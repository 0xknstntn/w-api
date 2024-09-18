export default async function handler(req, res) {
        const def = {
                code: 12,
                message: "Not Implemented",
                details: []
        }
        switch (req.method) {
                case "POST":
                        if (req.body == null) {
                                res.setHeader('Access-Control-Allow-Origin', '*');
                                res.status(200).json(JSON.stringify(def));
                        }
                        var data = await fetch("http://89.108.83.252:3500", {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(req.body),
                        });

                        var dataJson = await data.json()
                        console.log(dataJson)
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.status(200).json(dataJson);
                        break;
                case "GET":
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.status(200).json(JSON.stringify(def));
        }
}