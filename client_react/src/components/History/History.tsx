import React, { useState } from 'react'
import { Sender } from '../../components/Sender'
import { Store } from '../../Store'

export function History() {

	const [history, setHistory] = useState([])

	return (
		<div>
			{Store.app.isAuth && <Sender/>}
			
		</div>
	);
}

