import React from 'react';
import { FaCode } from "react-icons/fa";
import { FaDatabase } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon size="3rem" color="#fefefe" />;

export const featuresData = [
	{
		name: 'Frontend',
		description:
			[
                "Developing Javascript and TypeScript web applications using React, Angular and other related frameworks.",
            ],
		icon: iconStyle(FaCode),
		imgClass: 'one',
	},
	{
		name: 'Backend',
		description: [
            "Developing server-side applications using Node.js, PHP and other related technologies.",<br/>,
            "MongoDB and MySQL to create and manage databases.",
          ],
		icon: iconStyle(FaDatabase),
		imgClass: 'two',
	},
	{
		name: 'Design',
		description: [
            "CSS3, HTML5 to create create user-friendly web pages visual effects and animations.",<br/>,
        ],
		icon: iconStyle(FaCss3Alt),
		imgClass: 'three',
	},
	// {
	// 	name: 'Development',
	// 	description: [
    //         "Ajax, JSON, RESTful web services, and API integration.",<br/>,
    //         "Docker to create and manage containers.",<br/>,
    //         "Git to manage source code.",
    //     ],
	// 	icon: iconStyle(FaDev),
	// 	imgClass: 'four',
	// },
];