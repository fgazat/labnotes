---
title: Линейность операторов и коммутаторы
type: docs
math: true
weight: 3
description: "Упражнения 3 по квантовой химии: проверка линейности операторов x d/dx и e^{d/dx}, поиск коммутаторов [d²/dx², 1/x] и [p̂ₓ, kx²/2], построение оператора момента импульса из классического выражения M = r × p, порядок действий при квантово-химическом описании молекул."
---

Задачи к статьям [Свойства операторов](../../svojstva-operatorov/) и [Основные операторы квантовой механики](../../osnovnye-operatory-kvantovoj-mekhaniki/).

Свойства линейности и самосопряженности — проверка этих свойств есть в экзамене.

## Свойства линейности

Оператор линеен, если $\hat{L}\left( f_1 + f_2 \right) = \hat{L} f_1 + \hat{L} f_2$. Проверим для $\hat{L} = x \dfrac{d}{dx}$:

$$
x \frac{d}{dx}\left( f_1 + f_2 \right)
= x \frac{d\left( f_1 + f_2 \right)}{dx}
= x \left( \frac{df_1}{dx} + \frac{df_2}{dx} \right)
= \frac{x\,df_1}{dx} + \frac{x\,df_2}{dx}
= \hat{L} f_1 + \hat{L} f_2
$$

и для $\hat{L} = \dfrac{d}{dx}\left( x \dfrac{d}{dx} \right)$:

$$
\frac{d}{dx}\left( x \frac{d}{dx} \right)\left( f_1 + f_2 \right)
= \frac{d}{dx}\left( \frac{x\,df_1}{dx} + \frac{x\,df_2}{dx} \right)
= \frac{d}{dx} x \frac{df_1}{dx} + \frac{d}{dx} x \frac{df_2}{dx}
= \hat{L} f_1 + \hat{L} f_2
$$

Оба оператора — линейные.

Теперь $\hat{L} = e^{d/dx}$ — сначала берем производную, а потом возводим производную в эту степень:

$$
\exp\left( \frac{d\left( f_1 + f_2 \right)}{dx} \right)
= \exp\left( \frac{df_1}{dx} \right) \exp\left( \frac{df_2}{dx} \right)
= \hat{L} f_1 \cdot \hat{L} f_2
$$

Получилось произведение, а не сумма — такой оператор **не линеен**.

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

## Поиск коммутатора

В билетах: поиск коммутатора. Пусть $\hat{L} = \dfrac{d^2}{dx^2}$, $\hat{M} = \dfrac{1}{x}$. Условие коммутации:

$$
\hat{L}\hat{M} = \hat{M}\hat{L}, \qquad \hat{L}\hat{M} - \hat{M}\hat{L} = \left[ \hat{L}, \hat{M} \right]
$$

Действуем на произвольную функцию $f$ сначала $\hat{M}$, потом $\hat{L}$:

$$
\begin{aligned}
\hat{L}\hat{M} f
&= \frac{d^2\left( f \cdot x^{-1} \right)}{dx^2}
= \frac{d}{dx}\left( x^{-1} \frac{df}{dx} - f \cdot x^{-2} \right) = \\
&= \frac{d}{dx}\left( x^{-1} \frac{df}{dx} \right) - \frac{d}{dx}\left( f x^{-2} \right) = \\
&= x^{-1} \frac{d^2 f}{dx^2} - x^{-2} \frac{df}{dx} - \left( f \cdot (-2) \cdot x^{-3} + x^{-2} \frac{df}{dx} \right) = \\
&= x^{-1} \frac{d^2 f}{dx^2} - 2x^{-2} \frac{df}{dx} + 2f x^{-3}
\end{aligned}
$$

В обратном порядке:

$$
\hat{M}\hat{L} f = \frac{1}{x} \frac{d^2 f}{dx^2}
$$

Вычитаем — слагаемые $x^{-1} \dfrac{d^2 f}{dx^2}$ сокращаются:

$$
\hat{L}\hat{M} f - \hat{M}\hat{L} f
= x^{-1} \frac{d^2 f}{dx^2} - 2x^{-2} \frac{df}{dx} + 2f x^{-3} - x^{-1} \frac{d^2 f}{dx^2}
= 2f x^{-3} - 2x^{-2} \frac{df}{dx}
$$

$$
\left[ \frac{d^2}{dx^2},\ \frac{1}{x} \right] = \frac{2}{x^3} - \frac{2}{x^2} \frac{d}{dx}
$$

Оператор — коммутатор: он не равен нулю, значит $\hat{L}$ и $\hat{M}$ не коммутируют.

### Коммутатор импульса и потенциальной энергии

$\hat{L} = \hat{p}_x = -i\hbar \dfrac{d}{dx}$, $\hat{M} = \dfrac{kx^2}{2}$ (потенциальная энергия гармонического осциллятора):

$$
\hat{L}\hat{M} f
= -i\hbar \frac{d}{dx}\left( \frac{kx^2}{2} \cdot f \right)
= -i\hbar \left( \frac{2kx}{2} f + \frac{kx^2}{2} \frac{df}{dx} \right)
= -i\hbar k x f - \frac{i\hbar k x^2}{2} \frac{df}{dx}
$$

$$
\hat{M}\hat{L} f
= \frac{kx^2}{2} \cdot \left( -i\hbar \frac{df}{dx} \right)
= -\frac{i\hbar k x^2}{2} \frac{df}{dx}
$$

$$
\hat{L}\hat{M} f - \hat{M}\hat{L} f = -i\hbar k x f
\qquad \Rightarrow \qquad
\left[ \hat{p}_x,\ \frac{kx^2}{2} \right] = -i\hbar k x
$$

## Построение операторов

Момент количества движения (момент импульса). Порядок построения оператора: 1. Записать классическое выражение для величины.

Точка массы $m$ движется по окружности радиуса $r$ со скоростью $v$; угловая скорость $\omega$ направлена вдоль оси вращения:

![Вращение точки по окружности: радиус r, скорость v, угловая скорость ω вдоль оси](/kvantovaya-himiya/images/uprazhneniya/vrashchenie.png)

$$
v = \omega r, \qquad m r^2 = I, \qquad a_{\text{ц}} = \frac{v^2}{r}
$$

$$
M = m v r = I \omega, \qquad \vec{M} = \vec{r} \times \vec{p}
$$

Кинетическая энергия вращения выражается через момент инерции $I$ и момент импульса $M$:

$$
T = \frac{m v^2}{2} = \frac{m \omega^2 r^2}{2} = \frac{I \omega^2}{2}, \qquad
T = \frac{p^2}{2m}, \qquad
T = \frac{I^2 \omega^2}{2I} = \frac{M^2}{2I}
$$

Раскроем векторное произведение через определитель:

$$
\begin{aligned}
\vec{M}
&= \begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
x & y & z \\
p_x & p_y & p_z
\end{vmatrix}
= \vec{i} \begin{vmatrix} y & z \\ p_y & p_z \end{vmatrix} - \vec{j} \begin{vmatrix} x & z \\ p_x & p_z \end{vmatrix} + \vec{k} \begin{vmatrix} x & y \\ p_x & p_y \end{vmatrix} = \\
&= \vec{i}\left( y p_z - z p_y \right) + \vec{j}\left( z p_x - x p_z \right) + \vec{k}\left( x p_y - y p_x \right)
\end{aligned}
$$

$$
\vec{M} = \begin{pmatrix}
y p_z - z p_y \\
z p_x - x p_z \\
x p_y - y p_x
\end{pmatrix}
$$

Мы завершили рассмотрение классического выражения. Дальше по [общему правилу](../../osnovnye-operatory-kvantovoj-mekhaniki/) координаты остаются на месте, а проекции импульса заменяются операторами $\hat{p}_x = -i\hbar \dfrac{\partial}{\partial x}$ и т.д.

## §7. Порядок действий при квантово-химическом описании молекул

1. Записывается оператор Гамильтона для данной системы.
2. Записать уравнение Шредингера с этим оператором и решить его. (Здесь находится волновая функция и энергия.)
3. Если это необходимо, рассчитываются свойства системы по постулату №5.

Шредингер сделал в 4-х статьях, решил задачи.
