let btnCollapse = Array.from(document.querySelectorAll('.btn-collapse'));
let collapse = Array.from(document.querySelectorAll('.collapse'));

btnCollapse.forEach((arrayElement, index) => {
    btnCollapse[index].addEventListener('click', function () {

        let dataTarget = btnCollapse[index].getAttribute('data-target');
        let target = document.querySelector(dataTarget);

        // Button and Arrow
        function removeAllArrowAndTitleWeight(){
            btnCollapse.forEach((arrayElement, index) => {
                btnCollapse[index].classList.remove('active');
                console.log(btnCollapse[index].children[0].classList.contains('up'));
                if (btnCollapse[index].children[0].classList.contains('up')) {
                    btnCollapse[index].children[0].classList.add('down');
                    setTimeout(function () {
                        btnCollapse[index].children[0].classList.remove('down');
                        btnCollapse[index].children[0].classList.remove('up');
                    }, 600);
                }
            });
        }
        if (!this.classList.contains('active')) {
            let buttonArrow = this.children[0];

            removeAllArrowAndTitleWeight();

            this.classList.add('active');
            buttonArrow.classList.add('up');
        }
        else {
            removeAllArrowAndTitleWeight();
            this.classList.remove('active'); 
        }

        //collapse body
        if (!target.classList.contains('show')) {
            collapse.forEach((arrayElement, index) => {
                if (collapse[index].classList.contains('show')) {
                    collapse[index].classList.add('hide');
                    setTimeout(function () {
                        collapse[index].classList.remove('hide');
                        collapse[index].classList.remove('show');
                    }, 600);
                }
            });
            target.classList.add('show');
        }
        else {
            target.classList.add('hide');
            setTimeout(function () {
                target.classList.remove('hide');
                target.classList.remove('show');
            }, 600);
        }
    });
})



