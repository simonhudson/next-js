'use strict';

import React from 'react';
import SiteHeader from 'components/site-header';

const About = props => {
	return (
		<>
		<SiteHeader {...props} />
			<div className="wrap--narrow">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel turpis erat. Donec lacinia enim sollicitudin quam dapibus, non venenatis sapien mollis. Morbi non aliquam tellus. Duis auctor est sit amet mattis hendrerit. Etiam enim tortor, luctus at cursus eget, ultricies ut tortor. Aenean blandit fringilla sem in ultricies. Mauris posuere lacus nec tellus laoreet, vel varius magna accumsan.</p>
				<p>Donec eu ante ligula. Integer sed maximus dui. Curabitur vehicula arcu quis sagittis luctus. Suspendisse potenti. Fusce eros diam, blandit sit amet lorem eget, mollis egestas dolor. Morbi luctus, erat a sollicitudin blandit, orci augue auctor ex, eget rutrum erat lectus id sapien. Sed sed mollis odio, interdum eleifend diam.</p>
				<p>Maecenas vitae turpis nisl. Proin placerat ut tortor eget scelerisque. Orci varius <a href="#">natoque penatibus et magnis</a> dis parturient montes, nascetur ridiculus mus. Vestibulum malesuada vel lacus in iaculis. Etiam vitae efficitur ipsum. Phasellus sed sapien elementum, hendrerit ex ac, viverra sem. Aliquam fermentum, turpis non vehicula pharetra, turpis nibh tempus augue, non auctor libero nibh sit amet turpis. Cras bibendum cursus enim, tempus porttitor est mollis non. Curabitur ut imperdiet lectus. Etiam cursus sapien in mauris dignissim venenatis.</p>
			</div>
		</>
	);
};

export default About;
