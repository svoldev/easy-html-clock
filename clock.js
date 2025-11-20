(function(){
    function clockInit(el) {
        const stateEl = el.querySelector('.state');
        const parts = {
            hour: stateEl.querySelector('.hour'),
            minute: stateEl.querySelector('.minute'),
            second: stateEl.querySelector('.second'),
        };

        setInterval(function() {
            const now = new Date();

            const milliseconds = now.getMilliseconds();
            const seconds = now.getSeconds() + milliseconds / 1000;
            const minutes = now.getMinutes() + seconds / 60;
            const hours = now.getHours() + minutes / 60;
            
            parts.hour.style.transform = `rotate(${((hours / 12) * 360).toFixed(2)}deg)`;
            parts.minute.style.transform = `rotate(${((minutes / 60) * 360).toFixed(2)}deg)`;
            parts.second.style.transform = `rotate(${((seconds / 60) * 360).toFixed(2)}deg)`;
        }, 10);
    }

    const clockEl = document.querySelectorAll('.clock')
        .forEach((el) => clockInit(el));
})();