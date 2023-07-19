module.exports = (property) => {
	let type = property.getType();

	if (property.getType().includes("|") && property.isNullable()) {
		type = property.getType() + "|null";
	}
	else if (property.isNullable()) {
		type = "?" + property.getType();
	}

	return `
	/**
	* Sætter værdien af ${property.getName()}
	* @param ${type} \$${ property.getName()}
	*/
	public function ${property.setterName()}(${type} \$${ property.getName() }): void
	{
		$this->${property.getName()} = \$${property.getName()};
	}
	`
}