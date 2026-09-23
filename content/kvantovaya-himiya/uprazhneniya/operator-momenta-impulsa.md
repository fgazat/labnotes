---
title: Оператор момента импульса и собственные функции
type: docs
math: true
weight: 4
description: "Упражнения 4 по квантовой химии: оператор момента количества движения M̂ = −iħ(r × ∇), коммутаторы [M̂ₓ, M̂ᵧ] = iħM̂_z и [M̂², M̂_z] = 0, собственные функции и собственные значения операторов d²/dx², d/dr и радиального оператора."
---

Продолжение [предыдущего занятия](../linejnost-i-kommutatory/): классическое выражение $\vec{M} = \vec{r} \times \vec{p}$ превращаем в оператор и проверяем его коммутационные свойства. Теория — в статьях [Основные операторы квантовой механики](../../osnovnye-operatory-kvantovoj-mekhaniki/), [Свойства операторов](../../svojstva-operatorov/) и [Операторные уравнения](../../operatornye-uravneniya/).

## Оператор момента количества движения

В компонентах $\vec{M} = \left( y p_z - z p_y,\ z p_x - x p_z,\ x p_y - y p_x \right)$ заменяем проекции импульса операторами $\hat{p}_x = -i\hbar \dfrac{\partial}{\partial x}$ и т.д.:

$$
\hat{\vec{M}} =
\begin{pmatrix}
y \left( -i\hbar \dfrac{\partial}{\partial z} \right) - z \left( -i\hbar \dfrac{\partial}{\partial y} \right) \\
z \left( -i\hbar \dfrac{\partial}{\partial x} \right) - x \left( -i\hbar \dfrac{\partial}{\partial z} \right) \\
x \left( -i\hbar \dfrac{\partial}{\partial y} \right) - y \left( -i\hbar \dfrac{\partial}{\partial x} \right)
\end{pmatrix}
= (-i\hbar)
\begin{pmatrix}
y \dfrac{\partial}{\partial z} - z \dfrac{\partial}{\partial y} \\
z \dfrac{\partial}{\partial x} - x \dfrac{\partial}{\partial z} \\
x \dfrac{\partial}{\partial y} - y \dfrac{\partial}{\partial x}
\end{pmatrix} =
\begin{pmatrix}
\hat{M}_x \\ \hat{M}_y \\ \hat{M}_z
\end{pmatrix}
$$

Коротко: $\hat{\vec{M}} = -i\hbar \left( \vec{r} \times \nabla \right)$, где $\hat{\vec{p}} = -i\hbar \nabla = -i\hbar \left( \dfrac{\partial}{\partial x},\ \dfrac{\partial}{\partial y},\ \dfrac{\partial}{\partial z} \right)$.

## Коммутатор проекций момента

Коммутатор $\left[ \hat{M}_x, \hat{M}_y \right] f = \hat{M}_x \hat{M}_y f - \hat{M}_y \hat{M}_x f$. Дифференциальные части операторов:

$$
\hat{M}_x = -i\hbar \left( y \frac{\partial}{\partial z} - z \frac{\partial}{\partial y} \right), \qquad
\hat{M}_y = -i\hbar \left( z \frac{\partial}{\partial x} - x \frac{\partial}{\partial z} \right)
$$

Действуем на $f$ сначала $\hat{M}_y$, потом $\hat{M}_x$, раскрываем производные произведений:

$$
\begin{aligned}
\hat{M}_x \hat{M}_y f
&= (-i\hbar) \left( y \frac{\partial}{\partial z} - z \frac{\partial}{\partial y} \right) \cdot (-i\hbar) \left( z \frac{\partial f}{\partial x} - x \frac{\partial f}{\partial z} \right) = \\
&= (-i\hbar)^2 \left( y \frac{\partial}{\partial z}\left( z \frac{\partial f}{\partial x} \right) - y \frac{\partial}{\partial z}\left( x \frac{\partial f}{\partial z} \right) \right. \\
&\qquad \left. - z \frac{\partial}{\partial y}\left( z \frac{\partial f}{\partial x} \right) + z \frac{\partial}{\partial y}\left( x \frac{\partial f}{\partial z} \right) \right) = \\
&= (-i\hbar)^2 \left( y \frac{\partial f}{\partial x} + yz \frac{\partial^2 f}{\partial z \partial x} - yx \frac{\partial^2 f}{\partial z^2} - z^2 \frac{\partial^2 f}{\partial y \partial x} + zx \frac{\partial^2 f}{\partial y \partial z} \right)
\end{aligned}
$$

В обратном порядке:

$$
\begin{aligned}
\hat{M}_y \hat{M}_x f
&= (-i\hbar) \left( z \frac{\partial}{\partial x} - x \frac{\partial}{\partial z} \right) (-i\hbar) \left( y \frac{\partial f}{\partial z} - z \frac{\partial f}{\partial y} \right) = \\
&= (-i\hbar)^2 \left( z \frac{\partial}{\partial x}\left( y \frac{\partial f}{\partial z} \right) - z \frac{\partial}{\partial x}\left( z \frac{\partial f}{\partial y} \right) \right. \\
&\qquad \left. - x \frac{\partial}{\partial z}\left( y \frac{\partial f}{\partial z} \right) + x \frac{\partial}{\partial z}\left( z \frac{\partial f}{\partial y} \right) \right) = \\
&= (-i\hbar)^2 \left( zy \frac{\partial^2 f}{\partial x \partial z} - z^2 \frac{\partial^2 f}{\partial x \partial y} - xy \frac{\partial^2 f}{\partial z^2} + xz \frac{\partial^2 f}{\partial z \partial y} + x \frac{\partial f}{\partial y} \right)
\end{aligned}
$$

Все вторые производные встречаются в обоих выражениях и при вычитании сокращаются — остаются только первые:

$$
\begin{aligned}
\hat{M}_x \hat{M}_y f - \hat{M}_y \hat{M}_x f
&= (-i\hbar)^2 \left( y \frac{\partial f}{\partial x} - x \frac{\partial f}{\partial y} \right) = \\
&= (i\hbar) \underbrace{(-i\hbar) \left( x \frac{\partial f}{\partial y} - y \frac{\partial f}{\partial x} \right)}_{\hat{M}_z f}
= i\hbar \hat{M}_z f
\end{aligned}
$$

$$
\left[ \hat{M}_x, \hat{M}_y \right] = i\hbar \hat{M}_z
$$

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

Точно так же $\left[ \hat{M}_y, \hat{M}_z \right] f = \hat{M}_y \hat{M}_z f - \hat{M}_z \hat{M}_y f$:

$$
\begin{aligned}
\hat{M}_y \hat{M}_z f
&= (-i\hbar)^2 \left( z \frac{\partial}{\partial x} - x \frac{\partial}{\partial z} \right) \left( x \frac{\partial f}{\partial y} - y \frac{\partial f}{\partial x} \right) = \\
&= (-i\hbar)^2 \left( z \frac{\partial}{\partial x}\left( x \frac{\partial f}{\partial y} \right) - z \frac{\partial}{\partial x}\left( y \frac{\partial f}{\partial x} \right) \right. \\
&\qquad \left. - x \frac{\partial}{\partial z}\left( x \frac{\partial f}{\partial y} \right) + x \frac{\partial}{\partial z}\left( y \frac{\partial f}{\partial x} \right) \right) = \\
&= (-i\hbar)^2 \left( z \frac{\partial f}{\partial y} + zx \frac{\partial^2 f}{\partial x \partial y} - zy \frac{\partial^2 f}{\partial x^2} - x^2 \frac{\partial^2 f}{\partial z \partial y} + xy \frac{\partial^2 f}{\partial z \partial x} \right)
\end{aligned}
$$

$$
\begin{aligned}
\hat{M}_z \hat{M}_y f
&= (-i\hbar)^2 \left( x \frac{\partial}{\partial y} - y \frac{\partial}{\partial x} \right) \left( z \frac{\partial f}{\partial x} - x \frac{\partial f}{\partial z} \right) = \\
&= (-i\hbar)^2 \left( x \frac{\partial}{\partial y}\left( z \frac{\partial f}{\partial x} \right) - x \frac{\partial}{\partial y}\left( x \frac{\partial f}{\partial z} \right) \right. \\
&\qquad \left. - y \frac{\partial}{\partial x}\left( z \frac{\partial f}{\partial x} \right) + y \frac{\partial}{\partial x}\left( x \frac{\partial f}{\partial z} \right) \right) = \\
&= (-i\hbar)^2 \left( xz \frac{\partial^2 f}{\partial y \partial x} - x^2 \frac{\partial^2 f}{\partial y \partial z} - yz \frac{\partial^2 f}{\partial x^2} + y \frac{\partial f}{\partial z} + yx \frac{\partial^2 f}{\partial x \partial z} \right)
\end{aligned}
$$

$$
\begin{aligned}
\hat{M}_y \hat{M}_z f - \hat{M}_z \hat{M}_y f
&= (-i\hbar)^2 \left( z \frac{\partial f}{\partial y} - y \frac{\partial f}{\partial z} \right) = \\
&= i\hbar \cdot (-i\hbar) \left( y \frac{\partial f}{\partial z} - z \frac{\partial f}{\partial y} \right)
= i\hbar \hat{M}_x f
\end{aligned}
$$

$$
\begin{aligned}
\left[ \hat{M}_y, \hat{M}_z \right] &= i\hbar \hat{M}_x \\
\left[ \hat{M}_x, \hat{M}_z \right] &= -i\hbar \hat{M}_y \ \Rightarrow\ \left[ \hat{M}_z, \hat{M}_x \right] = i\hbar \hat{M}_y
\end{aligned}
$$

Проекции момента импульса попарно не коммутируют — индексы в трех соотношениях идут по кругу $x \to y \to z \to x$.

## Коммутатор квадрата момента с проекцией

Момент количества движения характеризует скорость вращения. Квадрат момента:

$$
M^2 = M_x^2 + M_y^2 + M_z^2, \qquad
\hat{M}^2 = \hat{M}_x^2 + \hat{M}_y^2 + \hat{M}_z^2
$$

$$
\begin{aligned}
\hat{M}_x \hat{M}_y - \hat{M}_y \hat{M}_x &= i\hbar \hat{M}_z \\
\hat{M}_y \hat{M}_z - \hat{M}_z \hat{M}_y &= i\hbar \hat{M}_x \\
\hat{M}_z \hat{M}_x - \hat{M}_x \hat{M}_z &= i\hbar \hat{M}_y
\end{aligned}
$$

Найдем $\left[ \hat{M}^2, \hat{M}_z \right] = \hat{M}^2 \hat{M}_z - \hat{M}_z \hat{M}^2$. Из соотношений выше выражаем произведения с $\hat{M}_z$ справа через произведения с $\hat{M}_z$ слева:

$$
\hat{M}_x \hat{M}_z = \hat{M}_z \hat{M}_x - i\hbar \hat{M}_y, \qquad
\hat{M}_y \hat{M}_z = \hat{M}_z \hat{M}_y + i\hbar \hat{M}_x
$$

$$
\begin{aligned}
\hat{M}^2 \hat{M}_z
&= \left( \hat{M}_x^2 + \hat{M}_y^2 + \hat{M}_z^2 \right) \hat{M}_z
= \hat{M}_x \left( \hat{M}_x \hat{M}_z \right) + \hat{M}_y \left( \hat{M}_y \hat{M}_z \right) + \hat{M}_z^3 = \\
&= \hat{M}_x \left( \hat{M}_z \hat{M}_x - i\hbar \hat{M}_y \right) + \hat{M}_y \left( \hat{M}_z \hat{M}_y + i\hbar \hat{M}_x \right) + \hat{M}_z^3 = \\
&= \hat{M}_x \hat{M}_z \hat{M}_x - i\hbar \hat{M}_x \hat{M}_y + \hat{M}_y \hat{M}_z \hat{M}_y + i\hbar \hat{M}_y \hat{M}_x + \hat{M}_z^3
\end{aligned}
$$

Во втором произведении $\hat{M}_z$ стоит слева — переносим его вправо теми же соотношениями ($\hat{M}_z \hat{M}_x = \hat{M}_x \hat{M}_z + i\hbar \hat{M}_y$, $\hat{M}_z \hat{M}_y = \hat{M}_y \hat{M}_z - i\hbar \hat{M}_x$):

$$
\begin{aligned}
\hat{M}_z \hat{M}^2
&= \hat{M}_z \left( \hat{M}_x^2 + \hat{M}_y^2 + \hat{M}_z^2 \right)
= \left( \hat{M}_z \hat{M}_x \right) \hat{M}_x + \left( \hat{M}_z \hat{M}_y \right) \hat{M}_y + \hat{M}_z^3 = \\
&= \left( \hat{M}_x \hat{M}_z + i\hbar \hat{M}_y \right) \hat{M}_x + \left( \hat{M}_y \hat{M}_z - i\hbar \hat{M}_x \right) \hat{M}_y + \hat{M}_z^3 = \\
&= \hat{M}_x \hat{M}_z \hat{M}_x + i\hbar \hat{M}_y \hat{M}_x + \hat{M}_y \hat{M}_z \hat{M}_y - i\hbar \hat{M}_x \hat{M}_y + \hat{M}_z^3
\end{aligned}
$$

Получились одни и те же пять слагаемых — разность равна нулю:

$$
\left[ \hat{M}^2, \hat{M}_z \right] = 0
$$

Квадрат момента коммутирует с любой его проекцией: $M^2$ и $M_z$ можно измерить одновременно, и у них есть общие собственные функции.

## Собственные функции и собственные значения

Функция $f$ — собственная для оператора $\hat{L}$, если $\hat{L} f = \ell f$, где $\ell$ — число (собственное значение).

**1.** $\hat{L} = \dfrac{d^2}{dx^2}$, $f = \cos kx$:

$$
\hat{L} f = \frac{d^2 \cos kx}{dx^2}
= \frac{d}{dx}\left( \frac{d \cos kx}{dx} \right)
= \frac{d}{dx}\left( -k \sin kx \right)
= \underbrace{-k^2}_{\ell} \cos kx
$$

Собственная функция с собственным значением $\ell = -k^2$.

**2.** $\hat{L} = \dfrac{d}{dr}$, $f = e^{-r^2}$:

$$
\hat{L} f = \frac{d}{dr}\left( e^{-r^2} \right) = e^{-r^2} \cdot (-2r) = \underbrace{-2r}\, e^{-r^2}
$$

Множитель $-2r$ — это не число, а функция, значит это не собственное значение: $e^{-r^2}$ не является собственной функцией оператора $\dfrac{d}{dr}$.

**3.** $\hat{L} = \dfrac{1}{r^2} \dfrac{d}{dr}\left( r^2 \dfrac{d}{dr} \right)$, $f = e^{-r/2}$:

$$
\begin{aligned}
\hat{L} f
&= \frac{1}{r^2} \frac{d}{dr}\left( r^2 \frac{d e^{-r/2}}{dr} \right)
= \frac{1}{r^2} \frac{d}{dr}\left( r^2 e^{-r/2} \cdot \left( -\frac{1}{2} \right) \right) = \\
&= \frac{1}{r^2} \cdot \left( -\frac{1}{2} \right) \left( 2r e^{-r/2} + r^2 e^{-r/2} \left( -\frac{1}{2} \right) \right) = \\
&= -\frac{1}{r} e^{-r/2} - \frac{1}{4} e^{-r/2}
= e^{-r/2} \left( \frac{1}{4} - \frac{1}{r} \right)
\end{aligned}
$$

Итак, $\hat{L} f = \dfrac{1}{4} f - \dfrac{1}{r} f$ — снова функция, а не число. Но если перенести член с $\dfrac{1}{r}$ влево:

$$
\hat{L} f + \frac{1}{r} f = \frac{1}{4} f
\qquad \Rightarrow \qquad
\hat{L}' = \hat{L} + \frac{1}{r} = \frac{1}{r^2} \frac{d}{dr}\left( r^2 \frac{d}{dr} \right) + \frac{1}{r}
$$

$$
\left( \hat{L} + \frac{1}{r} \right) f = \frac{1}{4} f
$$

Для оператора $\hat{L}'$ функция $e^{-r/2}$ — собственная с собственным значением $\dfrac{1}{4}$. По форме $\hat{L}'$ — это радиальная часть гамильтониана [водородоподобного атома](../../vodorodopodobnyj-atom/): оператор кинетической энергии плюс кулоновский член $\sim \dfrac{1}{r}$, а $e^{-r/2}$ имеет вид $1s$-орбитали.

**4.** Страница 13, ж: $\hat{L} = \dfrac{1}{\sin\theta} \dfrac{d}{d\theta}\left( \sin\theta \dfrac{d}{d\theta} \right)$, $f = \cos\theta$ — [уже разобрано](../normirovka-i-operatory/#действие-операторов): $\hat{L} f = -2 \cos\theta$, собственное значение $-2$.
