export const dashboardItems = [
    {
        title: 'Repairs',
        iconUrl: 'images/repair_icon.png',
        cardTitle: 'My Repairs',
        cardDesc: 'Manage your repairs or let us know if something needs fixing.',
        buttonText: 'View Repairs',
        buttonUrl: '#'
    },
    {
        title: 'Payment',
        iconUrl: 'images/payment_icon.png',
        cardTitle: 'Make a Payment',
        cardDesc: 'You can use this section to make a payment for one of your tenancies.',
        buttonText: 'Make Payment',
        buttonUrl: '#'
    },
    {
        title: 'Enquiries',
        iconUrl: 'images/enquiries_icon.png',
        cardTitle: 'My Enquires',
        cardDesc: 'Create and view your existing tenancy request and give us feedback.',
        buttonText: 'View Enquiries',
        buttonUrl: '#'
    },
    {
        title: 'MyHome',
        iconUrl: 'images/myhome_icon.png',
        cardTitle: 'My Home',
        cardDesc: 'View your tenancy agreement and property information.',
        buttonText: 'View My Home',
        buttonUrl: '/myhome'
    },
    {
        title: 'ContactDetails',
        iconUrl: 'images/contactdetails_icon.png',
        cardTitle: 'Update Contact Details',
        cardDesc: 'Keep us up to date with your contact information to help us keep you informed.',
        buttonText: 'Update Details',
        buttonUrl: '/contactdetails'
    },
    {
        title: 'ContactPreferences',
        iconUrl: 'images/contactpreferences_icon.png',
        cardTitle: 'Contact Preferences',
        cardDesc: 'Keep us up to date with the your preferred method of contact with us.',
        buttonText: 'Update Preferences',
        buttonUrl: '/contactpreferences'
    },
]

export const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'My Home', href: '/myhome', current: false },
    { name: 'Payments', href: '/payments', current: false },
    { name: 'Tickets', href: '#', current: false },
]