# Parallel Resistor Calculator
## Business Requirements

### Background

A common problem in electrical engineering is calculating parallel resistance.  Resistors are manufactured in standard sizes, and often a resistance _between_ standard sizes is needed.  It is also sometimes the case that a "close enough" resistance is needed that can be constructed from two standard-sized resistors.  The calculations are not complicated, and EEs know the formulas by heart, but they normally use a calculator for convenience.

### Justification

Our online engineering platform is desigend to:

* Increase engineer productivity
* Increase engineer capabilities (training)
* Attract top talent

Engineering calculators are proposed by the product team and prioritized for development based on utility and developent cost.  The Parallel Resistor Calculator is currently the top priority.

### Dependencies

Our ERP system exposes a REST JSON endpoint that provides commonly-available resitor sizes.
