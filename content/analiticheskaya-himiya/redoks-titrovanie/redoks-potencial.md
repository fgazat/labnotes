---
title: Окислительно-восстановительный потенциал
type: docs
math: true
weight: 1
description: "Окислительно-восстановительный потенциал в аналитической химии: полуреакции, гальванический элемент и электролиз, уравнение Нернста; влияние концентрации, кислотности раствора, комплексообразования и образования малорастворимых соединений; примеры расчёта потенциала и ЭДС; константа равновесия окислительно-восстановительной реакции."
---

Любую окислительно-восстановительную реакцию можно разбить на две **полуреакции** — окисления и восстановления. Например, для окисления железа(II) перманганатом в кислой среде

$$
5\mathrm{Fe^{2+}} + \mathrm{MnO_4^-} + 8\mathrm{H^+} \longrightarrow 5\mathrm{Fe^{3+}} + \mathrm{Mn^{2+}} + 4\mathrm{H_2O}
$$

полуреакции и множители, уравнивающие число отданных и принятых электронов:

$$
\begin{aligned}
\mathrm{Fe^{2+}} - \bar e &\longrightarrow \mathrm{Fe^{3+}} && \times 5 \\
\mathrm{MnO_4^-} + 8\mathrm{H^+} + 5\bar e &\longrightarrow \mathrm{Mn^{2+}} + 4\mathrm{H_2O} && \times 1
\end{aligned}
$$

Так же записывается вытеснение меди цинком:

$$
\mathrm{Zn} + \mathrm{Cu^{2+}} \longrightarrow \mathrm{Cu} + \mathrm{Zn^{2+}}, \qquad
\begin{aligned}
\mathrm{Zn^0} - 2\bar e &\longrightarrow \mathrm{Zn^{2+}} \\
\mathrm{Cu^{2+}} + 2\bar e &\longrightarrow \mathrm{Cu^0}
\end{aligned}
$$

## Электрохимическая ячейка

Если полуреакции разделить в пространстве, электроны пойдут от восстановителя к окислителю по внешней цепи.

**Гальванический элемент** — электрохимическая ячейка, в которой в результате протекания самопроизвольной электрохимической реакции получается электрическая энергия.

**Электролиз** — физико-химический процесс, состоящий в выделении на электродах составных частей растворённых веществ; он возникает при прохождении электрического тока через раствор либо расплав электролита.

**Обратимая ячейка** — такая ячейка, в которой при изменении направления тока изменяется направление протекания реакции.

Пример записи гальванического элемента (анод слева, катод справа):

$$
(-)\ \mathrm{Zn} \mid \mathrm{ZnSO_4} \parallel \mathrm{HCl} \mid \mathrm{H_2},\ \mathrm{Pt}\ (+)
$$

Стандартные потенциалы: $E^\circ_{\mathrm{Zn^{2+}/Zn}} = -0{,}76$ В, $E^\circ_{\mathrm{Cu^{2+}/Cu}} = +0{,}34$ В.

Подробнее об устройстве гальванического элемента и термодинамике ЭДС — в статье [«Гальванический элемент и термодинамика ЭДС»](../../../fizicheskaya-himiya/rastvory-elektrolitov/galvanicheskij-element/).

## Уравнение Нернста

Для полуреакции

$$
a\mathrm{A} + b\mathrm{B} + \ldots + n\bar e \longrightarrow c\mathrm{C} + d\mathrm{D}
$$

потенциал выражается **уравнением Нернста**:

$$
E = E^\circ - \frac{RT}{nF} \ln \frac{a_\mathrm{C}^c\, a_\mathrm{D}^d}{a_\mathrm{A}^a\, a_\mathrm{B}^b}
\qquad\text{или при 25 °C}\qquad
E = E^\circ - \frac{0{,}059}{n} \lg \frac{a_\mathrm{C}^c\, a_\mathrm{D}^d}{a_\mathrm{A}^a\, a_\mathrm{B}^b}
$$

Здесь $a = f c$ — **активность**, $f$ — коэффициент активности, который зависит от ионной силы раствора $\mu = \frac{1}{2} \sum c_i z_i^2$. В разбавленных растворах $f \approx 1$, и активности заменяют равновесными концентрациями:

$$
E = E^\circ - \frac{0{,}059}{n} \lg \frac{[\mathrm{C}]^c [\mathrm{D}]^d}{[\mathrm{A}]^a [\mathrm{B}]^b}
$$

Концентрация металла в твёрдой фазе и воды в разбавленном растворе постоянны и в уравнение не входят. Примеры:

$$
\begin{aligned}
\mathrm{Cu^{2+}} + 2\bar e \longrightarrow \mathrm{Cu}: &\quad E = E^\circ_{\mathrm{Cu^{2+}/Cu}} - \frac{0{,}059}{2} \lg \frac{1}{[\mathrm{Cu^{2+}}]} \\
\mathrm{Fe^{3+}} + \bar e \longrightarrow \mathrm{Fe^{2+}}: &\quad E = E^\circ_{\mathrm{Fe^{3+}/Fe^{2+}}} - 0{,}059 \lg \frac{[\mathrm{Fe^{2+}}]}{[\mathrm{Fe^{3+}}]} \\
\mathrm{Cr_2O_7^{2-}} + 14\mathrm{H^+} + 6\bar e \longrightarrow 2\mathrm{Cr^{3+}} + 7\mathrm{H_2O}: &\quad E = E^\circ - \frac{0{,}059}{6} \lg \frac{[\mathrm{Cr^{3+}}]^2}{[\mathrm{Cr_2O_7^{2-}}][\mathrm{H^+}]^{14}}
\end{aligned}
$$

## Что влияет на потенциал

### Концентрация

Потенциал зависит от отношения концентраций окисленной и восстановленной форм — это видно прямо из уравнения Нернста.

### Кислотность раствора

Если в полуреакции участвуют ионы $\mathrm{H^+}$ (как у перманганата или дихромата), потенциал зависит от pH. Кроме того, кислотность меняет форму существования ионов в растворе — например, $\mathrm{Fe^{3+}}$ гидролизуется:

$$
\mathrm{Fe^{3+}} + \mathrm{H_2O} \longrightarrow \mathrm{Fe(OH)^{2+}} + \mathrm{H^+}
$$

Классический пример — **иодометрическое определение мышьяка**. Стандартные потенциалы пар мышьяк(V)/мышьяк(III) и иод/иодид близки:

$$
E^\circ_{\mathrm{H_3AsO_4/HAsO_2}} = +0{,}56\ \text{В}, \qquad E^\circ_{\mathrm{I_2/2I^-}} = +0{,}536\ \text{В}
$$

$$
\mathrm{H_3AsO_4} + 2\mathrm{I^-} + 2\mathrm{H^+} \rightleftarrows \mathrm{HAsO_2} + \mathrm{I_2} + 2\mathrm{H_2O}
$$

$$
E = 0{,}56 - \frac{0{,}059}{2} \lg \frac{[\mathrm{HAsO_2}]}{[\mathrm{H_3AsO_4}][\mathrm{H^+}]^2}
$$

При $[\mathrm{H_3AsO_4}] = [\mathrm{HAsO_2}]$ (то есть $[\mathrm{Ox}] = [\mathrm{Red}]$):

- в сильнокислой среде ($\mathrm{pH} \le 0$, $[\mathrm{H^+}] = 1$ М) $E = 0{,}56$ В — выше, чем у пары $\mathrm{I_2/2I^-}$, и мышьяк(V) окисляет иодид до иода;
- при $\mathrm{pH} = 8$ ($[\mathrm{H^+}] = 10^{-8}$ М)

$$
E = 0{,}56 - \frac{0{,}059}{2} \lg \frac{1}{(10^{-8})^2} = 0{,}088\ \text{В},
$$

и реакция идёт в обратную сторону: иод окисляет мышьяк(III). Выделившийся в кислой среде иод оттитровывают тиосульфатом натрия, индикатор — крахмал:

$$
\mathrm{I_2} + 2\mathrm{Na_2S_2O_3} \longrightarrow \mathrm{Na_2S_4O_6} + 2\mathrm{NaI}
$$

### Комплексообразование

Если одна из форм связывается в комплекс, её равновесная концентрация падает. Для пары $\mathrm{Fe^{3+}/Fe^{2+}}$ в присутствии фторида железо(III) связывается в $\mathrm{FeF_6^{3-}}$:

$$
\beta_6 = \frac{[\mathrm{FeF_6^{3-}}]}{[\mathrm{Fe^{3+}}][\mathrm{F^-}]^6}, \qquad
[\mathrm{Fe^{3+}}] = \frac{[\mathrm{FeF_6^{3-}}]}{\beta_6 [\mathrm{F^-}]^6}
$$

Чем больше $[\mathrm{F^-}]$, тем меньше $[\mathrm{Fe^{3+}}]$ и тем ниже потенциал пары $\mathrm{Fe^{3+}/Fe^{2+}}$ — а значит, и ЭДС системы, в которой эта пара служит окислителем.

### Образование малорастворимых соединений

Для серебряного электрода $\mathrm{Ag^+} + \bar e \longrightarrow \mathrm{Ag^0}$, $E^\circ = 0{,}799$ В:

$$
E = 0{,}799 - 0{,}059 \lg \frac{1}{[\mathrm{Ag^+}]}
$$

В присутствии хлорид-ионов концентрацию серебра задаёт произведение растворимости:

$$
[\mathrm{Ag^+}][\mathrm{Cl^-}] = \text{ПР}_\mathrm{AgCl}, \qquad [\mathrm{Ag^+}] = \frac{\text{ПР}_\mathrm{AgCl}}{[\mathrm{Cl^-}]}, \qquad
E = 0{,}799 - 0{,}059 \lg \frac{[\mathrm{Cl^-}]}{\text{ПР}_\mathrm{AgCl}}
$$

## Примеры расчёта

**1. Потенциал медного электрода, погружённого в 0,02 М раствор сульфата меди.**

$$
E = E^\circ_{\mathrm{Cu^{2+}/Cu}} - \frac{0{,}059}{2} \lg \frac{1}{[\mathrm{Cu^{2+}}]} = 0{,}345 - \frac{0{,}059}{2} \lg \frac{1}{2 \cdot 10^{-2}} = 0{,}295\ \text{В}
$$

**2. Потенциал платинового электрода** в растворе, содержащем 0,0546 М $\mathrm{K_2Cr_2O_7}$, 0,149 М $\mathrm{CrCl_3}$ и 0,1 М $\mathrm{HClO_4}$:

$$
\begin{aligned}
E &= E^\circ_{\mathrm{Cr_2O_7^{2-}/2Cr^{3+}}} - \frac{0{,}059}{6} \lg \frac{[\mathrm{Cr^{3+}}]^2}{[\mathrm{Cr_2O_7^{2-}}][\mathrm{H^+}]^{14}} \\
&= 1{,}33 - \frac{0{,}059}{6} \lg \frac{(0{,}149)^2}{0{,}0546 \cdot (0{,}1)^{14}} = 1{,}20\ \text{В}
\end{aligned}
$$

**3. ЭДС гальванического элемента.** ЭДС равна разности потенциалов катода и анода:

$$
E_\text{эл} = E_\text{кат} - E_\text{ан}
$$

Для элемента

$$
(-)\ \mathrm{Pt},\ \mathrm{Fe^{3+}}\ (0{,}01\ \text{М}),\ \mathrm{Fe^{2+}}\ (0{,}001\ \text{М}) \parallel \mathrm{Ag^+}\ (0{,}035\ \text{М}) \mid \mathrm{Ag}\ (+)
$$

при $E^\circ_{\mathrm{Fe^{3+}/Fe^{2+}}} = +0{,}77$ В и $E^\circ_{\mathrm{Ag^+/Ag}} = +0{,}80$ В:

$$
\begin{aligned}
\text{анод:} &\quad E = 0{,}77 - 0{,}059 \lg \frac{10^{-3}}{10^{-2}} = 0{,}829\ \text{В} \\
\text{катод:} &\quad E = 0{,}80 - 0{,}059 \lg \frac{1}{0{,}035} = 0{,}714\ \text{В}
\end{aligned}
$$

$E_\text{эл} = 0{,}714 - 0{,}829 < 0$: при таких концентрациях элемент записан «наоборот» — катод и анод меняются местами, и самопроизвольно идёт восстановление $\mathrm{Fe^{3+}}$ серебром.

## Константа равновесия окислительно-восстановительной реакции

Пусть реагируют две пары:

$$
\begin{aligned}
\mathrm{Ox_1} + z_1 \bar e &\longrightarrow \mathrm{Red_1} \\
\mathrm{Red_2} - z_2 \bar e &\longrightarrow \mathrm{Ox_2}
\end{aligned}
\qquad\Rightarrow\qquad
z_2 \mathrm{Ox_1} + z_1 \mathrm{Red_2} \rightleftarrows z_2 \mathrm{Red_1} + z_1 \mathrm{Ox_2}
$$

$$
K_p = \frac{a_{\mathrm{Red_1}}^{z_2}\, a_{\mathrm{Ox_2}}^{z_1}}{a_{\mathrm{Ox_1}}^{z_2}\, a_{\mathrm{Red_2}}^{z_1}}
$$

Потенциалы пар

$$
E_1 = E_1^\circ - \frac{0{,}059}{z_1} \lg \frac{a_{\mathrm{Red_1}}}{a_{\mathrm{Ox_1}}}, \qquad
E_2 = E_2^\circ - \frac{0{,}059}{z_2} \lg \frac{a_{\mathrm{Red_2}}}{a_{\mathrm{Ox_2}}}
$$

в состоянии равновесия равны, $E_1 = E_2$:

$$
E_1^\circ - \frac{0{,}059}{z_1} \lg \frac{a_{\mathrm{Red_1}}}{a_{\mathrm{Ox_1}}} = E_2^\circ - \frac{0{,}059}{z_2} \lg \frac{a_{\mathrm{Red_2}}}{a_{\mathrm{Ox_2}}}
$$

$$
E_1^\circ - E_2^\circ = \frac{0{,}059}{z_1 z_2} \left( z_2 \lg \frac{a_{\mathrm{Red_1}}}{a_{\mathrm{Ox_1}}} - z_1 \lg \frac{a_{\mathrm{Red_2}}}{a_{\mathrm{Ox_2}}} \right)
$$

$$
\frac{(E_1^\circ - E_2^\circ)\, z_1 z_2}{0{,}059} = \lg \underbrace{\frac{a_{\mathrm{Red_1}}^{z_2}\, a_{\mathrm{Ox_2}}^{z_1}}{a_{\mathrm{Ox_1}}^{z_2}\, a_{\mathrm{Red_2}}^{z_1}}}_{K_p}
\qquad\Rightarrow\qquad
\boxed{\ K_p = 10^{\frac{(E_1^\circ - E_2^\circ)\, z_1 z_2}{0{,}059}}\ }
$$

Чем больше разность стандартных потенциалов, тем полнее идёт реакция. Примеры:

$$
2\mathrm{Fe^{3+}} + 2\mathrm{I^-} \rightleftarrows 2\mathrm{Fe^{2+}} + \mathrm{I_2}; \qquad E^\circ_{\mathrm{Fe^{3+}/Fe^{2+}}} = +0{,}77\ \text{В}, \quad E^\circ_{\mathrm{I_2/2I^-}} = +0{,}53\ \text{В}
$$

$$
K_p = 10^{\frac{(0{,}77 - 0{,}53) \cdot 2}{0{,}059}} = 10^{8} \gg 1
$$

— железо(III) окисляет иодид практически нацело;

$$
2\mathrm{Fe^{3+}} + 2\mathrm{Cl^-} \rightleftarrows 2\mathrm{Fe^{2+}} + \mathrm{Cl_2}, \qquad
K_p = 10^{\frac{(0{,}77 - 1{,}36) \cdot 2}{0{,}059}} = 10^{-20} \ll 1
$$

— хлорид железом(III) не окисляется.
