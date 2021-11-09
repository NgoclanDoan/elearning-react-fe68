import axios from 'axios';
import React, { useState } from 'react';
import Loader from 'components/Loader';

const withData = (WrappedComponent) => {
	return (props) => {
		const [data, setData] = useState([]);

		useEffect(() => {
			axios({
				url: props.dataSource,
				method: 'GET',
			})
				.then((response) => {
					setData(response.data.content.slice(0, 10));
				})
				.catch((err) => {
					console.log(err);
				});
		}, []);

		if (data.length < 1) return <Loader />;

		return <WrappedComponent data={data} {...props} />;
	};
};

export default withData;
