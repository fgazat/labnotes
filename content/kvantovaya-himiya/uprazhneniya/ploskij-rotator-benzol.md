---
title: "Плоский ротатор: π-электроны бензола и вращательный спектр"
type: docs
math: true
weight: 9
description: "Упражнения 9 по квантовой химии: оператор M̂_z в полярных координатах равен −iħ∂/∂φ; плоский жесткий ротатор — уравнение Шредингера, условие периодичности, E = n²ħ²/(2mr²), ψ = e^{±inφ}/√(2π); π-электроны бензола на кольце и длина волны перехода; момент инерции из расстояния между линиями вращательного спектра."
---

Задачи к статьям [Жесткий ротатор](../../zhestkij-rotator/) и [Оператор момента импульса](../operator-momenta-impulsa/).

## Оператор M̂_z в полярных координатах

Проекция момента импульса на ось $z$ в декартовых координатах и переход к полярным ([операторы $\partial/\partial x$, $\partial/\partial y$ — с прошлого занятия](../silovaya-postoyannaya-i-polyarnye-koordinaty/#метод-крамера)):

$$
\hat{M}_z = (-i\hbar) \left( x \frac{\partial}{\partial y} - y \frac{\partial}{\partial x} \right), \qquad
x = r\cos\varphi, \quad y = r\sin\varphi
$$

$$
\frac{\partial}{\partial x} = \frac{1}{r} \left( r\cos\varphi \frac{\partial}{\partial r} - \sin\varphi \frac{\partial}{\partial \varphi} \right), \qquad
\frac{\partial}{\partial y} = \frac{1}{r} \left( r\sin\varphi \frac{\partial}{\partial r} + \cos\varphi \frac{\partial}{\partial \varphi} \right)
$$

$$
\begin{aligned}
\hat{M}_z
&= -i\hbar \left( r\cos\varphi \cdot \frac{1}{r} \left( r\sin\varphi \frac{\partial}{\partial r} + \cos\varphi \frac{\partial}{\partial \varphi} \right) - \right. \\
&\qquad \left. - r\sin\varphi \cdot \frac{1}{r} \left( r\cos\varphi \frac{\partial}{\partial r} - \sin\varphi \frac{\partial}{\partial \varphi} \right) \right) = \\
&= -i\hbar \left( r\sin\varphi\cos\varphi \frac{\partial}{\partial r} + \cos^2\varphi \frac{\partial}{\partial \varphi} - r\sin\varphi\cos\varphi \frac{\partial}{\partial r} + \sin^2\varphi \frac{\partial}{\partial \varphi} \right) = \\
&= -i\hbar \frac{\partial}{\partial \varphi}
\end{aligned}
$$

Члены с $\dfrac{\partial}{\partial r}$ сокращаются, $\cos^2\varphi + \sin^2\varphi = 1$: вращение вокруг оси $z$ описывается одной координатой $\varphi$.

## Плоский жесткий ротатор

**Задача.** Используя модель плоского жесткого ротатора, найти энергию и волновую функцию.

![Бензольное кольцо и его модель: частица на окружности радиуса r](/kvantovaya-himiya/images/uprazhneniya/benzol-kolco.png)

Частица движется по окружности радиуса $r$ — например, π-электрон по кольцу бензола. Потенциальная энергия на окружности постоянна, ее можно принять за ноль, и гамильтониан — только кинетическая энергия:

$$
\hat{H}\psi = E\psi, \qquad
\hat{H} = \hat{T} + \hat{U} = \hat{T} = -\frac{\hbar^2}{2m} \nabla^2 = -\frac{\hbar^2}{2m} \left( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} \right)
$$

В полярных координатах ([вывод — на прошлом занятии](../silovaya-postoyannaya-i-polyarnye-koordinaty/#оператор-лапласа)):

$$
\nabla^2 = \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2}{\partial \varphi^2}, \qquad
\hat{H} = -\frac{\hbar^2}{2m} \left( \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2}{\partial \varphi^2} \right)
$$

Ротатор жесткий: $r = \text{const} \Rightarrow \dfrac{\partial}{\partial r} = 0$, радиальная часть исчезает. Остается одна переменная $\varphi$, а $mr^2 = I$ — момент инерции:

$$
\hat{H} = -\frac{\hbar^2}{2m} \cdot \frac{1}{r^2} \frac{\partial^2}{\partial \varphi^2} = -\frac{\hbar^2}{2I} \frac{\partial^2}{\partial \varphi^2}
$$

$$
-\frac{\hbar^2}{2I} \frac{\partial^2}{\partial \varphi^2} \psi = E\psi
\qquad \Rightarrow \qquad
\frac{\partial^2}{\partial \varphi^2} \psi + \frac{2I}{\hbar^2} E\psi = 0
$$

Линейное уравнение 2 порядка с постоянными коэффициентами. Решение ищем в виде экспоненты:

$$
\psi = C e^{k\varphi}
\quad \Rightarrow \quad
k^2 + \frac{2I}{\hbar^2} E = 0
\quad \Rightarrow \quad
k = \sqrt{-\frac{2IE}{\hbar^2}} = \pm i \sqrt{\frac{2IE}{\hbar^2}}
$$

$$
\psi = C \cdot e^{\pm i \sqrt{\frac{2IE}{\hbar^2}}\, \varphi} = C \cdot e^{\pm i \frac{\sqrt{2IE}}{\hbar} \varphi}
$$

### Условие периодичности

Обойдя окружность, возвращаемся в ту же точку — волновая функция должна быть однозначной:

$$
\psi(\varphi) = \psi(\varphi + 2\pi)
$$

$$
\begin{aligned}
C \exp\left( \pm \frac{i\sqrt{2mr^2E}}{\hbar}\, \varphi \right) &= C \exp\left( \pm \frac{i\sqrt{2mr^2E}}{\hbar} \left( \varphi + 2\pi \right) \right) \\
\exp\left( \pm \frac{i\sqrt{2mr^2E}}{\hbar} \cdot 2\pi \right) &= 1
\end{aligned}
$$

По формуле Эйлера:

$$
\cos\left( 2\pi \frac{\sqrt{2mr^2E}}{\hbar} \right) + i \sin\left( \frac{\sqrt{2mr^2E}}{\hbar}\, 2\pi \right) = 1
$$

$$
\begin{cases}
\cos\left( 2\pi \dfrac{\sqrt{2mr^2E}}{\hbar} \right) = 1 \\
\sin\left( 2\pi \dfrac{\sqrt{2mr^2E}}{\hbar} \right) = 0
\end{cases}
\quad \Rightarrow \quad
\frac{\sqrt{2mr^2E}}{\hbar} \cdot 2\pi = 2\pi n
\quad \Rightarrow \quad
\frac{\sqrt{2mr^2E}}{\hbar} = n
$$

$$
\frac{2mr^2E}{\hbar^2} = n^2
\quad \Rightarrow \quad
\boxed{E = \frac{n^2\hbar^2}{2mr^2}, \qquad n = 0, 1, 2, \dots}
$$

$$
\psi = C \cdot e^{\pm in\varphi} = \frac{1}{\sqrt{2\pi}}\, e^{\pm in\varphi}
$$

Нормировочный множитель $\dfrac{1}{\sqrt{2\pi}}$ — [как в первом упражнении](../normirovka-i-operatory/). Энергия квантуется из-за условия периодичности, а не из-за граничных условий, как в ящике; уровень $n = 0$ с $E = 0$ разрешен.

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

### π-электроны бензола

Шесть π-электронов бензола заселяют уровни ротатора по два:

![Заполнение уровней плоского ротатора шестью электронами: n = 0, 1, 2 заняты, n = 3 свободен](/kvantovaya-himiya/images/uprazhneniya/urovni-rotatora.png)

Переход с верхнего заполненного уровня $n = 2$ на $n = 3$:

$$
\Delta E = \frac{\hbar^2}{2mr^2} \left( n_3^2 - n_2^2 \right) = h\nu = \frac{hc}{\lambda}, \qquad
E = \frac{n^2\hbar^2}{2mr^2}
$$

$$
\frac{\hbar^2}{2mr^2} \left( 9 - 4 \right) = \frac{hc}{\lambda}
\quad \Rightarrow \quad
\frac{5 h^2}{8\pi^2 m r^2} = \frac{hc}{\lambda}
$$

Радиус кольца $r = 1{,}4 \ \text{Å}$ (длина связи C–C в бензоле), $m$ — масса электрона:

$$
\begin{aligned}
\lambda = \frac{8\pi^2 m c r^2}{5h}
&= \frac{8 \cdot 9{,}87 \cdot 9 \cdot 10^{-31} \cdot 3 \cdot 10^8 \cdot \left( 1{,}4 \cdot 10^{-10} \right)^2}{5 \cdot 6{,}62 \cdot 10^{-34}} = \\
&\approx 1{,}3 \cdot 10^{-7} \ \text{м} = 130 \ \text{нм}
\end{aligned}
$$

**Замечание.** Уровни с $n \ne 0$ двукратно вырождены — функции $e^{+in\varphi}$ и $e^{-in\varphi}$ имеют одну энергию. Если это учесть, шесть электронов занимают $n = 0$ (2 электрона) и $n = \pm 1$ (4 электрона), и первый переход идет с $n = 1$ на $n = 2$: $\Delta E = 3\hbar^2/(2mr^2)$, $\lambda \approx 210 \ \text{нм}$ — ближе к опытной полосе бензола (около 200 нм).

## Вращательный спектр

Если вращательный спектр состоит из линий, отстоящих друг от друга на $\Delta\bar{\nu} = 3{,}84 \ \text{см}^{-1}$, найти момент инерции молекулы.

Энергия вращения — объемного ротатора и плоского:

$$
\begin{aligned}
&E = \frac{\hbar^2}{2I}\, \ell(\ell + 1) = B\, \ell(\ell + 1) \ \text{(объемный)}, \qquad
E = \frac{\hbar^2}{2I}\, n^2 \ \text{(плоский)} \\
&E = h\nu = h\bar{\nu}c
\end{aligned}
$$

$$
I = M R^2, \qquad M = \frac{m_1 m_2}{m_1 + m_2}
$$

Для объемного ротатора соседние линии спектра отстоят на $2B$ ([правило отбора $\Delta\ell = \pm 1$](../../zhestkij-rotator/#энергетический-спектр)), поэтому

$$
\begin{aligned}
hc\,\Delta\bar{\nu} &= 2 \frac{\hbar^2}{2I} = \frac{\hbar^2}{I} \\
I &= \frac{\hbar^2}{hc\,\Delta\bar{\nu}}
= \frac{\left( 1{,}05 \cdot 10^{-34} \right)^2}{6{,}63 \cdot 10^{-34} \cdot 3 \cdot 10^{10} \cdot 3{,}84}
\approx 1{,}5 \cdot 10^{-46} \ \text{кг} \cdot \text{м}^2
\end{aligned}
$$

Зная массы атомов, из $I = MR^2$ находят длину связи $R$.
