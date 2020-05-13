
// Header -------------------------------------------

let tl = gsap.timeline();
var controller = new ScrollMagic.Controller();

tl.from('header', { duration: 1, backgroundColor: '#fff' })
    .from(".hero", { duration: .8, x: '-200%' })
    .from(".hero>*", { duration: .6, y: '-400px' })

var scene = new ScrollMagic.Scene({
    triggerElement: "header",
    triggerHook: 0.3,
    reverse: false
})
    .setTween(tl)
    .addTo(controller);

// Nosotros -------------------------------------------

tl = gsap.timeline();
controller = new ScrollMagic.Controller();

tl.from('.nosotros_gallery_img', { duration: .5, scale: 0, opacity: 0, stagger: .2 })
    .from('.nosotros_info>*', { duration: .4, opacity: 0, y: '-20px', stagger: .3 })
    .from('.logo-bg', { duration: .5, opacity: 0, rotation: '0deg' })

scene = new ScrollMagic.Scene({
    triggerElement: ".nosotros",
    triggerHook: 0.3,
    reverse: false
})
    .setTween(tl)
    .addTo(controller);

// Platos ---------------------------------------------

tl = gsap.timeline();
controller = new ScrollMagic.Controller();

tl.add("box");
tl.add("imgs");

tl.from('.platos_box:nth-of-type(1)', { duration: .8, x: '150%' }, 'box')
    .from('.platos_box:nth-of-type(2)', { duration: .8, x: '-150%' }, 'box')
    .from('.platos_box:nth-of-type(1) .platos_box_grid_imgbox', { duration: .3, scale: 0, opacity: 0, delay: .8, stagger: .2 }, "imgs")
    .from('.platos_box:nth-of-type(2) .platos_box_grid_imgbox', { duration: .3, scale: 0, opacity: 0, delay: .8, stagger: { each: .2, from: 'end' } }, "imgs")
    .from('.platos_box_title', { duration: 1, opacity: 0, delay: .8 }, "imgs")

scene = new ScrollMagic.Scene({
    triggerElement: ".platos",
    triggerHook: 0.3,
    reverse: false
})
    .setTween(tl)
    .addTo(controller);

// Bebidas -------------------------------------------------

tl = gsap.timeline();
controller = new ScrollMagic.Controller();

tl.add('names');
tl.add('todo');

tl.from('.bebidas_title', { duration: .8, opacity: 0, y: '-20px' })
    .from('.bebidas_grid_box_title', { duration: .8, opacity: 0, y: '-20px', delay: .8 }, 'names')
    // Whisky Big
    .from('.bebidas_grid_box:nth-of-type(1) .img-b', { duration: .8, opacity: 0, y: '-100%', delay: 1.6 }, 'todo')
    // Whisky Small
    .from('.bebidas_grid_box:nth-of-type(1) .img-s', { duration: .8, opacity: 0, x: '-100%', delay: 1.6 }, 'todo')
    // wine Big
    .from('.bebidas_grid_box:nth-of-type(2) .img-b', { duration: .8, opacity: 0, y: '100%', delay: 1.6 }, 'todo')
    // wine Small
    .from('.bebidas_grid_box:nth-of-type(2) .img-s', { duration: .8, opacity: 0, y: '-100%', delay: 1.6 }, 'todo')
    // beer Big
    .from('.bebidas_grid_box:nth-of-type(3) .img-b', { duration: .8, opacity: 0, y: '-100%', delay: 1.6 }, 'todo')
    // beer Small
    .from('.bebidas_grid_box:nth-of-type(3) .img-s', { duration: .8, opacity: 0, y: '100%', delay: 1.6 }, 'todo')
    // beer Big
    .from('.bebidas_grid_box:nth-of-type(4) .img-b', { duration: .8, opacity: 0, x: '100%', delay: 1.6 }, 'todo')
    // beer Small
    .from('.bebidas_grid_box:nth-of-type(4) .img-s', { duration: .8, opacity: 0, y: '-100%', delay: 1.6 }, 'todo')



scene = new ScrollMagic.Scene({
    triggerElement: ".bebidas",
    triggerHook: 0.3,
    reverse: false
})
    .setTween(tl)
    .addTo(controller);

// Servicios -----------------------------------------

tl = gsap.timeline();
controller = new ScrollMagic.Controller();

tl.from('.servicios_title', { duration: .5, opacity: 0 })
    .from('.servicios_grid_box', { duration: .5, scale: 0, opacity: 0, stagger: .3 })
    .from('.servicios_contact', { duration: .6, opacity: 0, scale: 0 })

scene = new ScrollMagic.Scene({
    triggerElement: ".servicios",
    triggerHook: 0.3,
    reverse: false
})
    .setTween(tl)
    .addTo(controller);
