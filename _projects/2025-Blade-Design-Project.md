---
layout: project
title: Small Wind Turbine Blade Design
description: Design, fabrication, and experimental validation of a low-Reynolds-number wind turbine blade optimized using a power-weighted Weibull analysis.
technologies: [Aerodynamics, Blade Element Theory, Fusion 360, Structural Analysis, Wind Tunnel Testing, LabVIEW]
image: /assets/images/blade/blade_design.jpg
---

### Project Overview
This project involved the end-to-end design, fabrication, and experimental validation of a three-bladed small wind turbine rotor optimized for low-Reynolds-number operation in a controlled wind tunnel environment. Rather than designing for the most common wind speed, our team used a **power-weighted Weibull distribution (k = 5, c = 5 m/s)** to identify the wind speeds contributing most significantly to long-term energy capture. This analysis indicated an optimal design wind speed of approximately **5.3 m/s**, which defined the primary operating condition. Subject to facility constraints, the rotor was designed to operate near **1900 RPM**, corresponding to a target tip-speed ratio of **λ ≈ 6.7**, within the high-efficiency range for three-bladed horizontal-axis turbines.

<div class="carousel">
  <button class="carousel-btn prev" aria-label="Previous image">&#10094;</button>
  <div class="carousel-track">
    <img src="{{ '/assets/images/blade/probab_blade.png' | relative_url }}" alt="Power-weighted Weibull wind-speed distribution" class="carousel-img active">
    <img src="{{ '/assets/images/blade/power_curve.png' | relative_url }}" alt="Measured power curves versus RPM" class="carousel-img">
    <img src="{{ '/assets/images/blade/cad.png' | relative_url }}" alt="Blade CAD model" class="carousel-img">
  </div>
  <button class="carousel-btn next" aria-label="Next image">&#10095;</button>
</div>

### Design Process
To quantify the wind speeds most relevant to long-term energy capture, we modeled the inflow using a **Weibull probability distribution** with shape parameter $$(k = 5)$$ and scale parameter $$(c = 5\: \text{m/s}):$$
\\[
p(U) = \frac{k}{c} \left(\frac{U}{c}\right)^{k-1}
\exp \left[-\left(\frac{U}{c}\right)^k\right]
\\]

Rather than optimizing for the most probable wind speed, we evaluated the **power-weighted expectation** of the wind-speed distribution to account for the cubic dependence of aerodynamic power on velocity:

\\[
\langle P \rangle
= \int_{0}^{\infty} P(U)\, p(U)\, dU
= \frac{1}{2}\rho A \int_{0}^{\infty} C_P(U)\, U^3\, p(U)\, dU
\\]

This analysis indicated that wind speeds near $$(U \approx 5.3~\text{m/s})$$ contribute most significantly to long-term energy production. This value was therefore selected as the **primary design wind speed** used to define the aerodynamic operating point of the rotor.

The blade was then designed using **Blade Element Momentum (BEM)** principles to define a spanwise chord and twist distribution that maximized useful torque at the selected operating point. A **NACA 4412 airfoil** was chosen for its reliable performance and benign stall behavior in the **Re ≈ 30,000–60,000** range typical of small-scale rotors. A square-root chord taper was implemented,
$$
c(r) \propto \left(1 - \frac{r}{R}\right)^{1/2},
$$
to increase aerodynamic loading near the hub while reducing induced and centrifugal effects toward the tip. **Blade twist** was prescribed to maintain **near-optimal angles of attack** across the span under combined axial and tangential inflow. Axial induction effects were neglected due to the rotor’s low solidity, yielding a robust geometry suitable for fabrication and testing.


### Testing Procedure
<img src="{{ '/assets/images/blade/blade_testing.png' | relative_url }}"
     alt="Wind tunnel testing procedure"
     class="project-image">

### Testing Summary
Performance was validated in the wind tunnel by generating **power curves across wind speeds from approximately 3.4 to 6.5 m/s**. At each wind speed, brake torque was incrementally increased until steady-state operating points were reached, and **RPM, torque, and power** were recorded via LabVIEW. The resulting power–RPM curves consistently exhibited peak power near **1900 RPM** and within the **5.3–6.0 m/s** wind-speed range, closely matching predictions from the Weibull-based design analysis. At the design condition, the rotor achieved a power coefficient corresponding to approximately **34% of the Betz limit**, a strong result for a low-Reynolds-number rotor tested in a wind tunnel.

### My Contribution
I led the **selection and validation of the design operating point** by performing the power-weighted Weibull analysis to identify the wind-speed range most relevant to long-term energy capture. I also developed the **wind-tunnel testing procedure** used by the team to generate power curves. In addition, I contributed to the **aerodynamic blade design**, including selection of the **NACA 4412 airfoil**, and handled **post-processing and analysis of the experimental power-curve data** to evaluate agreement between predicted and measured performance.
