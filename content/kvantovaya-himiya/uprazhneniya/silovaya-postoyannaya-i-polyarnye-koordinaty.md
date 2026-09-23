---
title: Силовая постоянная, полиномы Эрмита и лапласиан в полярных координатах
type: docs
math: true
weight: 8
description: "Упражнения 8 по квантовой химии: расчет силовой постоянной связи по волновому числу ИК-полосы для HF, HCl, HBr; полиномы Эрмита H₀–H₃ по формуле Родрига и волновые функции осциллятора; вывод оператора Лапласа в полярных координатах методом Крамера."
---

Задачи к статьям [Гармонический осциллятор](../../garmonicheskij-oscillyator/) и [Жесткий ротатор](../../zhestkij-rotator/).

## Силовая постоянная связи

**Задача.** Найти значения силовой постоянной связи, используя характеристическую частоту колебания инфракрасных спектров. Связать с полосой поглощения.

Уровни осциллятора отстоят друг от друга на $h\nu_0$, поэтому частота полосы поглощения — это собственная частота осциллятора:

$$
E = h\nu_0 \left( n + \frac{1}{2} \right), \qquad
\Delta E = h\nu_0, \qquad
\nu_0 = \frac{1}{2\pi} \sqrt{\frac{k}{M}}
$$

В спектрах частоту задают волновым числом: $\bar{\nu} = \dfrac{\nu}{c} \Rightarrow \nu = \bar{\nu} c$. Масса $M$ — приведенная масса двух атомов, переведенная в килограммы:

$$
M = \frac{m_1 m_2}{m_1 + m_2}, \qquad
k = 4\pi^2 \nu^2 M = \left( 2\pi \bar{\nu} c \right)^2 M \quad \left[ \frac{\text{Н}}{\text{м}} \right]
$$

**Пример.** Полоса $\bar{\nu} = 1876 \ \text{см}^{-1}$ у молекулы с массами атомов 14 и 16 а.е.м. (NO):

$$
\nu = \bar{\nu} \cdot c = 1876 \cdot 3 \cdot 10^{10} = 5{,}6 \cdot 10^{13} \ \text{Гц}
$$

$$
M = \frac{m_1 m_2}{m_1 + m_2} = \frac{14 \cdot 16}{30} \approx 7{,}5 \ \text{а.е.м.} = 7{,}5 \cdot 1{,}67 \cdot 10^{-27} = 12{,}5 \cdot 10^{-27} \ \text{кг}
$$

$$
k = 4\pi^2 \nu^2 M = 4\pi^2 \cdot \left( 5{,}6 \cdot 10^{13} \right)^2 \cdot 1{,}25 \cdot 10^{-26} \approx 1{,}5 \cdot 10^3 \ \frac{\text{Н}}{\text{м}}, \qquad
\omega = \sqrt{\frac{k}{M}}
$$

Это силовая постоянная одной связи. Обычно все, что относится к одной связи — маленькие величины. А силовая постоянная — большая. Это сила, с которой надо подействовать на химическую связь, чтобы увеличить ее на 1 м.

**Галогеноводороды.** Полосы валентных колебаний: HF — $3958 \ \text{см}^{-1}$, HCl — $2886 \ \text{см}^{-1}$, HBr — $2559 \ \text{см}^{-1}$. Найти $k$.

1. HF: $\nu = 3958 \cdot 3 \cdot 10^{10} = 1{,}1874 \cdot 10^{14} \ \text{Гц}$, $M = \dfrac{1 \cdot 19}{20} = 0{,}95 \cdot 1{,}67 \cdot 10^{-27} \ \text{кг}$:

$$
k = \left( 1{,}1874 \cdot 10^{14} \right)^2 \cdot 4\pi^2 \cdot 0{,}95 \cdot 1{,}67 \cdot 10^{-27} = 883 \ \frac{\text{Н}}{\text{м}}
$$

2. HCl: $\nu = 8{,}658 \cdot 10^{13} \ \text{Гц}$, $M = \dfrac{35{,}5}{36{,}5} = 0{,}973$ а.е.м. $\Rightarrow k = 481 \ \dfrac{\text{Н}}{\text{м}}$.

3. HBr: $\nu = 7{,}677 \cdot 10^{13} \ \text{Гц}$, $M = \dfrac{79{,}9}{80{,}9} = 0{,}988$ а.е.м. $\Rightarrow k = 384 \ \dfrac{\text{Н}}{\text{м}}$.

Чем тяжелее галоген, тем ниже частота и слабее связь — силовая постоянная падает от HF к HBr.

## Полиномы Эрмита

Полином Эрмита возникает при решении уравнения Шредингера для гармонического осциллятора. Его можно получать по формуле (Родрига):

$$
H_n(z) = (-1)^n e^{z^2} \frac{d^n}{dz^n} e^{-z^2}, \qquad n = 0, 1, 2, 3, \dots
$$

$$
H_0 = (-1)^0 e^{z^2} e^{-z^2} = 1
$$

$$
H_1 = (-1)^1 e^{z^2} \frac{d}{dz} e^{-z^2} = -1 \cdot e^{z^2} \cdot e^{-z^2} (-2z) = 2z
$$

$$
H_2 = (-1)^2 e^{z^2} \frac{d^2}{dz^2} e^{-z^2} = 4z^2 - 2
$$

$$
\begin{aligned}
H_3 &= (-1)^3 e^{z^2} \frac{d^3}{dz^3} e^{-z^2}
= -e^{z^2} \frac{d}{dz}\left( e^{-z^2} \left( 4z^2 - 2 \right) \right) = \\
&= -e^{z^2} \left( e^{-z^2} \cdot (-2z) \left( 4z^2 - 2 \right) + e^{-z^2} \cdot 8z \right) = \\
&= -\left( -2z \left( 4z^2 - 2 \right) + 8z \right) = 8z^3 - 12z
\end{aligned}
$$

| $n$ | $H_n(\xi)$ |
|---|---|
| 0 | $1$ |
| 1 | $2\xi$ |
| 2 | $4\xi^2 - 2$ |
| 3 | $8\xi^3 - 12\xi$ |

Волновая функция для гармонического осциллятора имеет вид:

$$
\psi(\xi) = C H_n(\xi)\, e^{-\xi^2/2}, \qquad \xi = \sqrt{\beta} \cdot x
$$

![Гармонический осциллятор: груз на пружине, отклонение x от положения равновесия](/kvantovaya-himiya/images/uprazhneniya/pruzhina.png)

Плотность вероятности для нижних уровней:

$$
\psi_0^2 = e^{-\xi^2}, \qquad \psi_1^2 = \xi^2 e^{-\xi^2}
$$

![Плотность вероятности осциллятора для n = 0, 1 и высокого n внутри параболы потенциальной энергии](/kvantovaya-himiya/images/uprazhneniya/oscillyator-plotnost.png)

По мере возрастания этого числа, возрастают области наиболее вероятного нахождения: при $n = 0$ частица чаще всего у положения равновесия, при больших $n$ — у точек поворота, как классический маятник.

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

## Жесткий ротатор: оператор Лапласа в полярных координатах

Когда мы рассматриваем вращательные движения, мы переходим к сферическим координатам, потому что в декартовых — невозможно разделить переменные. Разберем плоский случай.

![Полярные координаты: точка на окружности радиуса r под углом φ к оси x](/kvantovaya-himiya/images/uprazhneniya/polyarnye-koordinaty.png)

**Задача.** Определить, какой вид имеет оператор Лапласа в полярных координатах:

$$
\begin{aligned}
&\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}, \qquad
x = r \cos\varphi, \qquad y = r \sin\varphi \\
&f(x, y) = f\left( x(r, \varphi),\ y(r, \varphi) \right)
\end{aligned}
$$

### Производные по r и φ

Найти производную функции по координатам $r$ и $\varphi$. Для функции одной переменной $f(x(z))$ производная сложной функции $\dfrac{df}{dz} = \dfrac{df}{dx} \cdot \dfrac{dx}{dz}$; для двух переменных — сумма по обеим:

$$
\frac{\partial f}{\partial r} = \frac{\partial f}{\partial x} \cdot \frac{\partial x}{\partial r} + \frac{\partial f}{\partial y} \cdot \frac{\partial y}{\partial r}
\quad \Rightarrow \quad
\frac{\partial f}{\partial r} = \frac{\partial f}{\partial x} \cos\varphi + \frac{\partial f}{\partial y} \sin\varphi
$$

$$
\frac{\partial f}{\partial \varphi} = \frac{\partial f}{\partial x} \cdot \frac{\partial x}{\partial \varphi} + \frac{\partial f}{\partial y} \cdot \frac{\partial y}{\partial \varphi}
\quad \Rightarrow \quad
\frac{\partial f}{\partial \varphi} = \frac{\partial f}{\partial x} \left( -r \sin\varphi \right) + \frac{\partial f}{\partial y} \left( r \cos\varphi \right)
$$

Это система двух линейных уравнений относительно неизвестных $\dfrac{\partial f}{\partial x}$ и $\dfrac{\partial f}{\partial y}$; свободные члены — $\dfrac{\partial f}{\partial r}$, $\dfrac{\partial f}{\partial \varphi}$, коэффициенты — $\cos\varphi$, $\sin\varphi$, $-r\sin\varphi$, $r\cos\varphi$.

### Метод Крамера

$$
\Delta_0 = \begin{vmatrix} \cos\varphi & \sin\varphi \\ -r\sin\varphi & r\cos\varphi \end{vmatrix}
= r\cos^2\varphi + r\sin^2\varphi = r
$$

$$
\Delta_{\partial f / \partial x} = \begin{vmatrix} \dfrac{\partial f}{\partial r} & \sin\varphi \\ \dfrac{\partial f}{\partial \varphi} & r\cos\varphi \end{vmatrix}
= \frac{\partial f}{\partial r} \cdot r\cos\varphi - \frac{\partial f}{\partial \varphi} \sin\varphi
$$

$$
\Delta_{\partial f / \partial y} = \begin{vmatrix} \cos\varphi & \dfrac{\partial f}{\partial r} \\ -r\sin\varphi & \dfrac{\partial f}{\partial \varphi} \end{vmatrix}
= \frac{\partial f}{\partial \varphi} \cos\varphi + \frac{\partial f}{\partial r}\, r\sin\varphi
$$

$$
\frac{\partial f}{\partial x} = \frac{1}{r} \left( r\cos\varphi \frac{\partial f}{\partial r} - \sin\varphi \frac{\partial f}{\partial \varphi} \right)
\quad \Rightarrow \quad
\frac{\partial}{\partial x} = \cos\varphi \frac{\partial}{\partial r} - \frac{\sin\varphi}{r} \frac{\partial}{\partial \varphi}
$$

$$
\frac{\partial f}{\partial y} = \frac{1}{r} \left( r\sin\varphi \frac{\partial f}{\partial r} + \cos\varphi \frac{\partial f}{\partial \varphi} \right)
\quad \Rightarrow \quad
\frac{\partial}{\partial y} = \sin\varphi \frac{\partial}{\partial r} + \frac{\cos\varphi}{r} \frac{\partial}{\partial \varphi}
$$

### Оператор Лапласа

Применяем каждый оператор дважды: $\nabla^2 f = \dfrac{\partial}{\partial x}\left( \dfrac{\partial f}{\partial x} \right) + \dfrac{\partial}{\partial y}\left( \dfrac{\partial f}{\partial y} \right)$. Важно, что $\dfrac{\partial}{\partial r}$ действует и на множитель $\dfrac{1}{r}$, а $\dfrac{\partial}{\partial \varphi}$ — на $\sin\varphi$ и $\cos\varphi$:

$$
\begin{aligned}
\frac{\partial^2 f}{\partial x^2}
&= \left( \cos\varphi \frac{\partial}{\partial r} - \frac{\sin\varphi}{r} \frac{\partial}{\partial \varphi} \right) \left( \cos\varphi \frac{\partial f}{\partial r} - \frac{\sin\varphi}{r} \frac{\partial f}{\partial \varphi} \right) = \\
&= \cos^2\varphi \frac{\partial^2 f}{\partial r^2} - \frac{2\sin\varphi\cos\varphi}{r} \frac{\partial^2 f}{\partial r \partial \varphi} + \frac{\sin^2\varphi}{r} \frac{\partial f}{\partial r} + \\
&\qquad + \frac{2\sin\varphi\cos\varphi}{r^2} \frac{\partial f}{\partial \varphi} + \frac{\sin^2\varphi}{r^2} \frac{\partial^2 f}{\partial \varphi^2}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial^2 f}{\partial y^2}
&= \left( \sin\varphi \frac{\partial}{\partial r} + \frac{\cos\varphi}{r} \frac{\partial}{\partial \varphi} \right) \left( \sin\varphi \frac{\partial f}{\partial r} + \frac{\cos\varphi}{r} \frac{\partial f}{\partial \varphi} \right) = \\
&= \sin^2\varphi \frac{\partial^2 f}{\partial r^2} + \frac{2\sin\varphi\cos\varphi}{r} \frac{\partial^2 f}{\partial r \partial \varphi} + \frac{\cos^2\varphi}{r} \frac{\partial f}{\partial r} - \\
&\qquad - \frac{2\sin\varphi\cos\varphi}{r^2} \frac{\partial f}{\partial \varphi} + \frac{\cos^2\varphi}{r^2} \frac{\partial^2 f}{\partial \varphi^2}
\end{aligned}
$$

При сложении смешанные производные и члены с $\dfrac{\partial f}{\partial \varphi}$ сокращаются, а $\sin^2\varphi + \cos^2\varphi = 1$:

$$
\nabla^2 f = \frac{\partial^2 f}{\partial r^2} + \frac{1}{r} \frac{\partial f}{\partial r} + \frac{1}{r^2} \frac{\partial^2 f}{\partial \varphi^2}
$$

$$
\nabla^2 = \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2}{\partial \varphi^2}
$$

Переменные $r$ и $\varphi$ в этом операторе разделяются. В трехмерном случае радиальная часть становится $\dfrac{1}{r^2} \dfrac{\partial}{\partial r} \left( r^2 \dfrac{\partial}{\partial r} \right)$, а угловая — оператором, который [разбирается в статье о жестком ротаторе](../../zhestkij-rotator/#сферические-координаты).
