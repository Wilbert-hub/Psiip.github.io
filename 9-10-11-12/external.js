
////////////////////////////
function calculateY(x) {
    try {
        if (x === 2) {
            throw new Error("Ошибка: деление на ноль.");
        }
        if (x <= -4) {
            throw new Error("Ошибка: корень из отрицательного числа.");
        }
        if (x > 4) {
            throw new Error("Ошибка: корень из отрицательного числа.");
        }
        let y = Math.sqrt(16-Math.pow(x,2))/(x-2); // Ваша формулаs
        return y;
    } catch (error) {
        alert(error.message);
        return null;
    }
}

function calculate() {
    const x = parseFloat(document.getElementById('input-x').value);
    x2=5*2;
    if (isNaN(x)) {
        alert("Введите корректное число.");
        return;
    }
    const result = calculateY(x);
    if (result !== null) {
        document.getElementById('formula-output').innerHTML = `Результат расчета для x = ${x}: ${result}`;
    }
}

