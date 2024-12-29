document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.querySelector('.intro');

    if (!introSection) {
        console.error('Секция "intro" не найдена.');
        return;
    }

    // Заранее заданные листья с координатами
    const leavesData = [
        { src: 'images/1.png', width: '5.8%', height: '5.5%', top: '5%', left: '7%' },
        { src: 'images/2.png', width: '7.6%', height: '6.6%', top: '18%', left: '12%' },
        { src: 'images/3.png', width: '8.7%', height: '7.7%', top: '25%', left: '30%' },
        { src: 'images/4.png', width: '6.5%', height: '5.5%', top: '40%', left: '5%' },
        { src: 'images/5.png', width: '7.6%', height: '6.6%', top: '35%', right: '10%' }, 
        { src: 'images/6.png', width: '8.7%', height: '7.7%', top: '70%', left: '45%' },
        { src: 'images/7.png', width: '6.5%', height: '5.5%', top: '20%', left: '65%' },
        { src: 'images/8.png', width: '8.8%', height: '10.0%', top: '60%', left: '75%' },
        { src: 'images/9.png', width: '8.0%', height: '7.7%', top: '55%', left: '90%' },
        { src: 'images/10.png', width: '5.8%', height: '5.5%', top: '5%', left: '80%' },
        { src: 'images/11.png', width: '6.9%', height: '6.6%', top: '15%', left: '45%' },
        { src: 'images/12.png', width: '8.0%', height: '7.7%', top: '68%', left: '20%' },
        { src: 'images/13.png', width: '5.8%', height: '5.5%', top: '78%', left: '65%' },
    ];

    // Добавление листьев в секцию "Представление"
    leavesData.forEach(leafData => {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.backgroundImage = `url(${leafData.src})`;
        leaf.style.width = leafData.width;
        leaf.style.height = leafData.height;
        leaf.style.top = leafData.top;
        if (leafData.left) leaf.style.left = leafData.left;
        if (leafData.right) leaf.style.right = leafData.right; 
        leaf.style.position = 'absolute';
        leaf.style.backgroundSize = 'contain';
        leaf.style.backgroundRepeat = 'no-repeat';
        leaf.style.opacity = '0.8';
        leaf.style.pointerEvents = 'none';
        leaf.style.animation = 'sway 2s infinite alternate'; 

        introSection.appendChild(leaf);
    });

    console.log('Листья добавлены с изменением расположения цветка №5.');
});
document.querySelector('.subscription-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
});
document.querySelector('.order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Ваш заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.');
});
document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formData = new FormData(e.target);
    const fullName = formData.get('full-name');
    const email = formData.get('email');
    const address = formData.get('address');
    const plants = [
        { name: 'Адениум', quantity: formData.get('adenium') },
        { name: 'Бегония', quantity: formData.get('begonia') },
        { name: 'Венерина мухоловка', quantity: formData.get('venus-flytrap') },
        { name: 'Замиокулькас', quantity: formData.get('zamioculcas') },
        { name: 'Крестовник Роули', quantity: formData.get('roylei') },
        { name: 'Литопсы', quantity: formData.get('lithops') },
        { name: 'Маранта триколор', quantity: formData.get('maranta') },
        { name: 'Хавортия лимифолия вариегатная', quantity: formData.get('haworthia') },
    ];

    let message = `ФИО: ${fullName}\nEmail: ${email}\nАдрес: ${address}\n\nВыбранные растения:\n`;
    plants.forEach(plant => {
        if (plant.quantity > 0) {
            message += `${plant.name}: ${plant.quantity}\n`;
        }
    });

    alert(message);
});
document.addEventListener('DOMContentLoaded', () => {
    const workSteps = document.querySelectorAll('.work-step');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.5 } 
    );

    workSteps.forEach((step) => observer.observe(step));
});
