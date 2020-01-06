# Parallel Resistor Calculator
## Business Requirements

### Background

A common problem in electrical engineering is calculating parallel resistance.  [Resistors](https://en.wikipedia.org/wiki/Resistor) are manufactured in standard sizes, and often a resistance _between_ standard sizes is needed.  It is also sometimes the case that a "close enough" resistance is needed that can be constructed from two standard-sized resistors.  The calculations are not complicated, and EEs know the formulas by heart, but they normally use a calculator for convenience.

### Justification

Our online engineering platform is desigend to:

* Increase engineer productivity
* Increase engineer capabilities (training)
* Attract top talent

Engineering calculators are proposed by the product team and prioritized for development based on utility and developent cost.  The Parallel Resistor Calculator is currently the top priority.

### Dependencies

Our ERP system exposes a REST JSON endpoint that provides commonly-available resitor sizes.

### UI Requirements

1. Resistor values should be displayed in [engineering notation](https://en.wikipedia.org/wiki/Engineering_notation) using SI prefixes with a maximum of one decimal.  The system does not need to support resistances greater than 988 MΩ or lower than 10 Ω.
1. Resistance entry should either A) support ONLY numeric entry or B) support ONLY numeric entry followed by 'k', 'M', 'kΩ', or 'MΩ' with an optional space.
1. If the REST JSON endpoint that provides commonly-available resistor values is unavailable, the calculator should use the list of common resistor values in Appendix A below.  In this instance, the UI should clearly indicate that a standard table is being used/displayed, and actual ERP data is unavailable.
1. One one screen (scrolling acceptable), the user should see the list of common resistor values; inputs for two resistors (R1 and R2) and the equivalent resistance (Requiv); and a schematic representation of the two resistors with their lables and values, using standard electrical engineering schematic notaiton.
1. There should be a "Seek" button that allows the user to enter a target resistance, and then choose values for R1 and R2 such that Requiv is as close as possible to the requested target resistance using only common resistor values list.

### Functional Requirements

1. Requiv should be calculated using the formula 1/Requiv = 1/R1 + 1/R2.
1. The "seek" function should choose a combination of two resistors from the list of common resistors such that the equivalent resistance is as cloase as possible to the requested resistance (R1 and R2 may be equal).

### Future Scope

In the future, the calculator may be expanded to allow for the selection of arbitrarily many resistors in parallel.  Also, resistor tolerance selection may be made available.

### Appendix A - Common Resistor Values

The following resistor values are common for 10% tolerance resitors, and this table should be used when the ERP REST JSON endpoint is unavailable.

< 100 Ω | < 1 kΩ | < 10 kΩ | < 100 kΩ | < 1 MΩ | < 10 MΩ | < 100 MΩ | >= 100MΩ
------- | ------ | ------- | -------- | ------ | ------- | -------- | --------
10 Ω    | 100 Ω  | 1 kΩ    | 10 kΩ    | 100 kΩ | 1.0 MΩ  | 10 MΩ    | 100 MΩ
12 Ω    | 120 Ω  | 1.2 kΩ  | 12 kΩ    | 120 kΩ | 1.2 MΩ  | 12 MΩ    | 120 MΩ
15 Ω    | 150 Ω  | 1.5 kΩ  | 15 kΩ    | 150 kΩ | 1.5 MΩ  | 15 MΩ    | 150 MΩ
18 Ω    | 180 Ω  | 1.8 kΩ  | 18 kΩ    | 180 kΩ | 1.8 MΩ  | 18 MΩ    | 180 MΩ
22 Ω    | 220 Ω  | 2.2 kΩ  | 22 kΩ    | 220 kΩ | 2.2 MΩ  | 22 MΩ    | 220 MΩ
27 Ω    | 270 Ω  | 2.7 kΩ  | 27 kΩ    | 270 kΩ | 2.7 MΩ  | 27 MΩ    | 270 MΩ
33 Ω    | 330 Ω  | 3.3 kΩ  | 33 kΩ    | 330 kΩ | 3.3 MΩ  | 33 MΩ    | 330 MΩ
39 Ω    | 390 Ω  | 3.9 kΩ  | 39 kΩ    | 390 kΩ | 3.9 MΩ  | 39 MΩ    | 390 MΩ
47 Ω    | 470 Ω  | 4.7 kΩ  | 47 kΩ    | 470 kΩ | 4.7 MΩ  | 47 MΩ    | 470 MΩ
56 Ω    | 560 Ω  | 5.6 kΩ  | 56 kΩ    | 560 kΩ | 5.6 MΩ  | 56 MΩ    | 560 MΩ
68 Ω    | 680 Ω  | 6.8 kΩ  | 68 kΩ    | 680 kΩ | 6.8 MΩ  | 68 MΩ    | 680 MΩ
82 Ω    | 820 Ω  | 8.2 kΩ  | 82 kΩ    | 820 kΩ | 8.2 MΩ  | 82 MΩ    | 820 MΩ
