import self from "../img/CEyOecbdCmDEEKEuAc4hA-transformed.png"
import mock1 from "../img/smartmockups_lssq64dm.png"
import mock2 from "../img/razorpay clone.png"
import mock3 from "../img/smartmockups_lssqcwu2.png"
import mock4 from "../img/smartmockups_lssr0wwl.png"
import mock5 from "../img/smartmockups_lssql7jq.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Subham",
    lastName: "Mohnaty",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Front-end Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "SDE at ata Technologies"
        },
        {
            emoji: "📧",
            text: "sm4646779@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://www.instagram.com/iamrammy21/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/skmbdk",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/subhammohanty21/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/subhammohanty",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! subham. I'm a sde for Tata Technologies. I studied cse at SOA university, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['React', 'After Efect', 'Final cut pro']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        // {
        //     label: 'theater',
        //     emoji: '🎭'
        // },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://sundownbyrammy.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/skmbdk/sundown", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://razorpayclonebyrammy.netlify.app/",
            source: "https://github.com/skmbdk/razorpayclone",
            image: mock2
        }, {
            title: "Project 3",
            live: "https://applevisionbyrammy.netlify.app/",
            source: "https://github.com/skmbdk/applevision",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://discordclonebyrammy.netlify.app/",
            source: "https://github.com/skmbdk/discordclone",
            image: mock4
        },
       
        {
            title: "Project 5",
            live: "https://golfbyrammy.netlify.app/",
            source: "https://github.com/skmbdk/golfsiteby_rammy",
            image: mock5
        }
    ]
}
