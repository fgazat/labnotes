---
title: Бутадиен в потенциальном ящике и силовая постоянная связи
type: docs
math: true
weight: 7
description: "Упражнения 7 по квантовой химии: π-электроны бутадиена в модели потенциального ящика и длина волны перехода ВЗМО → НСМО, распределение плотности вероятности и узловые точки, среднее значение импульса, силовая постоянная связи из частоты колебания в ИК-спектре."
---

Задачи к статьям [Частица в потенциальном ящике](../../chastica-v-potencialnom-yashchike/) и [Гармонический осциллятор](../../garmonicheskij-oscillyator/).

## π-электроны бутадиена в потенциальном ящике

**Задача.** В молекуле бутадиена, используя модель потенциальной ямы, найти энергию π-электрона при переходе с верхнего заполненного уровня.

Четыре π-электрона бутадиена считаем свободными частицами в одномерном ящике длиной в цепочку сопряжения. Длины связей: $\text{C}{=}\text{C}$ — 1,34 Å, $\text{C}{-}\text{C}$ — 1,54 Å:

$$
\text{CH}_2 \overset{1{,}34}{=} \text{CH} \overset{1{,}54}{-} \text{CH} \overset{1{,}34}{=} \text{CH}_2
$$

$$
\ell = 2\ell_{\text{C}=\text{C}} + \ell_{\text{C}-\text{C}} = 2 \cdot 1{,}34 + 1{,}54 = 4{,}22 \ \text{Å}
$$

Ящик берут длиннее цепочки: электронная плотность выходит за крайние атомы примерно на длину связи, поэтому добавляем ещё 1,34 Å:

$$
a = 4{,}22 + 1{,}34 = 5{,}56 \approx 6 \ \text{Å}
$$

Энергия уровней частицы в ящике:

$$
E_n = \frac{\pi^2 n^2 \hbar^2}{2 m a^2}, \qquad n = 1, 2, 3, \dots
$$

$$
m = 9{,}1 \cdot 10^{-31} \ \text{кг}, \qquad
\hbar = 1{,}05 \cdot 10^{-34} \ \text{Дж} \cdot \text{с}
$$

$$
E_1 = \frac{\pi^2 \cdot \left( 1{,}05 \cdot 10^{-34} \right)^2}{2 \cdot 9{,}1 \cdot 10^{-31} \cdot \left( 6 \cdot 10^{-10} \right)^2}
= \frac{1{,}09 \cdot 10^{-67}}{6{,}55 \cdot 10^{-49}} \approx 1{,}7 \cdot 10^{-19} \ \text{Дж}
$$

$$
E_2 = 4 E_1 \approx 6{,}7 \cdot 10^{-19} \ \text{Дж}, \qquad
E_3 = 9 E_1 \approx 15 \cdot 10^{-19} \ \text{Дж}
$$

Четыре электрона по два занимают уровни $n = 1$ и $n = 2$; верхний заполненный — $n = 2$, переход идет на $n = 3$. Энергия перехода связана с длиной волны поглощаемого света:

$$
\Delta E_{2 \to 3} = \frac{c \cdot h}{\lambda} = \left[ \frac{\text{м} \cdot \text{Дж} \cdot \text{с}}{\text{с} \cdot \text{м}} \right] = \left[ \text{Дж} \right]
$$

$$
\lambda = \frac{c h}{\Delta E_{2 \to 3}}
= \frac{2{,}998 \cdot 10^8 \cdot 6{,}626 \cdot 10^{-34}}{\left( 15 - 6{,}7 \right) \cdot 10^{-19}}
\approx 2{,}4 \cdot 10^{-7} \ \text{м} = 240 \ \text{нм}
$$

Полоса поглощения бутадиена лежит в ультрафиолете — модель ящика дает правильный порядок величины.

## Распределение плотности вероятности

**Задача.** Найти распределение плотности вероятности частицы, находящейся в потенциальной яме.

![Плотность вероятности для n = 1, 2, 3 в ящике 0 ≤ x ≤ a: число узловых точек внутри ящика равно n − 1](/kvantovaya-himiya/images/uprazhneniya/plotnost-v-yashchike.png)

Плотность вероятности — произведение $\psi\psi^*$:

$$
P(x) = \psi(x)\, \psi^*(x), \qquad
\psi = \sqrt{\frac{2}{a}} \sin\frac{\pi n_x}{a} x, \qquad
P(x) = \frac{2}{a} \sin^2 \frac{\pi n_x}{a} x
$$

**Узловые точки** — где плотность обращается в ноль:

$$
\frac{2}{a} \sin^2 \frac{\pi n_x}{a} x = 0
\quad \Rightarrow \quad
\frac{\pi n_x}{a} x = \pi k
\quad \Rightarrow \quad
x = \frac{k a}{n_x}, \qquad k = 0, 1, 2, \dots, n_x
$$

$$
\begin{aligned}
n_x = 1 &: \quad x = 0,\ a \\
n_x = 2 &: \quad x = 0,\ a/2,\ a \\
n_x = 3 &: \quad x = 0,\ a/3,\ 2a/3,\ a
\end{aligned}
$$

Максимумы плотности — где производная равна нулю:

$$
\begin{aligned}
P'(x) &= \frac{2}{a} \cdot 2 \sin\frac{\pi n_x}{a} x \cdot \cos\frac{\pi n_x}{a} x \cdot \frac{\pi n_x}{a}
= \frac{4 \pi n_x}{a^2} \sin\frac{\pi n_x}{a} x \cdot \cos\frac{\pi n_x}{a} x = \\
&= \frac{2 \pi n_x}{a^2} \sin\frac{2 \pi n_x}{a} x = 0
\end{aligned}
$$

$$
\frac{2 \pi n_x}{a} x = \pi k
\quad \Rightarrow \quad
x = \frac{k a}{2 n_x}
$$

- $n_x = 1$: $x = \dfrac{ka}{2}$, $k = 0, 1, 2$ — максимум в середине ящика, $x = a/2$;
- $n_x = 2$: $x = \dfrac{ka}{4}$, $k = 0, 1, 2, 3, 4$ — максимумы при $a/4$ и $3a/4$ (четные $k$ дают узлы).

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

### Среднее значение импульса

По пятому постулату среднее значение импульса — интеграл с оператором $\hat{p}_x = -i\hbar \dfrac{d}{dx}$:

$$
\begin{aligned}
\langle p_x \rangle
&= \int\limits_0^a \psi^* \left( -i\hbar \right) \frac{d}{dx} \psi \, d\tau = \\
&= \int\limits_0^a \sqrt{\frac{2}{a}} \sin\frac{\pi n_x}{a} x \cdot \left( -i\hbar \right) \sqrt{\frac{2}{a}} \cos\frac{\pi n_x}{a} x \cdot \frac{\pi n_x}{a} \, dx = \\
&= -\frac{2\hbar}{a} \frac{\pi n_x}{a}\, i \int\limits_0^a \sin\frac{\pi n_x}{a} x \cos\frac{\pi n_x}{a} x \, dx
= -\frac{\hbar \pi n_x i}{a^2} \int\limits_0^a \sin\frac{2 \pi n_x}{a} x \, dx = \\
&= \frac{\hbar \pi n_x i}{a^2} \cdot \frac{a}{2 \pi n_x} \cos\frac{2 \pi n_x}{a} x \,\Big|_0^a
= \frac{\hbar i}{2a} \left( 1 - 1 \right) = 0
\end{aligned}
$$

Среднее значение импульса частицы в ящике равно нулю: частица с равной вероятностью движется вправо и влево.

## Модель гармонического осциллятора

**Задача.** Найти значения силовой постоянной связи, используя характеристическую частоту колебания инфракрасных спектров. Связать с полосой поглощения.

Уровни осциллятора и его собственная частота:

$$
E = h \nu_0 \left( n + \frac{1}{2} \right), \qquad
\nu_0 = \frac{1}{2\pi} \sqrt{\frac{k}{m}}
$$

Соседние уровни отстоят на $\Delta E = h\nu_0$, поэтому частота полосы поглощения в ИК-спектре равна собственной частоте осциллятора. В спектрах частоту задают волновым числом $\bar{\nu}$ (в см⁻¹):

$$
\bar{\nu} = \frac{\nu}{c} \quad \Rightarrow \quad \nu = \bar{\nu} c, \qquad
\bar{\nu} c = \frac{1}{2\pi} \sqrt{\frac{k}{m}}
$$

Для двухатомной молекулы $m$ — приведенная масса, массы атомов переводят в килограммы:

$$
m = \frac{m_1 m_2}{m_1 + m_2}, \qquad
k = 4 \pi^2 c^2 \bar{\nu}^2 m \ \left[ \frac{\text{кг}}{\text{с}^2} = \frac{\text{Н}}{\text{м}} \right]
$$
