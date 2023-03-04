const COLORS = {
		fire: "#ec8484",
		grass: "#78c850",
		water: "#6890f0",
		bug: "#a8b820",
		normal:"#A8A878",
		electric:"#F8D030",
		poison:"#A040A0",
		fighting:"#C03028",
		ground:"#E0C068",
		rock:"#b8a038",
		ghost:"#705898",
		steel:"#B8B8D0",
		psychic:"#f85888",
		ice:"#98d8d8",
		dragon:"#7038F8",
		dark:'#705848',
		fairy:"#EE99AC",
	}

export default function getColorTypes(type) {
  return COLORS[type];
}
