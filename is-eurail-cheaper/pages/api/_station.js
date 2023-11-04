import createHafasClient from 'db-hafas'
const { locations: stations } = createHafasClient('bahn.guru')

const _station = (s) => {
	// eslint-disable-next-line prefer-promise-reject-errors
	if (!s) return Promise.reject(false)
	return stations(s)
		.then(
			(data) => {
				if (data.length > 0) return data[0]
				return false
			})
		.catch(
			(error) => false,
		)
}

export const trip = async (id) => {
	return await fetch(`https://v6.db.transport.rest/trips/${encodeURIComponent(id)}`)
		.then(response => response.json())
		.then(result => {
			if (result.trip === null || result.trip === undefined) {
				console.log("couldn't find trip", id);
				return null;
			}
			console.log("found trip", id);
			return {
				"origin": result.trip.origin,
				"destination": result.trip.destination
			}
		});
}

export default _station;
