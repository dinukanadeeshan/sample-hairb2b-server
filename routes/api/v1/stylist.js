var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


var stylistList = [
    {
        id: 2,
        user_id: 1,
        is_active: true,
        created_date: new Date(),
        first_name: 'Margit',
        last_name: 'Redford',
        job_role: 'Educator',
        profile_pic: base64_encode(path.resolve('./public/images/margit.jpg')),
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'the colour Queen of Perth, owner of East Fremantle\'s leading Hair Lounge - Eighty One on George. Claire and her hand selected and exceptionally trained team have built a solid reputation and social media presence by the amazing colour trends, crazy colours they create daily and the ongoing motivation they share! Claire is an advocate for young aspiring business owners and shares her wealth of knowledge and struggles she has over come being in business from age of 21.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
        pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM - 12PM', charge: 10, currency: 'AUD'}, {name: '12PM - 5PM', charge: 15, currency: 'AUD'}],
        rating: 4,
        busyDates: [
            {
                id: 1,
                date: new Date('2017-12-31'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 10,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 2,
                date: new Date('2018-01-02'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 10,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 3,
                date: new Date('2018-01-02'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 15,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            }
        ]
    },
    {
        id: 3,
        user_id: 2,
        is_active: true,
        created_date: new Date(),
        first_name: 'Taunya',
        last_name: 'Spada',
        job_role: 'Stylist',
        profile_pic: base64_encode(path.resolve('./public/images/taunya.jpg')),
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'I have been passionately involved in my industry for 25 years. Doing pretty much everything from winning competitions, educating, doing shows, photo shoots, writing articles and building businesses. I love sharing my knowledge and working with other passionate hairdressers. ',
        terms_and_condition: '',
        skills: ['Hair Coloring', 'Hair Cutting'],
        pref_locations: ['Darwin', 'Adelaide', 'Melbourne'],
        charges: [{name: '8AM - 12PM', charge: 15, currency: 'AUD'}, {name: '12PM - 5PM', charge: 20, currency: 'AUD'}],
        rating: 3,
        busyDates: [
            {
                id: 4,
                date: new Date('2017-12-29'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 15,
                    currency: 'AUD'

                },
                type: 'BOOKED'
            },
            {
                id: 5,
                date: new Date('2018-01-12'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 15,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 6,
                date: new Date('2018-01-08'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 20,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            }
        ]
    },
    {
        id: 4,
        user_id: 4,
        is_active: true,
        created_date: new Date(),
        first_name: 'Krystina',
        last_name: 'Lish',
        job_role: 'Educator',
        profile_pic: base64_encode(path.resolve('./public/images/krystina.jpg')),
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
        ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Hair Cutting'],
        pref_locations: ['Perth', 'Darwin', 'Canberra', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM - 12PM', charge: 10, currency: 'AUD'}, {name: '12PM - 5PM', charge: 10, currency: 'AUD'}],
        rating: 5,
        busyDates: [
            {
                id: 7,
                date: new Date('2017-12-29'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 10,
                    currency: 'AUD'

                },
                type: 'BOOKED'
            }, {
                id: 14,
                date: new Date('2017-12-29'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 10,
                    currency: 'AUD'

                },
                type: 'BOOKED'
            },
            {
                id: 8,
                date: new Date('2018-01-04'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 10,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 9,
                date: new Date('2018-01-09'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 20,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 19,
                date: new Date('2018-01-02'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 10,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 20,
                date: new Date('2018-01-02'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 20,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 21,
                date: new Date('2017-12-29'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 10,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 22,
                date: new Date('2017-12-29'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 20,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            }
        ]
    },
    {
        id: 6,
        user_id: 5,
        is_active: true,
        created_date: new Date(),
        first_name: 'Florine',
        last_name: 'Meister',
        job_role: 'Stylist',
        profile_pic: base64_encode(path.resolve('./public/images/florine.jpg')),
        address_line_1: 'U 235',
        address_line_2: '201-203 BROADWAY AVE',
        city: 'WEST BEACH',
        state: 'SA',
        zip: 5024,
        country: 'Australia',
        telephone: 711225455,
        description: 'Complimented by Sassoon on my Haircutting , have cut the Rolling Stones ,Santana etc etc featured in Vogue ,Harpers ,Cleo , Instyle ,Follow me ,Stiletto etc etc. Did a Haircutting video for Sassoon Japanese television ,was a finelist on Hairbrained on my cutting video Hair Dance and Voi eight haircuts , have done haircutting video for Jaguar scissors Mizutani scissors and Sharpline scissors. Hair Expo with InStyle.',
        terms_and_condition: '',
        skills: ['Bridal', 'Curling', 'Hair Coloring', 'Rebonding'],
        pref_locations: ['Perth', 'Darwin', 'Hobart', 'Brisbane'],
        charges: [{name: '8AM - 12PM', charge: 30, currency: 'AUD'}, {name: '12PM - 5PM', charge: 30, currency: 'AUD'}],
        rating: 5,
        busyDates: [
            {
                id: 10,
                date: new Date('2017-12-28'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 30,
                    currency: 'AUD'

                },
                type: 'BOOKED'
            },
            {
                id: 11,
                date: new Date('2018-01-12'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 30,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 12,
                date: new Date('2018-01-08'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 30,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 13,
                date: new Date('2018-01-10'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 30,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 14,
                date: new Date('2017-12-30'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 30,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 15,
                date: new Date('2018-01-04'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 30,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 16,
                date: new Date('2018-01-04'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 30,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 17,
                date: new Date('2018-01-05'),
                timeSlot: {
                    name: '8AM - 12PM',
                    charge: 30,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            },
            {
                id: 18,
                date: new Date('2018-01-05'),
                timeSlot: {
                    name: '12PM - 5PM',
                    charge: 30,
                    currency: 'AUD'
                },
                type: 'BOOKED'
            }
        ]
    }

];

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}


/* GET home page. */
router.get('/', function (req, res, next) {
    res.status(200).send('Sample HairB2B server is working for Stylist API...');
});

router.get('/getsamples', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify([
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Sofia',
            last_name: 'Maekinen',
            job_role: 'Educator',
            profile_pic: '/dd/',
            address_line_1: 'U 235',
            address_line_2: '201-203 BROADWAY AVE',
            city: 'WEST BEACH',
            state: 'SA',
            zip: 5024,
            country: 'Australia',
            telephone: 711225455,
            description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
            ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
            terms_and_condition: '',
            skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
            rating: 4
        },
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Sofia',
            last_name: 'Maekinen',
            job_role: 'Educator',
            profile_pic: '/dd/',
            address_line_1: 'U 235',
            address_line_2: '201-203 BROADWAY AVE',
            city: 'WEST BEACH',
            state: 'SA',
            zip: 5024,
            country: 'Australia',
            telephone: 711225455,
            description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
            ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
            terms_and_condition: '',
            skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
            rating: 4
        },
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Sofia',
            last_name: 'Maekinen',
            job_role: 'Educator',
            profile_pic: '/dd/',
            address_line_1: 'U 235',
            address_line_2: '201-203 BROADWAY AVE',
            city: 'WEST BEACH',
            state: 'SA',
            zip: 5024,
            country: 'Australia',
            telephone: 711225455,
            description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
            ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
            terms_and_condition: '',
            skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
            rating: 4
        },
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Sofia',
            last_name: 'Maekinen',
            job_role: 'Educator',
            profile_pic: '/dd/',
            address_line_1: 'U 235',
            address_line_2: '201-203 BROADWAY AVE',
            city: 'WEST BEACH',
            state: 'SA',
            zip: 5024,
            country: 'Australia',
            telephone: 711225455,
            description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
            ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
            terms_and_condition: '',
            skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
            rating: 4
        },
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Sofia',
            last_name: 'Maekinen',
            job_role: 'Educator',
            profile_pic: '/dd/',
            address_line_1: 'U 235',
            address_line_2: '201-203 BROADWAY AVE',
            city: 'WEST BEACH',
            state: 'SA',
            zip: 5024,
            country: 'Australia',
            telephone: 711225455,
            description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
            ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
            terms_and_condition: '',
            skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
            rating: 4
        },
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Sofia',
            last_name: 'Maekinen',
            job_role: 'Educator',
            profile_pic: '/dd/',
            address_line_1: 'U 235',
            address_line_2: '201-203 BROADWAY AVE',
            city: 'WEST BEACH',
            state: 'SA',
            zip: 5024,
            country: 'Australia',
            telephone: 711225455,
            description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
            ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
            terms_and_condition: '',
            skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', price: 10, currency: 'AUD'}, {name: '12PM-5PM', price: 15, currency: 'AUD'}],
            rating: 4
        }
    ]));
});

router.get('/getsample', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Sofia',
            last_name: 'Maekinen',
            job_role: 'Educator',
            profile_pic: '/dd/',
            address_line_1: 'U 235',
            address_line_2: '201-203 BROADWAY AVE',
            city: 'WEST BEACH',
            state: 'SA',
            zip: 5024,
            country: 'Australia',
            telephone: 711225455,
            description: 'Graduated as a hairdresser and barber 2014. Since then I have been working in 2 different salons in my homecountry Finland,' +
            ' one barber shop and 2 different salons in Australia in Cairns and Coffs Harbour. As a hairsalon assistant I have been working in 2 different high-end salons in Melbourne and Sydney.',
            terms_and_condition: '',
            skills: ['Bridal', 'Curling', 'Rebonding', 'Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne', 'Canberra', 'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', charge: 10, currency: 'AUD'}, {name: '12PM-5PM', charge: 15, currency: 'AUD'}],
            rating: 4
        }
    ));
});


router.get('/getstylistsbyskill/:skill', function (req, res, next) {
    var skill = req.params.skill;
    console.log(skill);

    const result = stylistList.filter(value => {

        if (value.skills.filter(sk => {
                if (sk.startsWith(skill) || sk.endsWith(skill)) {
                    return true;
                }
                return false;
            }).length > 0) {
            return true;
        }
        return false;
    });
    result.sort((a, b) => {
        if (a.rating > b.rating) {
            return -1;
        } else if (a.rating === b.rating) {
            return 0;
        }
        return 1;
    });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result);
});

router.get('/gettopstylists', function (req, res, next) {


    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(stylistList);
});

router.get('/getstylist/:id', function (req, res, next) {
    var id = +req.params.id;
    console.log(id);

    const result = stylistList.filter(value => {

        if (value.id === id) {
            return true;
        }
        return false;
    });

    result.sort((a, b) => {
        if (a.rating > b.rating) {
            return -1;
        } else if (a.rating === b.rating) {
            return 0;
        }
        return 1;
    });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result[0]);
});

router.get('/getnames', function (req, res, next) {
    res.status(200).send([
        'Margit Redford',
        'Taunya Spada',
        'Krystina Lish',
        'Florine Meister',
        'Malcolm Trostle',
        'Kerstin Berkman',
        'Hank Gotcher',
        'Kathyrn Chestnut',
        'Eloise Epp',
        'Eleanora Hiller',
        'Briana Poulin',
        'Ettie Barrow',
        'Reggie Tonkin',
        'Augustine Kuhl',
        'Jacelyn Nystrom',
        'Shelia Foote',
        'Stormy Knoles',
        'Florida Shuck',
        'Shari Prasad',
        'Nancey Yamada '
    ]);
});


router.get('/getstylistbyname/:name', function (req, res, next) {
    var name = req.params.name;
    console.log(name);


    const result = stylistList.filter(value => {
        var n = value.first_name + ' ' + value.last_name;
        if (n.startsWith(name) || n.endsWith(name)) {
            return true;
        }
        return false;
    });

    result.sort((a, b) => {
        if (a.rating > b.rating) {
            return -1;
        } else if (a.rating === b.rating) {
            return 0;
        }
        return 1;
    });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result);
});


module.exports = router;
