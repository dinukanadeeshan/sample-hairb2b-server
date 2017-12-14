var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
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
router.get('/getstylist/:id', function (req, res, next) {
    var id = +req.params.id;
   console.log(id);
    var stylistList = [
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Margit',
            last_name: 'Redford',
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
        },
        {
            id: 3,
            user_id: 2,
            is_active: true,
            created_date: new Date(),
            first_name: 'Taunya',
            last_name: 'Spada',
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
            skills: ['Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne'],
            charges: [{name: '8AM-12PM', charge: 15, currency: 'AUD'}, {name: '12PM-5PM', charge: 20, currency: 'AUD'}],
            rating: 3
        },
        {
            id: 4,
            user_id: 4,
            is_active: true,
            created_date: new Date(),
            first_name: 'Krystina',
            last_name: 'Lish',
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
            skills: ['Bridal', 'Curling', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Canberra', 'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', charge: 10, currency: 'AUD'}, {name: '12PM-5PM', charge: 10, currency: 'AUD'}],
            rating: 5
        }

    ];

    const result = stylistList.filter(value => {

        if (value.id === id) {
            return true;
        }
        return false;
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
    var stylistList = [
        {
            id: 2,
            user_id: 1,
            is_active: true,
            created_date: new Date(),
            first_name: 'Margit',
            last_name: 'Redford',
            job_role: 'Educator',
            profile_pic: base64_encode(path.resolve('./public/images/pay.jpg')),
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
        },
        {
            id: 3,
            user_id: 2,
            is_active: true,
            created_date: new Date(),
            first_name: 'Taunya',
            last_name: 'Spada',
            job_role: 'Educator',
            profile_pic: base64_encode(path.resolve('./public/images/pay.jpg')),
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
            skills: ['Hair Coloring', 'Hair Cutting'],
            pref_locations: ['Perth', 'Darwin', 'Adelaide', 'Melbourne'],
            charges: [{name: '8AM-12PM', charge: 15, currency: 'AUD'}, {name: '12PM-5PM', charge: 20, currency: 'AUD'}],
            rating: 3
        },
        {
            id: 4,
            user_id: 4,
            is_active: true,
            created_date: new Date(),
            first_name: 'Krystina',
            last_name: 'Lish',
            job_role: 'Educator',
            profile_pic: base64_encode(path.resolve('./public/images/pay.jpg')),
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
            charges: [{name: '8AM-12PM', charge: 10, currency: 'AUD'}, {name: '12PM-5PM', charge: 10, currency: 'AUD'}],
            rating: 5
        },
        {
            id: 6,
            user_id: 5,
            is_active: true,
            created_date: new Date(),
            first_name: 'Florine',
            last_name: 'Meister',
            job_role: 'Educator',
            profile_pic: base64_encode(path.resolve('./public/images/pay.jpg')),
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
            skills: ['Bridal', 'Curling', 'Hair Coloring', 'Rebonding'],
            pref_locations: ['Perth', 'Darwin',  'Hobart', 'Brisbane'],
            charges: [{name: '8AM-12PM', charge: 30, currency: 'AUD'}, {name: '12PM-5PM', charge: 30, currency: 'AUD'}],
            rating: 5
        }

    ];

    const result = stylistList.filter(value => {
        var n = value.first_name + ' ' + value.last_name;
        if (n.startsWith(name) || n.endsWith(name)) {
            return true;
        }
        return false;
    });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(result);
});


module.exports = router;
