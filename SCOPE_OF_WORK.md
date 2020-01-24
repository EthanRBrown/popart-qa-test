# Introduction

Harber Electronics is a mid-size electronics design firm.  In an effort to attract and retain top talent and to increase efficiency, Harber has commissioned us to write a web-based suite of common tools and calculators for use in the day-to-day work of electrical engineers (EEs).

While there is no shortage of circuit simulators and printed reference material, engineers have complained about not having some quick-access, special-purpose tools for calculations they do regularly.

A survey was conducted among EEs to obtain a list of common calculations that they would like to see in a "library" of tools to help them do their jobs.

The calculator chosen for the pilot project was a parallel resistance calculator.  Out of 35 identified calculators, it was rated #10 in terms of importance/priority, but we have identified it as being the most feasible for a pilot, and the client agreed to start with this tool.

The technology team has created a [proof-of-concept](http://resistance-calculator.valuedogs.net) to ensure feasibility, and the business team has conducted client interviews to elicit requirements and preferences.

# Parallel Resistance

A [_resistor_](https://en.wikipedia.org/wiki/Resistor) is a common electrical element that resists the flow of electricity.  Resistance is measured in ohms (abbreviated by the Greek letter Omega - Ω) and resistors are manufactured in standard values derived from the ["E series of preferred numbers"](https://en.wikipedia.org/wiki/E_series_of_preferred_numbers).

When resistors are used in parallel in a circuit, the equivalent resistance can be found by adding the reciprocals of the resistors placed in parallel and taking the reciprocal of the sum.  A full description (including a calculator) can be found at All About Circuits [Parallel Resistance Calculator](https://www.allaboutcircuits.com/tools/parallel-resistance-calculator/).

# The Use Case

The calculation is extremely simple, and every EE knows it by heart and could do it longhand if necessary.  However, just as you or I would probably use Excel to get the average of a column of numbers, EEs generally use a calculator to do this calculation, which they need to do possibly dozens of times throughout the day.

In interviews, it was revealed that there were two common situations that required the calculation.

1. Two known resistances occur in parallel in a circuit, and the equivalent resistance is needed.
2. A specific resistance is needed that does not correspond with a commonly-available resistor value, so two resistors are combined in parallel to get closer to the desired value.

A survey was taken, and it was determined that the first situation occurs about 60% of the time, with the second condition comprising the other 40%.

# Interview Excerpts

The business team summarized the following relevant excerpts from their interviews.

## Kimberly Leannon, Engineering Manager

This sounds stupid, but we compete in hiring with Wolff Engineering here in town, and they hired a fancy design firm to develop a complete suite of tools to reduce some of the drudgery of the engineer's day-to-day work, and I've had people tell me how slick those tools are.  Fancy animations, slick colors and design -- it's all just eye candy, yet these EEs coming out of college grew up in the era of iPhones and beautiful design.  Engineering is still engineering, but people expect fancy, pretty things.  We even consider the way test bench equipment looks before purchasing it!

I don't quite get it, but there you are.  So it needs to be both useful _and_ pretty.

## Larue Heidenreich, Senior Engineer

This project is a waste of time and money.  We have reference manuals and calculators, and I don't understand why that isn't good enough for people.

## Robert Welch, Production Manager

I know this resistor calculator seems really corny to some people, but I'll tell you one reason it would really make my life easier.  I manage inventory for our range of products, and there's a lot of complexity stocking and sourcing electronics components.  We assign a "supply chain preference" score to every standard component, with 0 being "avoid using" and 10 representing "use with impunity".  I'm constantly having engineering send me prototype requests -- and sometimes even production designs -- with components that represent a sourcing headache or expense.  It results in a lot of back and forth asking them to change their designs, which burns a lot of hours on both sides.  If this calculator could just tie in with our ERP and suggest resistors with a high preference score, we might eliminate a lot of wasted effort.  IT tells me there's a REST API that would be easy to integrate with.

## Lina Blanda, Associate Engineer

I interviewed at Wolff before taking this job, and they showed me their engineering tools, which seemed really cool.  I took this job because they offered me a little more and the benefits are better, but I'm getting tired of rifling through the reference books on my shelf and generally feeling like I'm working with the same tools my dad had when he worked at Siemens.

There's also a lot of specialized in-house knowledge and designs we have here.  I would love it if we had a really easy-to-navigate suite of tools to use that stuff...it would save me a lot of time and frustration.  The parallel resistance calculator sounds pretty boring in comparison, but I guess I do have a spreadsheet I made myself for that exact calculation, and it's not pretty or anything, just gets the job done.

## Morris Champlin, Associate Engineer

There are some third-party tools we use, and they're powerful, but let me tell you, they need to hire some designers, because they are UGLY.  And so many of them don't even display schematics, just input values and output tables.  I'm a very visual learner, and sometimes if there isn't a diagram, I sketch it out on a pad and write the values down just because it's easy for me to think about it that way.  All through school, we look at schematics, when other engineers give us designs or ideas, they use schematics...and these tools come along that are all text and numbers.  Not useful.  Another thing I hate is how hard it is to use standard SI prefixes.  With resistors in particular, most values we use are in the k or M range.  I hate programs that make me type 22000 instead of just 22k.  Or even worse, 1000000 instead of 1M.

## Tia Schaden, CTO

Kimberly talked management into this project, but I have reservations.  Outsourcing engineering is expensive (and we should know, that's how we make our money), and this seems like a lot of money for some gimmicky tools that our engineers can make do without.  I would personally like to see analytics built into the tools...maybe if I see a lot of adoption from the pilot, I'll change my tune.  If not, I can make an argument to kill the project.

## Jayce Larson, IT Manager

We have a certification process for third-party software.  I'm not really sure how this fits into the process, but one of the metrics on our scorecard is integration with our OAuth 2.0 single-sign-on (SSO) service.  If this software is access-controlled, I don't want our people to have to make up another insecure password.  I'm really trying to push SSO for all of our web applications.

# Exhibit A: ERP API

## Resistor Query

Resistors come in different packages, tolerances, and power rating.  So a 10kΩ could have a dozen or more stock units, each with their own supply chain preference (SCP) score.  The most common resistors used at Harber are 1/4W axial-lead carbon film 5% tolerance resistors.

The the relevant ERP component query is:

```
GET /erp/components/R?type=carbon&tol=5&power=0.25&value=10000
```

An example return value is:

```json
[
  {
    "sku": "9KJjH6xbbWLcdhr9H6KJiW",
    "type": "R",
    "tol": 5,
    "power": 0.25,
    "value": 10000,
    "mfr": "Yageo",
    "unit_price": 0.012,
    "scp_score": 8,
    "in_stock": 22513,
    "in_process": 725,
   },
```

(only one result shown)
  