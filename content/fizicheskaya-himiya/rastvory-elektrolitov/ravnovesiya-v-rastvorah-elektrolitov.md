---
title: Химические равновесия в растворах электролитов
type: docs
math: true
weight: 2
description: "Равновесия в растворах электролитов: автопротолиз воды и ионное произведение K_w = 10⁻¹⁴, зависимость K_w от температуры, pH, гидролиз солей и константа гидролиза, буферные растворы — расчет pH в приближении (уравнение Гендерсона — Хассельбаха) и без приближений."
---

Приложение [теории Аррениуса](../teoriya-arreniusa/) к [химическим равновесиям](../../himicheskoe-ravnovesie/) в водных растворах: вода сама является слабым электролитом, и ее диссоциация участвует во всех равновесиях.

## Автопротолиз воды

$$
\text{H}_2\text{O} \rightleftharpoons \text{H}^+ + \text{OH}^-, \qquad
K = \frac{\left[ \text{H}^+ \right] \left[ \text{OH}^- \right]}{\left[ \text{H}_2\text{O} \right]}
$$

Т.к. $\alpha \ll 1$, концентрация воды практически не меняется: $\left[ \text{H}_2\text{O} \right] \approx \text{const}$, и ее вносят в константу:

$$
\underbrace{K \left[ \text{H}_2\text{O} \right]}_{K_w} = \left[ \text{H}^+ \right] \left[ \text{OH}^- \right]
$$

$$
\begin{aligned}
K_w &= \left[ \text{H}^+ \right] \left[ \text{OH}^- \right] = 10^{-14}, \qquad
\left[ \text{H}^+ \right] = \left[ \text{OH}^- \right] = 10^{-7} \\
\text{pH} &= -\lg \left[ \text{H}^+ \right] = 7 \quad (T = 298 \ \text{К})
\end{aligned}
$$

$K_w$ — **ионное произведение воды**. Значение $10^{-14}$ относится к 25 °C; с ростом температуры диссоциация усиливается. Зависимость $K_w$ от температуры:

| $t$, °C | 0 | 10 | 25 | 30 | 40 | 50 | 60 |
|---|---|---|---|---|---|---|---|
| $-\lg K_w$ | 14,04 | 14,53 | 13,9996 | 13,83 | 13,53 | 13,26 | 13,017 |

## Гидролиз солей

Соль сильного электролита полностью распадается на ионы, а ионы слабой кислоты или слабого основания реагируют с водой:

$$
\text{MA} \rightleftharpoons \text{M}^+ + \text{A}^-
$$

$$
\text{M}^+ + \text{H}_2\text{O} \rightleftharpoons \text{MOH} + \text{H}^+ \quad \text{(кисл.)}, \qquad
\text{A}^- + \text{H}_2\text{O} \rightleftharpoons \text{HA} + \text{OH}^- \quad \text{(щел.)}
$$

Гидролиз по катиону подкисляет раствор, по аниону — подщелачивает. Константа гидролиза по аниону — умножим числитель и знаменатель на $\left[ \text{H}^+ \right]$:

$$
K_{\text{г}} = \frac{\left[ \text{HA} \right] \left[ \text{OH}^- \right]}{\left[ \text{A}^- \right]}
= \frac{\left[ \text{HA} \right]}{\left[ \text{A}^- \right] \left[ \text{H}^+ \right]} \cdot \left[ \text{H}^+ \right] \left[ \text{OH}^- \right]
= \frac{K_w}{K_{\text{HA}}}
$$

— чем слабее кислота, тем сильнее гидролиз ее соли. Если исходная концентрация соли $C_0$, то $\left[ \text{HA} \right] = \left[ \text{OH}^- \right]$, а $\left[ \text{A}^- \right] = C_0 - \left[ \text{OH}^- \right]$:

$$
K_{\text{г}} = \frac{\left[ \text{OH}^- \right]^2}{C_0 - \left[ \text{OH}^- \right]}
\qquad \Rightarrow \qquad
\left[ \text{OH}^- \right]^2 + K_{\text{г}} \left[ \text{OH}^- \right] - K_{\text{г}} C_0 = 0
$$

Квадратное уравнение дает $\left[ \text{OH}^- \right]$, а через $K_w$ — pH раствора соли.

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

## Буферные растворы

Буферный раствор — смесь слабой кислоты с ее солью (MA + HA) или слабого основания с его солью (MA + MOH). Его pH мало меняется при добавлении кислоты или щелочи.

Возьмем слабую кислоту HA — $a$ моль и сильное основание MOH — $b$ моль, причем $a > b$. Основание нацело нейтрализует часть кислоты: в растворе $b$ моль соли MA и $a - b$ моль непрореагировавшей HA. Единственное равновесие — диссоциация слабой кислоты:

$$
\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-
$$

### В приближении

Считаем, что весь анион — от соли, а вся кислота осталась недиссоциированной: $\left[ \text{A}^- \right] = b$, $\left[ \text{HA} \right] = a - b$:

$$
K_{\text{HA}} = \frac{\left[ \text{H}^+ \right] \left[ \text{A}^- \right]}{\left[ \text{HA} \right]} = \frac{\left[ \text{H}^+ \right] \cdot b}{a - b}
\qquad \Rightarrow \qquad
\left[ \text{H}^+ \right] = \frac{K_{\text{HA}} \left( a - b \right)}{b}
$$

$$
\begin{aligned}
-\lg \left[ \text{H}^+ \right] &= -\lg K_{\text{HA}} - \lg \frac{a - b}{b} \\
\text{pH} &= \text{p}K_{\text{A}} - \lg \frac{a - b}{b} = \text{p}K_{\text{A}} - \lg \frac{C_{\text{к-ты}}}{C_{\text{соли}}}
\end{aligned}
$$

Это уравнение Гендерсона — Хассельбаха: pH буфера задается $\text{p}K$ кислоты и отношением концентраций кислоты и соли, а не их абсолютными значениями — поэтому разбавление на pH почти не влияет.

### Без приближений

Учтем все частицы. Баланс по кислоте: $\left[ \text{A}^- \right] + \left[ \text{HA} \right] = a$. Электронейтральность: положительные ионы $\text{H}^+$ и $\text{M}^+$ ($\left[ \text{M}^+ \right] = b$), отрицательные — $\text{OH}^-$ и $\text{A}^-$:

$$
\left[ \text{H}^+ \right] + b = \left[ \text{OH}^- \right] + \left[ \text{A}^- \right]
$$

Из константы диссоциации $\left[ \text{HA} \right] = \dfrac{\left[ \text{H}^+ \right] \left[ \text{A}^- \right]}{K_{\text{HA}}}$, подставляем в баланс:

$$
\begin{aligned}
a &= \left[ \text{A}^- \right] + \frac{\left[ \text{H}^+ \right] \left[ \text{A}^- \right]}{K_{\text{HA}}}
= \left[ \text{A}^- \right] \left( \frac{K_{\text{HA}} + \left[ \text{H}^+ \right]}{K_{\text{HA}}} \right) \\
\left[ \text{A}^- \right] &= \frac{a K_{\text{HA}}}{K_{\text{HA}} + \left[ \text{H}^+ \right]}
\end{aligned}
$$

Остается подставить $\left[ \text{OH}^- \right] = K_w / \left[ \text{H}^+ \right]$ и $\left[ \text{A}^- \right]$ в уравнение электронейтральности:

$$
\left[ \text{H}^+ \right] + b = \frac{K_w}{\left[ \text{H}^+ \right]} + \frac{a K_{\text{HA}}}{K_{\text{HA}} + \left[ \text{H}^+ \right]}
\qquad \Rightarrow \qquad
\left[ \text{H}^+ \right] \to \text{pH}
$$

Это кубическое уравнение относительно $\left[ \text{H}^+ \right]$; при $\left[ \text{H}^+ \right], \left[ \text{OH}^- \right] \ll b$ оно переходит в приближенную формулу.
