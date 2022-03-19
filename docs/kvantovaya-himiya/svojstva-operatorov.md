# Свойства операторов

**Оператор** — это закон, по которому одной функции $f$ ставится в соответствие другая функция $g$. Оператор определяет, какое действие должно быть произведено над функцией $f$, чтобы перевести ее в функцию $g$:

$$
g = \widehat{L}f
$$

### Линейность

Оператор называется линейным, если выполняется следующее равенство:

$$
\widehat{L}(\alpha_1f_1 + \alpha_2f_2) = \alpha_1\widehat{L}f_1 + \alpha_2\widehat{L}f_2
$$

$$
\widehat{L}(f_1 + f_2) = \widehat{L}f_1 + \widehat{L}f_2
$$

$$
\widehat{L}(f_1 + f_1) = \widehat{L}f_1 + \widehat{L}f_1 = 2 \widehat{L}f_1
$$

### Самосопряженность

Оператор называется самосопряженным (эрмитовым), если выполняется следующее равенство:

![Свойства операторов: самосопряженность](images/svojstva-operatorov/svoistva_clip_image001_0003.png)


## Действия над операторами

### Сложение

$$
\widehat{L} = \widehat{L}_1 + \widehat{L}_2
$$

$$
\widehat{L}f = (\widehat{L}_1 + \widehat{L}_2)f = \widehat{L}_1f + \widehat{L}_2f
$$

При сложении порядок действия операторов **не имеет значения**:

$$
\widehat{L}_1f + \widehat{L}_2f = \widehat{L}_2f + \widehat{L}_1f
$$

### Умножение

$$
\widehat{L}f = \widehat{L}_1\cdot\widehat{L}_2
$$

$$
\widehat{L}f = \widehat{L}_1({\widehat{L}_2f}) = \widehat{L}_1g
$$

При умножении порядок действия операторов **имеет значение**:

$$

$$

$$
\left.
    \begin{array}{ccc}
        \widehat{L}_1({\widehat{L}_2f}) = \widehat{L}_1g \\
\widehat{L}_2({\widehat{L}_1f}) = \widehat{L}_2h
    \end{array}
\right\} \longrightarrow \widehat{L}_1g \neq \widehat{L}_2h \Longrightarrow \widehat{L}_1\cdot\widehat{L}_2 \neq \widehat{L}_2\cdot\widehat{L}_1
$$


Существуют такие пары операторов, для которых перестановочный закон умножения выполняется. Такие пары операторов называются **коммутирующими** — операторы коммутируют друг с другом.

#### Коммутатор и условие коммутации

Условие коммутации:

$$
\widehat{L}_1\cdot\widehat{L}_2 = \widehat{L}_2\cdot\widehat{L}_1
$$

В случае, если операторы не коммутируют друг с другом, то для таких функций существует коммутатор.

**Коммутатором** называется оператор, который построен следующим образом:

$$
\underbrace{[\widehat{L}_1,\widehat{L}_2]}_{Коммутатор} = \widehat{L}_1\cdot\widehat{L}_2 - \widehat{L}_2\cdot\widehat{L}_1
$$

Для коммутирующих операторов коммутатор равен нулю.


