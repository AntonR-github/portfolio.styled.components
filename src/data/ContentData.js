import { 
	picture1, 
	picture2, 
	picture3,
	contentBG1,
	contentBG2,
	contentBG3,
} from '../assets';

const imageStyle = (image) => image;



export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'מי אנחנו',
	},
	headline: "הסיפור שלנו",
	description: 'אנחנו קבוצה של חברים שמאמינים שכל אחד יכול להשפיע על העולם ולהפוך אותו למקום טוב יותר',
	buttonLabel: 'עוד עלינו',
	linkTo: '/story',
	imgStart: 'start',
	img: imageStyle(picture1),
	background: imageStyle(contentBG1),
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'קצת עלינו',
	},
	headline: 'האימפקט שלנו',
	description: 'אנחנו מאמינים שכל אחד יכול להשפיע על העולם ולהפוך אותו למקום טוב יותר',
	buttonLabel: 'עוד עלינו',
	linkTo: '/impact',
	imgStart: 'start',
	img: imageStyle(picture2),
	background: imageStyle(contentBG2),
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'התנדבו אצלנו',
	},
	headline: 'תמכו בנו - התנדבות',
	description:
		'בואו להיות חלק מהסיפור שלנו ולעזור לנו להמשיך להפיץ את האהבה והחמלה בעולם',
	buttonLabel: 'התנדבות',
	linkTo: '/contact',
	imgStart: '',
	img: imageStyle(picture3),
	background: imageStyle(contentBG3),
	start: 'true',
};

