---
title: Нормировка функций и действие операторов
type: docs
math: true
weight: 2
description: "Упражнения 2 по квантовой химии: нормировка функции e^{iφ} на отрезке [0; 2π], нормировочный множитель, проверка ортогональности e^{iφ} и e^{2iφ}, действие операторов d/dx, d²/dx², радиального и углового операторов на функции."
---

Задачи к статьям [Постулаты квантовой механики](../../postulaty-kvantovoj-mekhaniki/), [Пространство волновых функций](../../prostranstvo-volnovykh-funktsij/) и [Основные операторы квантовой механики](../../osnovnye-operatory-kvantovoj-mekhaniki/).

## Нормировка волновой функции

Свойства волновых функций: волновая функция должна быть конечной, непрерывной, однозначной и нормированной:

$$
\int\limits_{-\infty}^{\infty} \psi^* \psi \, d\tau = 1
$$

**Задача.** Является ли функция $e^{i\varphi}$ волновой функцией, и если да — пронормировать ее.

$e^{i\varphi}$ — конечна, потому что это сумма синуса и косинуса: $e^{i\varphi} = \cos\varphi + i\sin\varphi$.

Пронормируем. Угол $\varphi \in [0;\, 2\pi]$:

$$
\psi = e^{i\varphi}, \qquad \psi^* = e^{-i\varphi}
$$

$$
\int\limits_0^{2\pi} e^{-i\varphi} e^{i\varphi} \, d\varphi = \int\limits_0^{2\pi} e^0 \, d\varphi = 2\pi - 0 = 2\pi
$$

Интеграл равен $2\pi$, а не единице — функция не подчиняется условиям нормировки. Т.к. в результате получилась конечная цифра, то в этом случае можно нормировать функцию.

### Нормировочный множитель

Умножим функцию на постоянную $c$ — **нормировочный множитель** — и потребуем, чтобы новая функция $c f$ была нормирована:

$$
\int f^* c \cdot f c \, d\tau = 1
\quad \Rightarrow \quad
c^2 \int f^* f \, d\tau = 1
\quad \Rightarrow \quad
c = \frac{1}{\sqrt{\int\limits_{-\infty}^{\infty} f^* f \, d\tau}}
$$

Для $f = e^{i\varphi}$ интеграл равен $2\pi$, поэтому

$$
c = \frac{1}{\sqrt{2\pi}}, \qquad \frac{1}{\sqrt{2\pi}}\, e^{i\varphi} \ \text{— нормированная}
$$

То же самое для $e^{2i\varphi}$: $\psi^* = e^{-2i\varphi}$,

$$
\int\limits_0^{2\pi} e^{-2i\varphi} e^{2i\varphi} \, d\varphi = \int\limits_0^{2\pi} e^0 \, d\varphi = 2\pi
\quad \Rightarrow \quad
c = \frac{1}{\sqrt{2\pi}}
$$

и для $e^{3i\varphi}$ снова $c = \dfrac{1}{\sqrt{2\pi}}$. В общем виде:

$$
\left.
\begin{aligned}
&\frac{1}{\sqrt{2\pi}}\, e^{i\varphi} \\
&\frac{1}{\sqrt{2\pi}}\, e^{2i\varphi} \\
&\frac{1}{\sqrt{2\pi}}\, e^{in\varphi}
\end{aligned}
\right\}
\ \text{— волновые функции, которые поддаются нормировке}
$$

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

## Ортогональность

Пространство функций — множество функций. Базис пространства функций, что это? Это набор функций $\varphi_1, \varphi_2, \varphi_3, \dots$, через которые линейно выражается любая функция пространства:

$$
f = c_1 \varphi_1 + c_2 \varphi_2 + c_3 \varphi_3 + \dots
$$

Функции $\dfrac{1}{\sqrt{2\pi}} e^{in\varphi}$ образуют такой базис. Проверим условие ортогональности для $\varphi_i = \dfrac{1}{\sqrt{2\pi}} e^{i\varphi}$ и $\varphi_j = \dfrac{1}{\sqrt{2\pi}} e^{2i\varphi}$:

$$
\begin{aligned}
\int\limits_{-\infty}^{\infty} \varphi_i^* \varphi_j \, d\tau
&= \int\limits_0^{2\pi} \frac{1}{\sqrt{2\pi}}\, e^{-i\varphi} \cdot \frac{1}{\sqrt{2\pi}}\, e^{2i\varphi} \, d\varphi
= \frac{1}{2\pi} \int\limits_0^{2\pi} e^{i\varphi} \, d\varphi = \\
&= \frac{1}{2\pi i}\, e^{i\varphi} \Big|_0^{2\pi}
= \frac{1}{2\pi i} \left( e^{2\pi i} - 1 \right) = \\
&= \frac{1}{2\pi i} \left( \cos 2\pi + i \sin 2\pi - 1 \right)
= \frac{1}{2\pi i} \left( 1 + 0 - 1 \right) = 0
\end{aligned}
$$

Здесь использована формула Эйлера:

$$
e^{i\varphi} = \cos\varphi + i\sin\varphi, \qquad e^{-i\varphi} = \cos\varphi - i\sin\varphi
$$

Интеграл равен нулю — функции ортогональны.

## Действие операторов

Оператор — правило, по которому одной функции ставится в соответствие другая. Подействуем операторами на функции.

**1.** $\hat{L} = \dfrac{d}{dx}$, $f = x e^{-x}$:

$$
\hat{L} f = \frac{d\left( x e^{-x} \right)}{dx} = e^{-x} - x e^{-x} = e^{-x}\left( 1 - x \right)
$$

**2.** $\hat{L} = \dfrac{d^2}{dx^2}$, $f = e^{-x^2}$:

$$
\hat{L} f = \frac{d^2}{dx^2}\left( e^{-x^2} \right)
= \frac{d}{dx}\left( e^{-x^2} \cdot (-2x) \right)
= e^{-x^2} \cdot 4x^2 - 2 e^{-x^2}
= 2 e^{-x^2}\left( 2x^2 - 1 \right)
$$

**3.** $\hat{L} = \dfrac{d}{dx}\left( x \dfrac{d}{dx} \right)$, $f = x e^{-x^2}$. Оператор действует справа налево: сначала $\dfrac{d}{dx}$, потом умножение на $x$, потом снова $\dfrac{d}{dx}$:

$$
\begin{aligned}
\hat{L} f
&= \frac{d}{dx}\left( x \cdot \frac{d}{dx}\left( x e^{-x^2} \right) \right)
= \frac{d}{dx}\left( x \left( e^{-x^2} + x \cdot e^{-x^2} \cdot (-2x) \right) \right) = \\
&= \frac{d}{dx}\left( x e^{-x^2} - 2x^3 e^{-x^2} \right)
= \frac{d}{dx}\left( e^{-x^2}\left( x - 2x^3 \right) \right) = \\
&= e^{-x^2}\left( x - 2x^3 \right)(-2x) + e^{-x^2}\left( 1 - 6x^2 \right)
= e^{-x^2}\left( -2x^2 + 4x^4 + 1 - 6x^2 \right) = \\
&= e^{-x^2}\left( 4x^4 - 8x^2 + 1 \right)
\end{aligned}
$$

**4.** Радиальная часть оператора Лапласа $\hat{L} = \dfrac{1}{r^2} \dfrac{d}{dr}\left( r^2 \dfrac{d}{dr} \right)$, $f = r e^{-r}$:

$$
\begin{aligned}
\hat{L} f
&= \frac{1}{r^2} \frac{d}{dr}\left( r^2 \frac{d}{dr}\left( r e^{-r} \right) \right)
= \frac{1}{r^2} \frac{d}{dr}\left( r^2 \left( e^{-r} + r e^{-r} \cdot (-1) \right) \right) = \\
&= \frac{1}{r^2} \frac{d}{dr}\left( e^{-r}\left( r^2 - r^3 \right) \right)
= \frac{1}{r^2} \left( e^{-r}\left( r^2 - r^3 \right) \cdot (-1) + e^{-r}\left( 2r - 3r^2 \right) \right) = \\
&= \frac{1}{r^2} \left( -e^{-r} r^2 + e^{-r} r^3 + e^{-r} \cdot 2r - e^{-r} \cdot 3r^2 \right) = \\
&= e^{-r}\left( -1 + r + \frac{2}{r} - 3 \right)
= e^{-r}\left( r + \frac{2}{r} - 4 \right)
\end{aligned}
$$

**5.** Угловая часть оператора Лапласа $\hat{L} = \dfrac{1}{\sin\theta} \dfrac{d}{d\theta}\left( \sin\theta \dfrac{d}{d\theta} \right)$, $f = \cos\theta$. Понадобятся производные $(\sin\theta)' = \cos\theta$ и $(\cos\theta)' = -\sin\theta$:

$$
\begin{aligned}
\hat{L} f
&= \frac{1}{\sin\theta} \frac{d}{d\theta}\left( \sin\theta \frac{d}{d\theta}\left( \cos\theta \right) \right)
= \frac{1}{\sin\theta} \frac{d}{d\theta}\left( \sin\theta \cdot (-\sin\theta) \right) = \\
&= \frac{1}{\sin\theta} \frac{d}{d\theta}\left( -\sin^2\theta \right)
= \frac{1}{\sin\theta} \left( -2\sin\theta \right) \cos\theta
= -2\cos\theta
\end{aligned}
$$

Функция $\cos\theta$ переходит в саму себя с множителем $-2$ — это собственная функция оператора с собственным значением $-2$ (о собственных функциях — в статье [Операторные уравнения](../../operatornye-uravneniya/)).
