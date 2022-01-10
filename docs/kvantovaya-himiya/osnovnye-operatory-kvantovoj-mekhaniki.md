# Основные операторы квантовой механики

## Оператор координаты

Оператор координаты — просто координата. Его действие на любую функцию заключается в умножении ее на *x*.

![](images/osnovnye-operatory/operatori_clip_image001.png)

Свойства:

* линейность оператора:

    ![](images/osnovnye-operatory/operatori_clip_image001_0002.png)

* самосопряженность:

    ![](images/osnovnye-operatory/operatori_clip_image001_0003.png)


## Оператор импульса

**Оператор импульса** определяется через операторы его проекций. Операторы проекций импульса и координат подчиняются определённым правилам перестановки, которые очень облегчают расчеты с ними.

![](images/osnovnye-operatory/operatori_clip_image001_0004.png)

Свойства:

* линейность оператора:

    ![](images/osnovnye-operatory/operatori_clip_image001_0009.png)

* самосопряженность оператора: ![](images/osnovnye-operatory/operatori_clip_image001_0011.png)

Проверим, коммутируют ли операторы координаты и импульса:

![](images/osnovnye-operatory/operatori_clip_image001_0014.png)

Операторы импульса и координаты **не коммутируют**.

![](images/osnovnye-operatory/operatori_clip_image001_0019.png)

## Оператор кинетической энергии

![](images/osnovnye-operatory/operatori_clip_image001_0021.png)

Вывод оператора кинетической энергии:

Чтобы построить оператор, нужно записать классическое выражение для этой величины, а затем выразить через импульсы и координаты.

![](images/osnovnye-operatory/operatori_clip_image001_0022.png)

Свойства:

* Линейность: +
* Самосопряженность:

    ![](images/osnovnye-operatory/operatori_clip_image001_0029.png)


Можем предположить, что операторы импульса и кинетической энергии коммутируют, т.к. порядок дифференцирования не имеет значения.

![](images/osnovnye-operatory/operatori_clip_image001_0035.png)

Однако, т.к. оператор импульса и координаты не коммутируют, то оператор кинетической энергии тоже не коммутирует с оператором координаты.

![](images/osnovnye-operatory/operatori_clip_image001_0036.png)

## Оператор потенциальной энергии

Потенциальная энергия электростатического взаимодействия:

![](images/osnovnye-operatory/operatori_clip_image001_0037.png)

Свойства этого оператора проверяются как для оператора координаты.

![](images/osnovnye-operatory/operatori_clip_image001_0038.png)

## Оператор полной энергии системы

![](images/osnovnye-operatory/operatori_clip_image001_0039.png)

Полная энергия представляет собой сумму кинетической и потенциальной энергий.

![](images/osnovnye-operatory/operatori_clip_image001_0040.png)

Линейность и самосопряженность вытекает из линейности и сопряженности составляющих.

О коммутации — сложно сказать. Однако в общем случае Гамильтониан не коммутирует ни с одним оператором:

![](images/osnovnye-operatory/operatori_clip_image001_0042.png) ![](images/osnovnye-operatory/operatori_clip_image001_0043.png)

