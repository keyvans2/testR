import vue from 'vue';

export default vue.directive('fade', {

    inserted(el, binding) {

        window.addEventListener('scroll', function () {

                if (el.getBoundingClientRect().top <= screen.height) {
                    if (el.offsetTop <= screen.height) {
                        return false;
                    } else {


                        switch (binding.value) {
                            case 'rToLeft':
                                el.classList.add('rightToLeft');
                                break;
                            case 'lToRight':
                                el.classList.add('leftToRight');
                                break;
                        }

                        el.classList.add('fade-in');

                    }

                    // console.log(el.getBoundingClientRect().top <= 500)
                } else {
                    el.style.transform = 'scale(0)'
                }
            }
        )

    }

});

