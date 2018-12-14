export let server = {
	protocol: 'http',
	host: 'localhost',
	port: '9001'
}

export let url = `${server.protocol}://${server.host}:${server.port}`


export default server;