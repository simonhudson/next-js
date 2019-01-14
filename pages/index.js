'use strict';

import React from 'react';

import Alert from 'components/alert';
import BlockQuote from 'components/blockquote';
import Button from 'components/button';
import Heading from 'components/typography/heading';

const Home = props => {
	return (
		<>
			<Heading level="1">Home</Heading>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel turpis erat. Donec lacinia enim sollicitudin quam dapibus, non venenatis sapien mollis. Morbi non aliquam tellus. Duis auctor est sit amet mattis hendrerit. Etiam enim tortor, luctus at cursus eget, ultricies ut tortor. Aenean blandit fringilla sem in ultricies. Mauris posuere lacus nec tellus laoreet, vel varius magna accumsan.</p>
			<p>Donec eu ante ligula. Integer sed maximus dui. Curabitur vehicula arcu quis sagittis luctus. Suspendisse potenti. Fusce eros diam, blandit sit amet lorem eget, mollis egestas dolor. Morbi luctus, erat a sollicitudin blandit, orci augue auctor ex, eget rutrum erat lectus id sapien. Sed sed mollis odio, interdum eleifend diam.</p>
			<p>Maecenas vitae turpis nisl. Proin placerat ut tortor eget scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum malesuada vel lacus in iaculis. Etiam vitae efficitur ipsum. Phasellus sed sapien elementum, hendrerit ex ac, viverra sem. Aliquam fermentum, turpis non vehicula pharetra, turpis nibh tempus augue, non auctor libero nibh sit amet turpis. Cras bibendum cursus enim, tempus porttitor est mollis non. Curabitur ut imperdiet lectus. Etiam cursus sapien in mauris dignissim venenatis.</p>
			
			<BlockQuote>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel turpis erat. Donec lacinia enim sollicitudin quam dapibus, non venenatis sapien mollis.
			</BlockQuote>
			
			<BlockQuote author="Joe Bloggs">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel turpis erat. Donec lacinia enim sollicitudin quam dapibus, non venenatis sapien mollis.
			</BlockQuote>
		</>
	);
};

export default Home;
