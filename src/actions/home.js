

export const handleChangeTab = (index)=>{
	return {
		type: 'HANDLECHANGETAB',
		index
	}
}


export const header = (title)=>{
	return {
		type: 'HEADER',
		title
	}
}