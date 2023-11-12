import { carousel, carousel2, carousel3, carousel4 } from '../assets';

const imageStyle = (image) => image;

export const data = [

	{
		title: 'כותרת ראשונה',
		description: 'placeholder text placeholder text placeholder text placeholder text placeholder text',
		image: imageStyle(carousel),
		buttonLabel: 'לגלריה',
		navigateTo: '/what',
	},	
	{
		title: 'כותרת שניה',
		description: 'placeholder text placeholder text placeholder text placeholder text',
		image: imageStyle(carousel2),
		buttonLabel: 'לגלריה',
		navigateTo: '/what',
	},
	{
		title: 'כותרת שלישית',
		description: 'placeholder text placeholder text placeholder text placeholder text',
		image: imageStyle(carousel3),
		buttonLabel: 'לגלריה',
		navigateTo: '/what',
	},
	{
		title: 'כותרת רביעית',
		description:
			'placeholder text placeholder text placeholder text placeholder text placeholder text',
		image: imageStyle(carousel4),
		buttonLabel: 'לגלריה',
		navigateTo: '/what',
	},

];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};