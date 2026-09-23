---
title: Вырожденные функции и матричное представление
type: docs
math: true
weight: 5
description: "Упражнения 5 по квантовой химии: сумма собственных функций и вырождение, действие матрицы на вектор-столбец, умножение матриц и коммутирующие матрицы, матричное представление оператора −iħ∂/∂φ в базисе e^{inφ}/√(2π), вычисление определителя 3×3."
---

Задачи к статьям [Операторные уравнения](../../operatornye-uravneniya/) и [Матричное представление операторов](../../matrichnoe-predstavlenie-operatorov/).

## Сумма собственных функций

Напомним [итог прошлого занятия](../operator-momenta-impulsa/#собственные-функции-и-собственные-значения):

$$
\frac{1}{\sin\theta} \frac{d}{d\theta}\left( \sin\theta \frac{d}{d\theta} \right) \cos\theta = -2 \cos\theta
\ \text{— собственная функция}
$$

Операторное уравнение $\hat{L} f = \ell f$. Будет ли линейная комбинация решением? Есть ли 2 собственные функции, будет ли сумма являться собственной функцией? Пусть $f_1$ — собственная, $f_2$ — собственная:

$$
\hat{L}\left( f_1 + f_2 \right) = \hat{L} f_1 + \hat{L} f_2 = \ell_1 f_1 + \ell_2 f_2
\ \overset{\ell_1 = \ell_2}{=}\
\ell \left( f_1 + f_2 \right)
$$

Сумма — собственная функция только если $\ell_1 = \ell_2$. Такие функции называются **вырожденными**: если у двух волновых функций одинаковое собственное значение, то такие функции вырожденные. Любая линейная комбинация вырожденных функций — тоже собственная функция с тем же собственным значением!

## Матричная математика

Функция задается столбцом коэффициентов разложения по базису $\varphi_1, \varphi_2, \varphi_3$:

$$
f = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}
\qquad \Rightarrow \qquad
f = 1 \cdot \varphi_1 + 2 \cdot \varphi_2 + 3 \cdot \varphi_3
$$

Для волновой функции $\lvert c_i \rvert \le 1$, т.к. иначе не будет выполняться условие нормировки (здесь коэффициенты взяты просто для примера).

Действие матрицы на столбец — строка на столбец:

$$
\begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \\ 3 & 1 & 2 \end{pmatrix}
\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} =
\begin{pmatrix} 14 \\ 11 \\ 11 \end{pmatrix}
\qquad
\begin{aligned}
14 &= 1 \cdot 1 + 2 \cdot 2 + 3 \cdot 3 \\
11 &= 2 \cdot 1 + 3 \cdot 2 + 1 \cdot 3 \\
11 &= 3 \cdot 1 + 1 \cdot 2 + 2 \cdot 3
\end{aligned}
$$

### Коммутирующие матрицы

$$
\hat{A} = \begin{pmatrix} 1 & 1 & 2 \\ 1 & 2 & 1 \\ 2 & 1 & 1 \end{pmatrix}, \qquad
\hat{B} = \begin{pmatrix} 2 & 2 & 1 \\ 2 & 1 & 2 \\ 1 & 2 & 2 \end{pmatrix}, \qquad
AB = \begin{pmatrix} 6 & 7 & 7 \\ 7 & 6 & 7 \\ 7 & 7 & 6 \end{pmatrix}
$$

$$
BA = \begin{pmatrix} 6 & 7 & 7 \\ 7 & 6 & 7 \\ 7 & 7 & 6 \end{pmatrix}
\ \text{— операторы коммутируют}
$$

Достаточно изменить пару элементов — и коммутация пропадает:

$$
\hat{A} = \begin{pmatrix} 1 & 1 & 2 \\ 1 & 2 & 3 \\ 2 & 1 & 1 \end{pmatrix}, \qquad
\hat{B} = \begin{pmatrix} 2 & 2 & 1 \\ 2 & 1 & 2 \\ 3 & 2 & 2 \end{pmatrix}, \qquad
AB = \begin{pmatrix} 10 & 7 & 7 \\ 15 & 10 & 11 \\ 9 & 7 & 6 \end{pmatrix}
$$

$$
BA = \begin{pmatrix} 6 & 7 & 11 \\ 7 & 6 & 9 \\ 9 & 9 & 14 \end{pmatrix}, \qquad
AB - BA = \begin{pmatrix} 4 & 0 & -4 \\ 8 & 4 & 2 \\ 0 & -2 & -8 \end{pmatrix} \ne 0
$$

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

## Матрицы: оператор и базис

Возьмем базис из [нормированных функций](../normirovka-i-operatory/) на отрезке $[0;\, 2\pi]$ и оператор проекции момента импульса на ось вращения:

$$
\varphi_0 = \frac{1}{\sqrt{2\pi}}\, e^{i \cdot 0 \cdot \varphi}, \qquad
\varphi_1 = \frac{1}{\sqrt{2\pi}}\, e^{i\varphi}, \qquad
\varphi_2 = \frac{1}{\sqrt{2\pi}}\, e^{2i\varphi}, \qquad
\hat{L} = -i\hbar \frac{\partial}{\partial \varphi}
$$

Матричные элементы — интегралы по области определения:

$$
\ell_{ij} = \int \varphi_i^* \hat{L} \varphi_j \, d\tau, \qquad
a_{ij} = \int\limits_0^{2\pi} \dots \, d\tau
$$

Первая строка. Производная от константы равна нулю:

$$
a_{00} = \int\limits_0^{2\pi} \frac{1}{\sqrt{2\pi}} \cdot \left( -i\hbar \frac{\partial}{\partial \varphi} \right) \frac{1}{\sqrt{2\pi}}\, e^{i \cdot 0 \cdot \varphi} \, d\tau
= \int\limits_0^{2\pi} \frac{1}{\sqrt{2\pi}} \cdot \left( -i\hbar \cdot e^{i \cdot 0 \cdot \varphi} \cdot 0 \right) d\tau = 0
$$

$$
\begin{aligned}
a_{01}
&= \int\limits_0^{2\pi} \frac{1}{\sqrt{2\pi}} \left( -i\hbar \frac{\partial}{\partial \varphi} \right) \frac{1}{\sqrt{2\pi}}\, e^{i\varphi} \, d\tau
= \int\limits_0^{2\pi} \frac{1}{\sqrt{2\pi}} \cdot \left( -i\hbar \cdot \frac{i\, e^{i\varphi}}{\sqrt{2\pi}} \right) d\tau = \\
&= \int\limits_0^{2\pi} \frac{1}{2\pi} \left( -i^2 \hbar\, e^{i\varphi} \right) d\tau
= \frac{\hbar}{2\pi} \cdot \frac{1}{i}\, e^{i\varphi} \Big|_0^{2\pi}
= \frac{\hbar}{2\pi i} \left( e^{2\pi i} - 1 \right) = 0
\end{aligned}
$$

Здесь использован табличный интеграл

$$
\int k\, e^{in\varphi} \, d\varphi = k \frac{1}{in}\, e^{in\varphi}
$$

и $e^{2\pi i} = \cos 2\pi + i \sin 2\pi = 1$. Точно так же

$$
a_{02} = \int\limits_0^{2\pi} \frac{1}{2\pi} \cdot 2\hbar\, e^{2i\varphi} \, d\varphi
= \frac{\hbar}{2\pi i}\, e^{2i\varphi} \Big|_0^{2\pi} = 0
$$

Вне диагонали всегда получается $\int e^{i(j-i)\varphi} d\varphi$ по полному периоду — ноль (базис ортогонален). На диагонали $j = i$ экспоненты сокращаются:

$$
a_{11} = \int\limits_0^{2\pi} \frac{1}{\sqrt{2\pi}}\, e^{-i\varphi} \cdot \hbar \frac{1}{\sqrt{2\pi}}\, e^{i\varphi} \, d\varphi
= \frac{\hbar}{2\pi} \cdot 2\pi = \hbar, \qquad
a_{22} = \frac{2\hbar}{2\pi} \cdot 2\pi = 2\hbar
$$

$$
\begin{pmatrix}
a_{00} & a_{01} & a_{02} \\
a_{10} & a_{11} & a_{12} \\
a_{20} & a_{21} & a_{22}
\end{pmatrix} =
\begin{pmatrix}
0 & 0 & 0 \\
0 & \hbar & 0 \\
0 & 0 & 2\hbar
\end{pmatrix}
$$

Матрица диагональная, потому что базисные функции $e^{in\varphi}$ — собственные для $\hat{L}$: $-i\hbar \dfrac{\partial}{\partial \varphi} e^{in\varphi} = n\hbar\, e^{in\varphi}$, и на диагонали стоят собственные значения $0,\ \hbar,\ 2\hbar$.

## Задание на дом

Построить матричное представление оператора в том же базисе:

$$
\hat{L}_1 = -i\hbar \frac{\partial}{\partial \varphi}, \qquad
\hat{L}_2 = \varphi, \qquad
\hat{L}_3 = \frac{d^2}{d\varphi^2}
$$

И вычислить определитель разложением по первой строке:

$$
\begin{aligned}
\begin{vmatrix} 2 & 1 & 2 \\ 0 & 3 & -1 \\ 1 & 2 & 1 \end{vmatrix}
&= 2 \begin{vmatrix} 3 & -1 \\ 2 & 1 \end{vmatrix} - 1 \begin{vmatrix} 0 & -1 \\ 1 & 1 \end{vmatrix} + 2 \begin{vmatrix} 0 & 3 \\ 1 & 2 \end{vmatrix} = \\
&= 2 \cdot 5 - 1 \cdot 1 + 2 \cdot (-3) = 3
\end{aligned}
$$
