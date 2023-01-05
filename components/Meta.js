import Head from 'next/head';
import React from 'react';

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />

		</Head>
	);
};

Meta.defaultProps = {
	title:"digital service lab",
	keywords:"digital service",
	description:"welcome to digital service lab"
}

export default Meta;