---
title: Классификация электродов и уравнение Нернста
type: docs
math: true
weight: 10
description: "Уравнение Нернста φ = φ° + (RT/nF) ln(a_Ox/a_Red) и классификация электродов: электроды первого рода (Me^{z+}|Me, Se²⁻|Se), второго рода (хлорсеребряный, каломельный, оксидно-ртутный) и их связь с произведением растворимости, окислительно-восстановительные электроды и правило Лютера, газовые электроды (водородный, кислородный, хлорный), амальгамные электроды."
---

На [границе металл — раствор](../ravnovesie-elektrod-rastvor/) гальвани-потенциал зависит от активности ионов логарифмически. Отсчитанный от стандартного водородного электрода, он называется **электродным потенциалом** $\varphi$ и подчиняется уравнению Нернста.

## Уравнение Нернста

**Уравнение Нернста** — уравнение, связывающее окислительно-восстановительный потенциал системы с активностями веществ, входящих в электрохимическое уравнение, и стандартными электродными потенциалами окислительно-восстановительных пар. Для электродной реакции $\mathrm{Ox} + n\bar{e} \rightleftharpoons \mathrm{Red}$:

$$
\boxed{\ \varphi = \varphi^\circ + \frac{RT}{nF} \ln \frac{a_{\mathrm{Ox}}}{a_{\mathrm{Red}}}\ }
$$

где $\varphi^\circ$ — **стандартный электродный потенциал** (потенциал при всех активностях, равных единице), $n$ — число электронов в электродной реакции. При 25 °C множитель $\dfrac{RT}{F} \ln 10 = 0{,}059$ В, поэтому в десятичных логарифмах

$$
\varphi = \varphi^\circ + \frac{0{,}059}{n} \lg \frac{a_{\mathrm{Ox}}}{a_{\mathrm{Red}}}
$$

Электродную реакцию всегда записывают как восстановление (окисленная форма слева); активности чистых твердых фаз и растворителя принимают равными единице. Дальше — как это уравнение выглядит для электродов разных типов.

## 1. Электроды первого рода

**Электроды первого рода** — электроды, в которых равновесие на границе раздела электрод — электролит устанавливается по одному сорту ионов. Это металлы, погруженные в раствор собственной соли:

$$
\mathrm{Me}^{z+} \mid \mathrm{Me}, \qquad \mathrm{Cu}^{2+} \mid \mathrm{Cu}, \qquad \mathrm{Zn}^{2+} \mid \mathrm{Zn}
$$

$$
\mathrm{Me}^{z+} + z\bar{e} \rightleftharpoons \mathrm{Me}
$$

$$
\varphi_{\mathrm{Me}^{z+}/\mathrm{Me}} = \varphi^\circ_{\mathrm{Me}^{z+}/\mathrm{Me}} + \frac{RT}{zF} \ln \frac{a_{\mathrm{Me}^{z+}}}{a_{\mathrm{Me}}}
= \varphi^\circ + \frac{0{,}059}{z} \lg a_{\mathrm{Me}^{z+}}
$$

($a_{\mathrm{Me}} = 1$ для чистого металла). Обратимыми по аниону электродами первого рода служат неметаллы, например селеновый:

$$
\mathrm{Se}^{2-} \mid \mathrm{Se}, \qquad \mathrm{Se} + 2\bar{e} \rightleftharpoons \mathrm{Se}^{2-}, \qquad
\varphi_{\mathrm{Se}/\mathrm{Se}^{2-}} = \varphi^\circ_{\mathrm{Se}/\mathrm{Se}^{2-}} + \frac{RT}{2F} \ln \frac{1}{a_{\mathrm{Se}^{2-}}}
$$

## 2. Электроды второго рода

**Электроды второго рода** — электроды, в которых равновесие между электродом и электролитом устанавливается более чем по одному сорту ионов. Это металл, покрытый слоем его труднорастворимого соединения (соль, оксид, гидроксид), погруженный в раствор, содержащий тот же анион, что и у труднорастворимого соединения.

**Хлорсеребряный электрод:**

$$
\mathrm{Cl}^- \mid \mathrm{AgCl}, \mathrm{Ag}, \qquad \mathrm{AgCl} + \bar{e} \rightleftharpoons \mathrm{Ag} + \mathrm{Cl}^-
$$

$$
\varphi_{\mathrm{AgCl}/\mathrm{Ag}} = \varphi^\circ_{\mathrm{AgCl}/\mathrm{Ag}} + \frac{RT}{F} \ln \frac{a_{\mathrm{AgCl}}}{a_{\mathrm{Ag}}\, a_{\mathrm{Cl}^-}}
= \varphi^\circ + \frac{RT}{F} \ln \frac{1}{a_{\mathrm{Cl}^-}}
$$

— активности твердых AgCl и Ag равны единице, и потенциал зависит только от активности хлорид-иона. Если в целом есть равновесие, то мы можем говорить о равновесии и по ионам серебра: тот же электрод можно рассматривать как серебряный электрод первого рода в растворе, где $a_{\mathrm{Ag}^+}$ задана произведением растворимости $L_{\mathrm{AgCl}} = a_{\mathrm{Ag}^+} a_{\mathrm{Cl}^-}$:

$$
\varphi_{\mathrm{Ag}^+/\mathrm{Ag}} = \varphi^\circ_{\mathrm{Ag}^+/\mathrm{Ag}} + \frac{RT}{F} \ln a_{\mathrm{Ag}^+}, \qquad
a_{\mathrm{Ag}^+} = \frac{L_{\mathrm{AgCl}}}{a_{\mathrm{Cl}^-}}
$$

$$
\varphi = \varphi^\circ_{\mathrm{Ag}^+/\mathrm{Ag}} + \frac{RT}{F} \ln L_{\mathrm{AgCl}} - \frac{RT}{F} \ln a_{\mathrm{Cl}^-}
$$

Сравнивая с уравнением для электрода второго рода, получаем связь стандартных потенциалов:

$$
\boxed{\ \varphi^\circ_{\mathrm{AgCl}/\mathrm{Ag}} = \varphi^\circ_{\mathrm{Ag}^+/\mathrm{Ag}} + \frac{RT}{F} \ln L_{\mathrm{AgCl}}\ }
$$

— по стандартным потенциалам можно находить произведения растворимости, и наоборот.

**Каломельный электрод:**

$$
\mathrm{Cl}^- \mid \mathrm{Hg_2Cl_2}, \mathrm{Hg}, \qquad
\mathrm{Hg_2Cl_2} + 2\bar{e} \rightleftharpoons 2\mathrm{Cl}^- + 2\mathrm{Hg}, \qquad
\varphi = \varphi^\circ + \frac{RT}{2F} \ln \frac{1}{a^2_{\mathrm{Cl}^-}}
$$

**Оксидно-ртутный электрод:**

$$
\mathrm{OH}^- \mid \mathrm{HgO}, \mathrm{Hg}, \qquad
\mathrm{HgO} + \mathrm{H_2O} + 2\bar{e} \rightleftharpoons \mathrm{Hg} + 2\mathrm{OH}^-
$$

$$
\varphi = \varphi^\circ + \frac{RT}{2F} \ln \frac{a_{\mathrm{HgO}}\, a_{\mathrm{H_2O}}}{a_{\mathrm{Hg}}\, a^2_{\mathrm{OH}^-}}
= \varphi^\circ + \frac{RT}{F} \ln \frac{1}{a_{\mathrm{OH}^-}}
$$

Активность гидроксид-иона выражаем через ионное произведение воды, $a_{\mathrm{OH}^-} = K_w / a_{\mathrm{H}^+}$, т.е. $1/a_{\mathrm{OH}^-} = a_{\mathrm{H}^+}/K_w$:

$$
\varphi = \underbrace{\varphi^\circ - 0{,}059 \lg K_w}_{\text{const}} + 0{,}059 \lg a_{\mathrm{H}^+} = \text{const} - 0{,}059\ \mathrm{pH}
$$

Потенциал оксидно-ртутного электрода линейно зависит от pH — им можно измерять кислотность.

<div class="pagination-nav__link">🙏 Если вам нравится сайт, подпишитесь на наш <a href="https://t.me/+JfpTv9CJlwQ0MThi">🔗 Телеграм-канал</a>.</div>

## 3. Окислительно-восстановительные электроды

**Red-Ox электроды** (электроды третьего рода) — электроды, для которых все окисленные и восстановленные формы находятся в одной фазе. Материал электрода инертен, является лишь переносчиком электронов (Pt — поставщик $\bar{e}$):

$$
\mathrm{Fe}^{2+}, \mathrm{Fe}^{3+} \mid \mathrm{Pt}, \qquad \mathrm{Fe}^{3+} + \bar{e} \rightleftharpoons \mathrm{Fe}^{2+}
$$

$$
\mathrm{Ce}^{3+}, \mathrm{Ce}^{4+} \mid \mathrm{Pt}, \qquad \mathrm{Ce}^{4+} + \bar{e} \rightleftharpoons \mathrm{Ce}^{3+}
$$

$$
\varphi_{\mathrm{Fe}^{3+}/\mathrm{Fe}^{2+}} = \varphi^\circ_{\mathrm{Fe}^{3+}/\mathrm{Fe}^{2+}} + \frac{RT}{F} \ln \frac{a_{\mathrm{Fe}^{3+}}}{a_{\mathrm{Fe}^{2+}}}
$$

Если в электродной реакции участвуют ионы H⁺, потенциал зависит и от pH — например, перманганатный электрод:

$$
\mathrm{Mn}^{2+}, \mathrm{MnO}_4^-, \mathrm{H}^+ \mid \mathrm{Pt}, \qquad
\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5\bar{e} \rightleftharpoons \mathrm{Mn}^{2+} + 4\mathrm{H_2O}
$$

$$
\varphi = \varphi^\circ + \frac{RT}{5F} \ln \frac{a_{\mathrm{MnO}_4^-}\, a^8_{\mathrm{H}^+}}{a_{\mathrm{Mn}^{2+}}\, a^4_{\mathrm{H_2O}}}, \qquad a_{\mathrm{H_2O}} = 1
$$

### Правило Лютера

Стандартные потенциалы трех пар, связанных одним элементом в разных степенях окисления, не независимы. Реакция $\mathrm{Fe}^{3+} + \bar{e} \to \mathrm{Fe}^{2+}$ — разность двух реакций восстановления до металла:

$$
\begin{aligned}
&\mathrm{Fe}^{2+} + 2\bar{e} \to \mathrm{Fe} \qquad \Delta G_1 \qquad \bigl| \times (-1) \\
&\mathrm{Fe}^{3+} + 3\bar{e} \to \mathrm{Fe} \qquad \Delta G_2 \\
\hline
&\mathrm{Fe}^{3+} + \bar{e} \to \mathrm{Fe}^{2+} \qquad \Delta G_3 = \Delta G_2 - \Delta G_1
\end{aligned}
$$

Энергия Гиббса электродной реакции связана с потенциалом, $\Delta G = -zF\varphi$, поэтому

$$
-z_3 F \varphi_3 = -z_2 F \varphi_2 + z_1 F \varphi_1
\quad \Rightarrow \quad
\boxed{\ \varphi_3 = \frac{z_2 \varphi_2 - z_1 \varphi_1}{z_3}\ }
$$

Это **правило Лютера**: для железа $\varphi^\circ_{\mathrm{Fe}^{3+}/\mathrm{Fe}^{2+}} = 3\varphi^\circ_{\mathrm{Fe}^{3+}/\mathrm{Fe}} - 2\varphi^\circ_{\mathrm{Fe}^{2+}/\mathrm{Fe}}$. Складывать нужно энергии Гиббса ($zF\varphi$), а не сами потенциалы.

## 4. Газовые электроды

**Газовые электроды** — один из участников электродной реакции находится в газовой фазе. Газ омывает инертный металл (платину), который служит переносчиком электронов и катализатором.

**Водородный электрод:**

$$
\mathrm{H}^+ \mid \mathrm{Pt}(\mathrm{H_2}), \qquad 2\mathrm{H}^+ + 2\bar{e} \rightleftharpoons \mathrm{H_2}, \qquad
\varphi = \varphi^\circ + \frac{RT}{2F} \ln \frac{a^2_{\mathrm{H}^+}}{p_{\mathrm{H_2}}}
$$

При $p_{\mathrm{H_2}} = 1$ атм и $a_{\mathrm{H}^+} = 1$ это **стандартный водородный электрод**, потенциал которого принят за нуль: $\varphi^\circ_{\mathrm{H}^+/\mathrm{H_2}} = 0$ при любой температуре. Все остальные стандартные потенциалы отсчитаны от него.

**Кислородный электрод** — в щелочной и в кислой среде:

$$
\mathrm{OH}^-, \mathrm{H_2O} \mid \mathrm{Pt}(\mathrm{O_2}), \qquad
\mathrm{O_2} + 4\bar{e} + 2\mathrm{H_2O} \rightleftharpoons 4\mathrm{OH}^-
$$

$$
\mathrm{H}^+, \mathrm{H_2O} \mid \mathrm{Pt}(\mathrm{O_2}), \qquad
\mathrm{O_2} + 4\bar{e} + 4\mathrm{H}^+ \rightleftharpoons 2\mathrm{H_2O}
$$

$$
\varphi_{\mathrm{O_2}/\mathrm{OH}^-} = \varphi^\circ_{\mathrm{O_2}/\mathrm{OH}^-} + \frac{RT}{4F} \ln \frac{p_{\mathrm{O_2}}\, a^2_{\mathrm{H_2O}}}{a^4_{\mathrm{OH}^-}}, \qquad
\varphi_{\mathrm{O_2}/\mathrm{H}^+} = \varphi^\circ_{\mathrm{O_2}/\mathrm{H}^+} + \frac{RT}{4F} \ln \frac{p_{\mathrm{O_2}}\, a^4_{\mathrm{H}^+}}{a^2_{\mathrm{H_2O}}}
$$

Это один и тот же электрод (в растворе всегда есть и H⁺, и OH⁻), поэтому оба выражения равны:

$$
\varphi^\circ_{\mathrm{O_2}/\mathrm{OH}^-} + \frac{RT}{4F} \ln \frac{p_{\mathrm{O_2}}\, a^2_{\mathrm{H_2O}}}{a^4_{\mathrm{OH}^-}}
= \varphi^\circ_{\mathrm{O_2}/\mathrm{H}^+} + \frac{RT}{4F} \ln \frac{p_{\mathrm{O_2}}\, a^4_{\mathrm{H}^+}}{a^2_{\mathrm{H_2O}}}
$$

$$
\varphi^\circ_{\mathrm{O_2}/\mathrm{OH}^-} = \varphi^\circ_{\mathrm{O_2}/\mathrm{H}^+} + \frac{RT}{4F} \ln \frac{a^4_{\mathrm{H}^+}\, a^4_{\mathrm{OH}^-}}{a^4_{\mathrm{H_2O}}}
= \varphi^\circ_{\mathrm{O_2}/\mathrm{H}^+} + \frac{RT}{F} \ln K_w
$$

Стандартные потенциалы кислородного электрода в кислой и щелочной среде отличаются на $\dfrac{RT}{F} \ln K_w = -0{,}83$ В (1,23 В и 0,40 В). Аналогично хлорный электрод: $\mathrm{Cl}^- \mid \mathrm{Pt}(\mathrm{Cl_2})$, $\mathrm{Cl_2} + 2\bar{e} \rightleftharpoons 2\mathrm{Cl}^-$.

## 5. Амальгамные электроды

Металл растворен в ртути; активность металла в амальгаме уже не равна единице и входит в уравнение:

$$
\mathrm{Me}^{z+} \mid \mathrm{Hg}(\mathrm{Me}), \qquad \mathrm{Me}^{z+} + z\bar{e} \rightleftharpoons \mathrm{Me}(\mathrm{Hg})
$$

$$
\varphi_{\mathrm{Me}^{z+}/\mathrm{Me}} = \varphi^\circ_{\mathrm{Me}^{z+}/\mathrm{Me}} + \frac{RT}{zF} \ln \frac{a_{\mathrm{Me}^{z+}}}{a_{\mathrm{Me(Hg)}}}
$$

Амальгамные электроды позволяют работать с активными металлами (Na, K, Cd, Zn), которые в чистом виде реагировали бы с водой; на них построены эталонные элементы (например, элемент Вестона с кадмиевой амальгамой). Из двух таких электродов и составляется [гальванический элемент](../galvanicheskij-element/).
