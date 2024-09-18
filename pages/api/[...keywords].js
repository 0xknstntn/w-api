export default async function handler(req, res) {
        switch (req.method) {
                case "POST":
                        var url = "";
                        if ((req.query.keywords).length != 0) {
                                for (let index = 0; index < (req.query.keywords).length; index++) {
                                        url += "/" + req.query.keywords[index]
                                }
                        }
                        var data = await fetch("http://89.108.83.252:3500" + url, {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(req.body),
                        });

                        var dataJson = await data.json()
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Content-Type', 'application/json');
                        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                        res.status(200).json(dataJson);
                        break;
        
                case "GET":
                        var url = "";
                        if ((req.query.keywords).length != 0) {
                                for (let index = 0; index < (req.query.keywords).length; index++) {
                                        url += "/" + req.query.keywords[index]
                                }
                                delete req.query.keywords
                                if (Object.keys(req.query).length != 0) {
                                        url += "?" + new URLSearchParams(req.query).toString()
                                }
                        }

                        var data = await fetch("http://89.108.83.252:3500" + url, {
                                mode: 'cors',
                        });


                        var dataJson = await data.json()
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Content-Type', 'application/json');
                        res.status(200).json(dataJson);
                        break;
        }
}