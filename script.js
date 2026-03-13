var tl = gsap.timeline({
    scrolltrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true,
    }
});

tl.to(
    '#fanta',
    {
        top: '120%',
        left: '0%',
    },
    'orange'
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%',
        left: '23%',
    },
    'orange'
);

tl.to(
    '#laranja',
    {
        widht: '15%',
        top: '160%',
        left: '23%',
    },
    'orange'
);

tl.to(
    '#folha',
    {
        rotate: '530deg',
        top: '110%',
        left: '70%',
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        rotate: '530deg',
        top: '110%',
        left: '0%',
    },
    'orange'
);

var tl2 = gsap.timeline({
    scrolltrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%%',
        scrub: true,
        markers: true,
    }
});
