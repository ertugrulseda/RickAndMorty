import React, { useEffect,useState } from 'react';
import '../../pages/index.css';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
	const { id } = useParams();
	const [data,setData] = useState({});
	const [location,setLocation] = useState({});

	useEffect(async () => {
		const response = await fetch('https://rickandmortyapi.com/api/character/' + id);
		const jsondata = await response.json();
		setData(jsondata);
		setLocation(jsondata.location)
	}, []);

	console.log("Data",data);
	console.log("location",location.name);
return <div>
	<img src={data.image}></img>
	<h1>{data.name}</h1>
	<h3>{data.gender} </h3>
	<h3>{data.status} </h3>
	<h3>{location.name} </h3>
	

</div>;
}
export default CharacterDetail;
