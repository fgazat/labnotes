---
title: "Средний радиус орбитали: водородоподобные и слейтеровские функции"
type: docs
math: true
weight: 11
description: "Упражнения 11 по квантовой химии: средний радиус ⟨r⟩ = ∫R²r³dr для водородоподобных 1s и 2s орбиталей (H, He⁺, Li²⁺), слейтеровская орбиталь R = (2ξ/a₀)^{n+½}[(2n)!]^{−½} r^{n−1} e^{−ξr/a₀}, эффективный заряд ξ для Li, Na, Cr, средний радиус внешнего электрона Li и Na."
---

Задачи к статьям [Водородоподобный атом](../../vodorodopodobnyj-atom/) и [Слейтеровские орбитали](../../sleiterovskie-orbitali/).

## Средний радиус водородоподобной орбитали

Средний радиус — среднее значение $r$ с радиальной функцией (по пятому постулату; угловая часть нормирована и дает единицу):

$$
\langle r \rangle = \int\limits_0^\infty R(r)\, r\, R(r)\, r^2 \, dr = \int\limits_0^\infty R^2(r)\, r^3 \, dr
$$

Для $1s$-орбитали это дает $\langle r \rangle = \dfrac{3a_0}{2Z}$, где $a_0 = 0{,}53$ Å: для H — $0{,}78$ Å, для He⁺ — $0{,}40$ Å.

**Задача.** Средний радиус внешнего электрона в атоме натрия. Вообще можно посчитать радиус для любого электрона.

Начнем с лития, $\text{Li}: 1s^2 2s^1$ — внешний электрон на $2s$-орбитали. Водородоподобная $2s$-функция с зарядом ядра $Z$:

$$
R_{2s}(r) = 2 \left( \frac{Z}{2a_0} \right)^{3/2} \left( 1 - \frac{Zr}{2a_0} \right) e^{-\frac{Zr}{2a_0}}
= \frac{1}{\sqrt{2}} \left( \frac{Z}{a_0} \right)^{3/2} \left( 1 - \frac{Zr}{2a_0} \right) e^{-\frac{Zr}{2a_0}}
$$

Возводим в квадрат, раскрываем скобку и интегрируем почленно:

$$
\begin{aligned}
\langle r_{\text{Li}} \rangle = \int\limits_0^\infty R_{2s}^2(r)\, r^3 \, dr
&= \frac{1}{2} \left( \frac{Z}{a_0} \right)^3 \int\limits_0^\infty \left( 1 - \frac{Zr}{2a_0} \right)^2 e^{-\frac{Zr}{a_0}} r^3 \, dr = \\
&= \frac{1}{2} \left( \frac{Z}{a_0} \right)^3 \int\limits_0^\infty \left( 1 - \frac{Zr}{a_0} + \frac{Z^2 r^2}{4a_0^2} \right) e^{-\frac{Zr}{a_0}} r^3 \, dr
\end{aligned}
$$

Каждое слагаемое — табличный интеграл:

$$
\int\limits_0^\infty x^n e^{-ax} \, dx = \frac{n!}{a^{n+1}}
$$

$$
\begin{aligned}
\langle r_{\text{Li}} \rangle
&= \frac{1}{2} \left( \frac{Z}{a_0} \right)^3 \left( \int\limits_0^\infty e^{-\frac{Zr}{a_0}} r^3 \, dr - \frac{Z}{a_0} \int\limits_0^\infty e^{-\frac{Zr}{a_0}} r^4 \, dr + \frac{Z^2}{4a_0^2} \int\limits_0^\infty e^{-\frac{Zr}{a_0}} r^5 \, dr \right) = \\
&= \frac{1}{2} \left( \frac{Z}{a_0} \right)^3 \left( \frac{3!}{\left( Z/a_0 \right)^4} - \frac{Z}{a_0} \cdot \frac{4!}{\left( Z/a_0 \right)^5} + \frac{Z^2}{4a_0^2} \cdot \frac{5!}{\left( Z/a_0 \right)^6} \right) = \\
&= \frac{1}{2} \cdot \frac{a_0}{Z} \left( 6 - 24 + 30 \right) = \frac{6a_0}{Z}
\end{aligned}
$$

Для $Z = 3$: $\langle r \rangle = 2a_0 \approx 1{,}06$ Å. Для сравнения — $3s$-орбиталь (внешний электрон натрия):

$$
R_{3s}(r) = \frac{2}{3\sqrt{3}} \left( \frac{Z}{a_0} \right)^{3/2} \left( 1 - \frac{2Zr}{3a_0} + \frac{2Z^2 r^2}{27a_0^2} \right) e^{-\frac{Zr}{3a_0}}, \qquad
\langle r \rangle_{3s} = \frac{27 a_0}{2Z}
$$

Мы считали радиус двухзарядного иона: водородоподобная функция с $Z = 3$ описывает $\text{Li}^{2+}$ — один электрон в поле голого ядра, без остальных электронов.

![Ион Li²⁺: ядро 3+ и один электрон на 2s](/kvantovaya-himiya/images/uprazhneniya/li-ion.png)

Для того чтобы учесть отталкивание электронов, надо использовать приближенные функции. Для этого расчёта надо использовать не водородоподобную орбиталь, а приближенную.

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

## Атомная орбиталь Слейтера — Зенера

$$
R_{\text{SZ}}(r) = \left( \frac{2\xi}{a_0} \right)^{n + \frac{1}{2}} \left[ (2n)! \right]^{-1/2} r^{n-1} e^{-\frac{\xi r}{a_0}}, \qquad
\xi = \frac{Z - S_{\text{экр}}}{n}
$$

Постоянная экранирования складывается из вкладов остальных электронов — по [правилам Слейтера](../../sleiterovskie-orbitali/#постоянная-экранирования):

$$
\begin{aligned}
n = n_0 &: \quad S = 0{,}3 \\
n = n_0 - 1 &: \quad S = 0{,}85 \\
n \le n_0 - 2 &: \quad S = 1
\end{aligned}
$$

**Li**, $1s^2 2s^1$: для $2s$-электрона два $1s$-электрона на уровне $n_0 - 1$:

$$
\xi_{\text{Li}} = \frac{3 - 2 \cdot 0{,}85}{2} = 0{,}65
$$

**Na**, $1s^2 2s^2 2p^6 3s^1$: для $3s$-электрона восемь электронов уровня $n = 2$ и два электрона уровня $n = 1$:

$$
S_{\text{экр}} = 8 \cdot 0{,}85 + 2 \cdot 1 = 8{,}8, \qquad
\xi_{\text{Na}} = \frac{11 - 8{,}8}{3} = 0{,}73
$$

**Cr**, $1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1$ — для $3d$- и $4s$-электронов экранирование разное:

$$
\begin{aligned}
3d &: \quad S = 12 \cdot 0{,}3 + 8 \cdot 0{,}85 + 2 = 12{,}4, & \xi &= \frac{24 - 12{,}4}{3} = 3{,}87 \\
4s &: \quad S = 13 \cdot 0{,}85 + 8 + 2 = 21{,}05, & \xi &= \frac{24 - 21{,}05}{4} = 0{,}74
\end{aligned}
$$

## Средний радиус слейтеровской орбитали

Та же формула $\langle r \rangle = \int R^2 r^3 \, dr$, но со слейтеровской функцией. Для $2s$-электрона лития ($n = 2$, $\xi = 0{,}65$):

$$
\begin{aligned}
\langle r \rangle = \int\limits_0^\infty \left( \frac{2\xi}{a_0} \right)^5 \frac{1}{4!}\, r^2 e^{-\frac{2\xi r}{a_0}} \, r^3 \, dr
&= \left( \frac{2\xi}{a_0} \right)^5 \frac{1}{4!} \int\limits_0^\infty r^5 e^{-\frac{2\xi r}{a_0}} \, dr = \\
&= \left( \frac{2\xi}{a_0} \right)^5 \frac{1}{4!} \cdot \frac{5!}{\left( 2\xi/a_0 \right)^6}
= \frac{5 a_0}{2\xi}
\end{aligned}
$$

$$
\langle r_{\text{Li}} \rangle = \frac{5 \cdot 0{,}53}{2 \cdot 0{,}65} = 2{,}04 \ \text{Å}
$$

В общем виде для слейтеровской орбитали с главным квантовым числом $n$:

$$
\langle r \rangle = \frac{(2n + 1)\, a_0}{2\xi}
\qquad \Rightarrow \qquad
\langle r_{\text{Na}} \rangle = \frac{7 a_0}{2\xi} = \frac{7 \cdot 0{,}53}{2 \cdot 0{,}73} = 2{,}54 \ \text{Å}
$$

Экранирование раздувает орбиталь: у $\text{Li}^{2+}$ радиус $2s$-электрона $1{,}06$ Å, у нейтрального Li — $2{,}04$ Å.
