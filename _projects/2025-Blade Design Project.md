---
layout: project
title: Small Wind Turbine Blade Design
description: Design, fabrication, and experimental validation of a low-Reynolds-number wind turbine blade optimized using a power-weighted Weibull analysis.
technologies: [Aerodynamics, Blade Element Theory, SolidWorks, Structural Analysis, Wind Tunnel Testing]
---
<div class="carousel">
  <button class="carousel-btn prev" aria-label="Previous image">&#10094;</button>

  <div class="carousel-track">
    <img src="{{ '/assets/images/blade/blade_design.jpg' | relative_url }}" alt="Aero Lizard blade CAD" class="carousel-img active">
    <img src="{{ '/assets/images/blade/cad.png' | relative_url }}" alt="Aero Lizard cover image" class="carousel-img">
    <img src="{{ '/assets/images/blade/probab_blade.png' | relative_url }}" alt="Wind tunnel test setup" class="carousel-img">
    <img src="{{ '/assets/images/blade/power_curve.png' | relative_url }}" alt="Power curve results" class="carousel-img">
  </div>

  <button class="carousel-btn next" aria-label="Next image">&#10095;</button>
</div>

This project involved the end-to-end design, fabrication, and experimental validation of a three-bladed small wind turbine rotor optimized for low-Reynolds-number operation in a small wind tunnel. Rather than designing for the most common wind speed, our team used a **power-weighted Weibull distribution (k = 5, c = 5 m/s)** to identify the wind speed contributing most significantly to long-term energy capture. This analysis revealed an optimal design wind speed of approximately **5.3 m/s**, which defined the primary operating condition and guided all major aerodynamic and structural decisions. Based on facility constraints, the rotor was designed to operate near **1900 RPM**, corresponding to a target tip-speed ratio of **λ ≈ 6.7**, well within the high-efficiency range for three-bladed horizontal-axis turbines. 

Aerodynamically, the blade was designed using **Blade Element Momentum (BEM) principles** and employed a **NACA 4412 airfoil**, selected for its reliable performance and benign stall characteristics in the **Re ≈ 30,000–60,000** range. A square-root chord taper was implemented to increase aerodynamic loading near the hub while reducing induced and centrifugal effects near the tip. The blade twist distribution was calculated to maintain near-optimal angles of attack across the span at the design operating point, using a simplified inflow model combining axial and tangential velocity components. While axial induction effects were neglected due to the rotor’s low solidity, the resulting geometry produced a robust and aerodynamically stable design well-suited to experimental validation. 

Structural safety was evaluated under the most demanding test condition (**U = 7 m/s**), with conservative analytical models used to estimate root bending stress and in-plane torque transmitted to the magnetic particle brake. The blade was fabricated using **Accura 25 SLA resin**, and structural calculations predicted factors of safety of approximately **3.6 against torque overload** and **5.2 against bending failure**, even under worst-case loading assumptions. These estimates intentionally neglected several stress-reducing effects, ensuring conservative results. Throughout wind tunnel testing, the rotor exhibited no structural issues, validating the robustness of the design and confirming safe operation across the full test envelope. 


Experimentally, the rotor was tested by generating power curves across tunnel wind speeds from approximately **3.4 to 6.5 m/s**, using a torque brake to vary loading and measure equilibrium RPM, torque, and power. The measured power curves consistently exhibited peak power near **1900 RPM** and within the **5.3–6.0 m/s** wind-speed range, closely matching predictions from the Weibull-based design analysis. At the design condition, the rotor achieved a power coefficient corresponding to roughly **34% of the Betz limit**, a strong result for a small, low-Reynolds-number rotor tested in a wind tunnel environment. Overall, the close agreement between predicted and measured performance validated both the aerodynamic modeling approach and the design philosophy of targeting energy-weighted operating conditions rather than instantaneous peak power. 
Testing procedure was as follows: 
### Testing Procedure

The experimental testing procedure involved operating the rotor in the wind tunnel while systematically varying brake torque to generate power curves across multiple wind speeds.

<img src="{{ '/assets/images/blade/blade_testing.png' | relative_url }}"
     alt="Wind tunnel testing procedure"
     class="project-image">

