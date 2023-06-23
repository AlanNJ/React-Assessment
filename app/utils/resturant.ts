export async function getAllResturants() {
	const response = await fetch("/api/resturants/new", {
		method: "GET",
	});

	return response.json();
}
