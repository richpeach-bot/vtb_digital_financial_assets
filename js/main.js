document.addEventListener('DOMContentLoaded', () => {

    const animItems = document.querySelectorAll('.anim');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - animItemHeight / animStart
                }

                if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('anim-active');
                } else {
                    if (!animItem.classList.contains('anim-no-hide')) {
                        animItem.classList.remove('anim-active');
                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }

        setTimeout(() => {
            animOnScroll();
        }, 300);
    }


    const tabsBtn = document.querySelectorAll('.emx-tabs__btn');
    const tabsItem = document.querySelectorAll('.emx-tabs__item');

    tabsBtn.forEach((item) =>
        item.addEventListener('click', function () {

            let currentBtn = item;
            let tabId = item.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            

            if (! currentBtn.classList.contains('active')) {
                tabsBtn.forEach( (item) => 
                    item.classList.remove('active')
                );
                tabsItem.forEach( (item) => 
                    item.classList.remove('active')
                );

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }

        })
    );

    document.querySelector('.emx-tabs__btn').click();


    const spoilers = document.querySelectorAll('.emx-spoilers__item');

    spoilers.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.emx-spoilers__question');
            const content = self.querySelector('.emx-spoilers__answer');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
});

