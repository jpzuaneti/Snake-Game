
window.onload = () => {
    const canvas = document.querySelector('#snakeGame');
    const ctx = canvas.getContext('2d');
    document.addEventListener('keydown', keyPush);

    setInterval(game, 65);

    const vel = 1;

    let vx = 0;
    let vy = 0;
    let px = 10;
    let py = 10;
    let tp = 20;
    let qp = 30;
    let ax = 15;
    let ay = 15;
    
    let trail = [];
    let tail = 5;

    let point = 0;
    const points = document.querySelector('#points');
    points.innerHTML = `${point}`;

    function game() {
        px += vx;
        py += vy;

        if(px < 0) {
            px = qp - 1;
        }

        if(px > qp - 1) {
            px = 0;
        }

        if(py < 0) {
            py = qp - 1;
        }

        if(py > qp - 1) {
            py = 0;
        }

        // criando e pintando o canvas
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#f1c40f';
        ctx.fillRect(ax*tp, ay*tp, tp, tp);

        ctx.fillStyle = '#16a085';
        for(let i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp - 1, tp - 1);
            
            if(trail[i].x === px && trail[i].y === py) {
                vx = 0;
                vy = 0;
                tail = 5;

                point = 0;
                points.innerHTML = `${point}`
                
            }
        }

        trail.push({x: px, y: py});
        while(trail.length > tail) {
            trail.shift();
        }

        if(ax === px && ay === py) {
            tail++;
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);

            // atualizar pontuacao
            points.innerHTML = `${point += 1}`
        }

    }

    function keyPush(event) {
        switch(event.keyCode) {
            case 37: // left
                vx = -vel;
                vy = 0;
                break;
            case 38: // up
                vx = 0;
                vy = -vel;
                break;
            case 39: // right
                vx = vel;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = vel;
                break;
            
        }
    };

};




    
