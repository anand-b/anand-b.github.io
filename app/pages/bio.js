import React from 'react';

const name = {
    firstName : "Anand",
    lastName : "Balan"
}
const bio = {
    name : {
        ...name
    },
    description : "Anand Balan is a computer science graduate student at the University of Texas at Dallas.",
    openGraph : {
        url : "http://anand-b.github.io",
        title : `${name.firstName} ${name.lastName}`,
        description : "Computer Science Graduate Student at the UT Dallas",
        type : "website"
    },
    twitter : {
        card : "summary",
        title : `${name.firstName} ${name.lastName}`,
        description : "Computer Science Graduate Student at the UT Dallas"
    },
    positions : [
        {
            id : "1",
            role : "Computer Science Graduate Student",
            org : "The University of Texas at Dallas"
        }
    ],
    social : [
        {
            id : "1",
            name : "LinkedIn",
            icon : "fab fa-linkedin-in fa-lg",
            url : "https://www.linkedin.com/in/anandbalan1",
            title : "anandbalan1"
        },
        {
            id : "2",
            name : "GitHub",
            icon : "fab fa-github fa-lg",
            url : "https://github.com/anand-b",
            title : "anand-b"
        },
        {
            id : "3",
            name : "Blog",
            icon : "fab fa-medium fa-lg",
            url : "https://medium.com/@anandb",
            title : "anandb"
        },
        {
            id : "4",
            name : "Twitter",
            icon : "fab fa-twitter fa-lg",
            url : "https://twitter.com/nand_01",
            title : "nand_01"
        }
    ]
}

export default bio;