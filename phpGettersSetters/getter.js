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
	* Henter værdien af ${property.getName()}
	* @return ${type} 
	*/
   	public function ${property.getterName()}(): ${type}
	{
		return $this->${property.getName()};
   	}
   `
}