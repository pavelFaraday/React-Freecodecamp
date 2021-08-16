/* ------------------------ PropTypes, default Props ------------------------ */

import React from "react";
import PropTypes from "prop-types"; // Setup: 1. import speial PropTypes package

// how import image; name should be anything!
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
	// Setup: 3 (Way #2) - Setup default Props:

	// only If 'image' is there/consists, return 'image.url'
	const url = image && image.url;
	return (
		<article className="product">
			<img src={url || defaultImage} alt={name || "default name"} />
			<h4>{name}</h4>
			<p>${price || 3.99}</p>
		</article>
	);
};

// Setup: 2. Setup PropTypes property on the component
Product.propTypes = {
	// what kind of props we are getting (string, boolean, number, object or an array..)
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

// Setup: 3 (Way #1) - Setup default Props:
/* 
Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage,
}; */

export default Product;
