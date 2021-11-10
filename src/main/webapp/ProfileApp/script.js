// Created by viknesh vikky

function main() {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);
  const $w = (el, e, h) => el.addEventListener(e, h);

  const links = $$('.links:not(.signout)'), homeNav = $$('.bottom-nav span'), openNav = $('.openNav'),
    views=$$('.views');
  const sections = {
    home: {
      icon: 'home',
      desc: 'Home',
      title: 'Activity Feed'
    },
    challenge: {
      icon: 'flash_on',
      desc: 'Challenges',
      title: 'Play'
    },
    learn: {
      icon: 'school',
      desc: 'Learn',
      title: 'Learn'
    },
    code: {
      icon: 'code',
      desc: 'Code',
      title: 'Code'
    },
    discuss: {
      icon: 'question_answer',
      desc: 'Discuss',
      title: 'Discuss'
    }
  };

  const home = {
    title: $('.view-title'),
    icon: $('.view-icon'),
    desc: $('.view-description')
  };

  links.forEach(link => {
    $w(link, 'click', function () {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    })
  });

  homeNav.forEach(n => {
    $w(n, 'click', function (e) {
      homeNav.forEach(l => l.classList.remove('active'));
      n.classList.add('active');
      let section = sections[n.getAttribute('data-target')];

      home.title.innerHTML = section.title;
      home.icon.innerHTML = section.icon;
      home.desc.innerHTML = section.desc;
    })
  });

  $w(openNav, 'click', function (e) {
    views.forEach(view => view.classList.add('slide'));
    e.stopPropagation();
    $w($('.home.slide'), 'click', function () {
      views.forEach(view => view.classList.remove('slide'));
    });
  });
}


window.onload = main;