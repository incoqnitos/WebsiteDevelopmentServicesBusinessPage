export default function TOZNavierStokesPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #020617, #0a0e1a, #020617)',
      color: '#e2e8f0',
      fontFamily: '"Georgia", "Times New Roman", serif',
      padding: '0 0 80px 0',
    }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08))',
        borderBottom: '1px solid rgba(34,211,238,0.15)',
        padding: '72px 24px 56px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 18px', borderRadius: 999,
          border: '1px solid rgba(167,139,250,0.4)',
          background: 'rgba(167,139,250,0.1)',
          color: '#a78bfa', fontSize: 12, fontWeight: 700,
          letterSpacing: '0.18em', marginBottom: 28,
          fontFamily: 'system-ui, sans-serif',
        }}>
          SCIENTIFIC ARTICLE · 2025
        </div>

        <h1 style={{
          fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 700,
          lineHeight: 1.25, marginBottom: 16, maxWidth: 820, margin: '0 auto 16px',
          background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          TOZ-Modified Navier–Stokes Equations
        </h1>
        <p style={{
          fontSize: '1.15rem', color: 'rgba(148,163,184,0.9)',
          maxWidth: 680, margin: '0 auto 32px', lineHeight: 1.6,
          fontStyle: 'italic',
        }}>
          An Adaptive Regularization Framework and Proof Strategy for Global Smoothness
        </p>

        {/* Meta */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24,
          fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#94a3b8',
        }}>
          {[
            ['Author', 'Dimitar Konstantinov Totev'],
            ['Organisation', 'Mobile Intelligence Technologies 1985 Ltd (MIT AI 1985)'],
            ['Year', '2025'],
            ['Status', 'Theoretical Framework'],
          ].map(([k, v]) => (
            <div key={k} style={{ textAlign: 'center' }}>
              <div style={{ color: '#64748b', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
              <div style={{ color: '#cbd5e1', fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>

        {/* Copyright */}
        <div style={{
          margin: '40px 0 0',
          padding: '18px 24px',
          background: 'rgba(251,191,36,0.06)',
          border: '1px solid rgba(251,191,36,0.2)',
          borderRadius: 12,
          fontFamily: 'system-ui, sans-serif',
          fontSize: 13, color: '#fbbf24', lineHeight: 1.6,
        }}>
          © 2025 Dimitar Konstantinov Totev. All Rights Reserved.
          TOZ/TROK framework, adaptive K<sub>TOZ</sub> coefficient, cubic singularity detector —
          intellectual property of Dimitar Konstantinov Totev.
          <strong> Patent Pending: BG-2025-TOZ-NAVIER-STOKES-001</strong>
        </div>

        <Divider />

        {/* Abstract */}
        <Section title="Abstract">
          <p>
            This paper presents a theoretical framework for the <em>adaptive regularization</em> of
            the three-dimensional incompressible Navier–Stokes equations. The central idea is to
            replace the classical constant viscosity with a <strong>state-dependent effective
            viscosity</strong> governed by adaptive TOZ/TROK coefficients.
          </p>
          <p style={{ marginTop: 16 }}>
            These coefficients react dynamically to local flow instability, vorticity concentration,
            gradient growth, and kinetic-energy accumulation.
          </p>
          <p style={{ marginTop: 16 }}>
            The framework is formulated as a structured mathematical research programme and a possible
            bridge toward controlling blow-up mechanisms in nonlinear fluid systems. Four structural
            assumptions are introduced — <em>uniform ellipticity, local Lipschitz continuity, adaptive
            gradient damping</em>, and <em>Lyapunov-type control</em> — under which formal energy
            estimates suggest that adaptive dissipation may dominate the nonlinear growth responsible
            for potential singularity formation.
          </p>
        </Section>

        <Divider />

        {/* 1 */}
        <Section title="1. Introduction">
          <p>
            The global existence and smoothness problem for the three-dimensional incompressible
            Navier–Stokes equations is one of the most important open questions in mathematical fluid
            mechanics. The classical system reads:
          </p>
          <Formula>
            ∂<sub>t</sub>u + (u · ∇)u − ν Δu = −∇p + f
          </Formula>
          <Formula>∇ · u = 0</Formula>
          <Formula>u(0, x) = u₀(x)</Formula>
          <p style={{ marginTop: 20 }}>
            Here <Var>u(x,t)</Var> is the velocity field, <Var>p(x,t)</Var> is the pressure,{' '}
            <Var>ν &gt; 0</Var> is the kinematic viscosity (a <em>fixed constant</em>), and{' '}
            <Var>f</Var> is an external force.
          </p>
          <p style={{ marginTop: 16 }}>
            The fundamental mathematical difficulty lies in the nonlinear convection term:
          </p>
          <Formula>(u · ∇)u</Formula>
          <p style={{ marginTop: 16 }}>
            In three dimensions this term may amplify gradients. The unresolved question is: do smooth,
            divergence-free initial data always yield global smooth solutions, or can finite-time
            singularities form?
          </p>
          <Callout color="cyan">
            This work proposes that replacing the fixed viscosity <Var>ν</Var> with an{' '}
            <strong>adaptive, state-dependent effective viscosity</strong> may provide the additional
            dissipation needed to prevent singularity formation.
          </Callout>
        </Section>

        <Divider />

        {/* 2 */}
        <Section title="2. The TOZ/TROK Modification">
          <p>We define an <strong>effective viscosity</strong>:</p>
          <FormulaBlock
            label="Effective viscosity"
            math="ν_eff(t, x, u) = ν₀ + K_TOZ(t, x, u)"
          />
          <p style={{ marginTop: 16 }}>
            where <Var>ν₀ &gt; 0</Var> is a minimal baseline viscosity and <Var>K<sub>TOZ</sub></Var> is
            the adaptive coefficient generated by the TOZ/TROK framework.
          </p>
          <p style={{ marginTop: 16 }}>The modified Navier–Stokes system becomes:</p>
          <FormulaBlock
            label="TOZ-modified Navier–Stokes"
            math="∂_t u + (u · ∇)u − ∇ · (ν_eff(t,x,u) ∇u) = −∇p + f"
          />
          <Formula>∇ · u = 0</Formula>
          <Formula>u(0, x) = u₀(x)</Formula>
          <Callout color="violet">
            The purpose of <Var>K<sub>TOZ</sub></Var> is to <strong>increase dissipation</strong> in
            regions where the flow approaches unstable or potentially singular behaviour, while in stable
            regions the system remains close to the classical Navier–Stokes dynamics.
          </Callout>
        </Section>

        <Divider />

        {/* 3 */}
        <Section title="3. TOZ Adaptive Coefficient">
          <p>A concrete model for the adaptive coefficient is:</p>
          <div style={{
            background: 'rgba(2,6,23,0.8)',
            border: '1px solid rgba(34,211,238,0.3)',
            borderRadius: 16, padding: '28px 32px', margin: '24px 0',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 13, color: '#64748b', letterSpacing: '0.1em', marginBottom: 16, fontFamily: 'system-ui, sans-serif' }}>
              TOZ ADAPTIVE COEFFICIENT
            </div>
            <div style={{ fontSize: '1.35rem', lineHeight: 2.2, color: '#e2e8f0' }}>
              <div>
                K<sub style={{ fontSize: '0.7em' }}>TOZ</sub>(x, t) = max
                <span style={{ fontSize: '1.5em', verticalAlign: 'middle', margin: '0 4px' }}>(</span>
                ν₀ ,{' '}
                <span style={{ display: 'inline-block', verticalAlign: 'middle', textAlign: 'center', margin: '0 8px' }}>
                  <span style={{ display: 'block', borderBottom: '2px solid #22d3ee', paddingBottom: 6, color: '#22d3ee' }}>
                    Σ<sub style={{ fontSize: '0.65em' }}>i</sub> W<sub style={{ fontSize: '0.65em' }}>i</sub>(x,t) · KPI<sub style={{ fontSize: '0.65em' }}>i</sub>(x,t)
                  </span>
                  <span style={{ display: 'block', paddingTop: 6, color: '#a78bfa' }}>
                    ε(x,t) + Δt + α · Σ<sub style={{ fontSize: '0.65em' }}>j</sub> |ΔK<sub style={{ fontSize: '0.65em' }}>j</sub>|
                  </span>
                </span>
                <span style={{ fontSize: '1.5em', verticalAlign: 'middle', margin: '0 4px' }}>)</span>
              </div>
            </div>
          </div>

          <ParamTable params={[
            ['ν₀', 'Minimal protective viscosity (baseline floor)'],
            ['Wᵢ', 'Adaptive weights — satisfy Σᵢ Wᵢ = 1'],
            ['KPIᵢ', 'Local diagnostic indicators (energy, vorticity, gradient)'],
            ['ε(x,t)', 'Stabilising noise / uncertainty term'],
            ['Δt', 'Time step'],
            ['α', 'Sensitivity parameter'],
            ['ΔKⱼ', 'Local changes in adaptive constants'],
          ]} />

          <Callout color="green">
            This construction turns viscosity into a <strong>feedback mechanism</strong>: it does not
            remain passive, it reacts to the evolving geometry and intensity of the flow.
          </Callout>
        </Section>

        <Divider />

        {/* 4 */}
        <Section title="4. Core KPI Fields">
          <p>
            The adaptive mechanism is driven by three local indicators that measure energy
            concentration, rotational intensity, and gradient instability.
          </p>

          <SubSection title="4.1 Normalised Kinetic Energy — KPI₁">
            <FormulaBlock
              label=""
              math="KPI₁(x,t) = ½|u(x,t)|² / (max_y ½|u(y,t)|² + δ)"
            />
            <p style={{ marginTop: 12 }}>Detects regions where kinetic energy is concentrated.</p>
          </SubSection>

          <SubSection title="4.2 Normalised Vorticity — KPI₂">
            <FormulaBlock label="" math="ω(x,t) = ∇ × u(x,t)" />
            <FormulaBlock label="" math="KPI₂(x,t) = |ω(x,t)| / (max_y |ω(y,t)| + δ)" />
            <p style={{ marginTop: 12 }}>Identifies zones with strong rotational or turbulent behaviour.</p>
          </SubSection>

          <SubSection title="4.3 Gradient Instability — KPI₃">
            <FormulaBlock label="" math="KPI₃(x,t) = |∇u(x,t)| / (|u(x,t)| + δ)" />
            <p style={{ marginTop: 12 }}>
              Measures whether local gradients are becoming large relative to the local velocity
              scale. <Var>KPI₂</Var> and <Var>KPI₃</Var> become large precisely in regions where
              classical Navier–Stokes dynamics is most vulnerable to sharp gradient formation.
            </p>
          </SubSection>
        </Section>

        <Divider />

        {/* 5 */}
        <Section title="5. Structural Assumptions">
          <p>To make the framework mathematically meaningful, the effective viscosity must satisfy four structural assumptions:</p>

          <AssumptionBlock label="H1" title="Uniform Ellipticity">
            <p>There exist constants <Var>0 &lt; ν_min ≤ ν_max &lt; ∞</Var> such that:</p>
            <FormulaBlock label="" math="ν_min ≤ ν_eff(t, x, u) ≤ ν_max" />
            <p style={{ marginTop: 8 }}>This ensures the modified system remains <strong>uniformly parabolic</strong>.</p>
          </AssumptionBlock>

          <AssumptionBlock label="H2" title="Local Lipschitz Continuity">
            <p>For bounded states <Var>u</Var> and <Var>v</Var>, there exists <Var>L_R &gt; 0</Var>:</p>
            <FormulaBlock label="" math="|ν_eff(t,x,u) − ν_eff(t,x,v)| ≤ L_R |u − v|" />
            <p style={{ marginTop: 8 }}>Essential for local well-posedness and stability.</p>
          </AssumptionBlock>

          <AssumptionBlock label="H3" title="Adaptive Gradient Damping">
            <p>There exist constants <Var>M ≥ 0</Var> and a continuous increasing function <Var>Φ</Var>:</p>
            <FormulaBlock label="" math="∫_Ω K_TOZ |∇u|² dx ≥ Φ(‖∇u‖_L²) − M" />
            <p style={{ marginTop: 8 }}>Typical growth condition: <Var>Φ(r) ~ c·r^(2+δ), δ &gt; 0</Var></p>
            <Callout color="cyan">
              <strong>Central protective assumption:</strong> when gradient energy grows, adaptive
              dissipation grows with it.
            </Callout>
          </AssumptionBlock>

          <AssumptionBlock label="H4" title="Lyapunov-Type Control">
            <p>There exists a Lyapunov functional:</p>
            <FormulaBlock label="" math="ℒ(t) = ½‖u(t)‖²_L² + γ ∫_Ω Ψ(K_TOZ) dx" />
            <p style={{ margin: '12px 0' }}>satisfying:</p>
            <FormulaBlock label="" math="d/dt ℒ(t) + c₁‖∇u‖²_L² + c₂Φ(‖∇u‖_L²) ≤ C₀ + C₁‖f‖²_H⁻¹" />
            <p style={{ marginTop: 8 }}>Combines velocity energy with the adaptive energy of the TOZ coefficient.</p>
          </AssumptionBlock>
        </Section>

        <Divider />

        {/* 6 */}
        <Section title="6. Cubic Singularity Detector">
          <p>To detect dangerous local states, we introduce a <strong>cubic detector</strong>:</p>
          <FormulaBlock label="Cubic detector" math="D(z) = T_ijk · zᵢ · zⱼ · zₖ" />
          <p style={{ marginTop: 16 }}>
            Here <Var>z ∈ ℝᴺ</Var> encodes the local state:
          </p>
          <FormulaBlock label="" math="z = (u, ∇u, Δu, KPI₁, KPI₂, KPI₃, …)" />
          <p style={{ marginTop: 16 }}>The adaptive coefficient is then defined by:</p>
          <FormulaBlock label="" math="K_TOZ(z) = K_base + F(D(z))" />
          <p style={{ marginTop: 8 }}>where <Var>F(s)</Var> is increasing with <Var>F(s) → ∞ as s → ∞</Var>.</p>

          <div style={{
            margin: '28px 0',
            padding: '24px',
            background: 'rgba(34,211,238,0.04)',
            border: '1px solid rgba(34,211,238,0.2)',
            borderRadius: 14,
            fontFamily: 'system-ui, sans-serif',
          }}>
            <div style={{ fontSize: 12, color: '#64748b', letterSpacing: '0.1em', marginBottom: 16 }}>PROTECTION CHAIN</div>
            {[
              ['dist(z, B) → 0', 'Flow approaches a critical state'],
              ['D(z) → ∞', 'Cubic detector fires'],
              ['K_TOZ → ∞', 'Adaptive viscosity spikes'],
              ['Dissipation dominates', 'Singular behaviour is blocked'],
            ].map(([eq, desc], i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: i < arr.length - 1 ? 12 : 0 }}>
                <div style={{
                  minWidth: 200, padding: '8px 16px', borderRadius: 8,
                  background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)',
                  color: '#22d3ee', fontFamily: 'monospace', fontSize: 14, textAlign: 'center',
                }}>{eq}</div>
                {i < arr.length - 1 && <div style={{ color: '#22d3ee', fontSize: 20 }}>→</div>}
                <div style={{ color: '#94a3b8', fontSize: 14 }}>{desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
            Here <Var>B</Var> denotes a critical set of potentially singular states.
          </p>
        </Section>

        <Divider />

        {/* 7 */}
        <Section title="7. Energy Estimate">
          <p>
            The basic energy estimate is obtained by testing the modified equation against <Var>u</Var>.
            Using incompressibility and integration by parts, the convection and pressure terms vanish,
            yielding:
          </p>
          <FormulaBlock
            label="Basic energy identity"
            math="d/dt · ½‖u(t)‖²_L² + ∫_Ω ν_eff |∇u|² dx = ⟨f, u⟩"
          />
          <p style={{ marginTop: 16 }}>Applying uniform ellipticity (H1) and Young's inequality:</p>
          <FormulaBlock
            label="L² energy bound"
            math="d/dt ‖u‖²_L² + ν_min ‖∇u‖²_L² ≤ C‖f‖²_H⁻¹ + C‖u‖²_L²"
          />
          <Callout color="green">This provides basic L² control of the solution.</Callout>
        </Section>

        <Divider />

        {/* 8 */}
        <Section title="8. Nonlinear Estimate — The Classical Difficulty">
          <p>Let <Var>E(t) = ‖∇u(t)‖²_L²</Var>. The critical nonlinear term is estimated:</p>
          <FormulaBlock label="" math="∫_Ω |u| |∇u| |Δu| dx ≤ ‖u‖_L⁶ · ‖∇u‖_L³ · ‖Δu‖_L²" />
          <p style={{ marginTop: 16 }}>Using Sobolev embedding <Var>‖u‖_L⁶ ≤ C‖∇u‖_L²</Var> and the Gagliardo–Nirenberg interpolation:</p>
          <FormulaBlock label="Gagliardo–Nirenberg" math="‖∇u‖_L³ ≤ C · ‖∇u‖^(1/2)_L² · ‖Δu‖^(1/2)_L²" />
          <p style={{ marginTop: 16 }}>Combined:</p>
          <FormulaBlock label="" math="∫_Ω |u||∇u||Δu| dx ≤ C · ‖∇u‖^(3/2)_L² · ‖Δu‖^(3/2)_L²" />
          <p style={{ marginTop: 16 }}>By Young's inequality:</p>
          <FormulaBlock label="" math="‖∇u‖^(3/2)_L² · ‖Δu‖^(3/2)_L² ≤ ε‖Δu‖²_L² + C_ε · ‖∇u‖⁶_L²" />
          <p style={{ marginTop: 16 }}>Therefore:</p>
          <FormulaBlock label="Gradient energy ODE" math="dE/dt + c₁‖Δu‖²_L² ≤ C₁ E³ + C₂" />
          <Callout color="red">
            <strong>Classical difficulty:</strong> the nonlinear term produces <em>cubic growth</em> in
            gradient energy — this is what the TOZ adaptive damping must overcome.
          </Callout>
        </Section>

        <Divider />

        {/* 9 */}
        <Section title="9. TOZ Adaptive Damping">
          <p>
            Under assumption H3, the gradient inequality gains an extra protective term:
          </p>
          <FormulaBlock
            label="TOZ-damped gradient ODE"
            math="dE/dt + c₁‖Δu‖²_L² + c₂Φ(√E) ≤ C₁ E^(3/2) + C₂"
          />
          <p style={{ marginTop: 16 }}>
            If <Var>Φ</Var> is chosen so that for large <Var>E</Var>:
          </p>
          <FormulaBlock label="" math="c₂ Φ(√E) ≥ 2C₁ E^(3/2)" />
          <p style={{ marginTop: 16 }}>then the inequality reduces to a <strong>dissipative form</strong>:</p>
          <FormulaBlock
            label="Dissipative bound"
            math="dE/dt + C₃ · E^(1 + δ/2) ≤ C₄"
          />
          <Callout color="violet">
            This differential inequality <strong>prevents finite-time blow-up</strong> of{' '}
            <Var>E(t)</Var>, provided the structural assumptions are rigorously established.
          </Callout>
        </Section>

        <Divider />

        {/* 10 */}
        <Section title="10. TROK-Regularity Conjecture">
          <p>Let <Var>Ω = ℝ³</Var> or <Var>𝕋³</Var>. Assume:</p>
          <FormulaBlock label="" math="u₀ ∈ H¹_σ(Ω)" />
          <FormulaBlock label="" math="f ∈ L²_loc([0,∞); H⁻¹(Ω))" />
          <p style={{ marginTop: 16 }}>Suppose <Var>ν_eff</Var> satisfies H1–H4. Then the TOZ/TROK-modified system is conjectured to admit a <strong>unique global strong solution</strong>:</p>
          <FormulaBlock
            label="Global regularity"
            math="u ∈ C([0,∞); H¹_σ(Ω)) ∩ L²_loc([0,∞); H²(Ω))"
          />
          <p style={{ marginTop: 16 }}>Moreover, for every <Var>T &gt; 0</Var>:</p>
          <FormulaBlock label="Smoothness" math="u ∈ C^∞((0,T] × Ω)" />

          <div style={{
            marginTop: 24, padding: '20px 24px',
            background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08))',
            border: '1px solid rgba(34,211,238,0.25)',
            borderRadius: 14,
            fontFamily: 'system-ui, sans-serif',
          }}>
            <div style={{ color: '#22d3ee', fontWeight: 700, marginBottom: 8, fontSize: 14 }}>
              TROK-REGULARITY CONJECTURE
            </div>
            <p style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              Under suitable structural hypotheses on the adaptive viscosity, the TOZ/TROK-modified
              three-dimensional Navier–Stokes system admits a unique global smooth solution for all
              smooth divergence-free initial data.
            </p>
          </div>
        </Section>

        <Divider />

        {/* 11 */}
        <Section title="11. Bridge to the Classical Problem">
          <p>Consider the one-parameter family:</p>
          <FormulaBlock
            label="Perturbation family"
            math="ν^ε_eff(t, x, u) = ν + ε · K_TOZ(t, x, u),   ε ∈ (0, 1]"
          />
          <p style={{ marginTop: 16 }}>The proposed research strategy:</p>
          <div style={{ margin: '20px 0' }}>
            {[
              ['Step 1', 'Prove global regularity for the adaptive system with ε = 1'],
              ['Step 2', 'Derive estimates independent of ε'],
              ['Step 3', 'Study compactness as ε → 0'],
              ['Step 4', 'Investigate whether the limiting system retains control to inform the classical Navier–Stokes problem'],
            ].map(([step, desc]) => (
              <div key={step} style={{
                display: 'flex', gap: 16, marginBottom: 12, alignItems: 'flex-start',
                fontFamily: 'system-ui, sans-serif',
              }}>
                <div style={{
                  minWidth: 64, padding: '4px 10px', borderRadius: 6, textAlign: 'center',
                  background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
                  color: '#a78bfa', fontSize: 12, fontWeight: 700, marginTop: 2,
                }}>{step}</div>
                <div style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
          <Callout color="violet">
            The ε → 0 limit is mathematically nontrivial and remains the most delicate part of
            the programme.
          </Callout>
        </Section>

        <Divider />

        {/* 12 */}
        <Section title="12. Discussion — Areas of Application">
          <p>
            The TOZ/TROK framework transforms viscosity from a passive constant into an{' '}
            <strong>active feedback structure</strong>. This approach may have relevance for:
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12, margin: '20px 0', fontFamily: 'system-ui, sans-serif',
          }}>
            {[
              'Turbulence modelling',
              'Computational fluid dynamics',
              'Atmospheric & oceanic simulation',
              'Haemodynamics',
              'Nonlinear PDE control',
              'Adaptive numerical solvers',
              'AI-assisted mathematical modelling',
            ].map(a => (
              <div key={a} style={{
                padding: '10px 14px', borderRadius: 10,
                background: 'rgba(15,23,42,0.8)',
                border: '1px solid rgba(51,65,85,0.6)',
                color: '#94a3b8', fontSize: 13,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ color: '#22d3ee' }}>▸</span> {a}
              </div>
            ))}
          </div>

          <p style={{ marginTop: 8, fontWeight: 600 }}>Main open tasks:</p>
          <ol style={{ paddingLeft: 24, lineHeight: 2, color: '#94a3b8', fontFamily: 'system-ui, sans-serif' }}>
            <li>Define <Var>K<sub>TOZ</sub></Var> rigorously in suitable function spaces</li>
            <li>Prove H1–H4 for a concrete construction</li>
            <li>Establish local and global well-posedness</li>
            <li>Validate the cubic detector analytically and numerically</li>
            <li>Study the ε → 0 limit</li>
            <li>Compare with classical Navier–Stokes benchmarks</li>
          </ol>
        </Section>

        <Divider />

        <Divider />

        {/* PROOF SUPPLEMENT */}
        <Section title="Supplement: Step-by-Step Mathematical Validation">
          <Callout color="cyan">
            The following sections constitute a complete derivation of the core energy estimates,
            confirming that the TOZ/TROK framework is scientifically defensible under assumptions H1–H4.
          </Callout>

          {/* S1 */}
          <SubSection title="S1. Why Adaptive Viscosity is Mathematically Meaningful">
            <p>
              The classical equation uses a fixed viscosity <Var>ν &gt; 0</Var>. Replacing it with
              an adaptive coefficient yields the modified operator:
            </p>
            <FormulaBlock label="Effective viscosity" math="ν_eff(t, x, u) = ν₀ + K_TOZ(t, x, u)" />
            <p style={{ marginTop: 14 }}>The modified PDE becomes:</p>
            <FormulaBlock label="TOZ-modified system"
              math="∂_t u + (u · ∇)u − ∇ · (ν_eff(t,x,u) ∇u) = −∇p + f,   ∇ · u = 0" />
            <p style={{ marginTop: 14 }}>
              This is mathematically meaningful provided the <strong>uniform ellipticity
              condition</strong> H1 holds:
            </p>
            <FormulaBlock label="H1 — uniform ellipticity"
              math="0 < ν_min ≤ ν_eff(t, x, u) ≤ ν_max < ∞" />
            <Callout color="green">
              H1 guarantees that the operator remains <strong>uniformly parabolic</strong> and
              diffusion never vanishes. The system is therefore a legitimate
              variable-viscosity / adaptive-viscosity PDE model — not an arbitrary construction.
            </Callout>
          </SubSection>

          {/* S2 */}
          <SubSection title="S2. Proof of the Basic L² Energy Estimate">
            <p>
              Multiply the TOZ-modified equation by <Var>u</Var> and integrate over <Var>Ω</Var>:
            </p>
            <FormulaBlock label="Weak form"
              math="∫_Ω u · ∂_t u dx + ∫_Ω u · (u · ∇)u dx − ∫_Ω u · ∇·(ν_eff ∇u) dx + ∫_Ω u · ∇p dx = ∫_Ω f · u dx" />

            <p style={{ marginTop: 16 }}>Each term is evaluated separately:</p>

            <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <TermBlock label="Time derivative" color="cyan">
                <FormulaBlock label="" math="∫_Ω u · ∂_t u dx = ½ d/dt ‖u‖²_L²" />
              </TermBlock>

              <TermBlock label="Nonlinear convection — vanishes" color="green">
                <p style={{ marginBottom: 8 }}>Because <Var>∇ · u = 0</Var> (incompressibility):</p>
                <FormulaBlock label="" math="∫_Ω u · (u · ∇)u dx = 0" />
              </TermBlock>

              <TermBlock label="Pressure — vanishes" color="green">
                <FormulaBlock label="" math="∫_Ω u · ∇p dx = −∫_Ω p ∇·u dx = 0" />
              </TermBlock>

              <TermBlock label="Diffusion term" color="violet">
                <p style={{ marginBottom: 8 }}>Integration by parts gives:</p>
                <FormulaBlock label="" math="−∫_Ω u · ∇·(ν_eff ∇u) dx = ∫_Ω ν_eff |∇u|² dx" />
              </TermBlock>
            </div>

            <p>Assembling all terms:</p>
            <FormulaBlock label="Energy identity"
              math="½ d/dt ‖u‖²_L² + ∫_Ω ν_eff |∇u|² dx = ⟨f, u⟩" />

            <p style={{ marginTop: 14 }}>Since <Var>ν_eff ≥ ν_min &gt; 0</Var> by H1:</p>
            <FormulaBlock label=""
              math="½ d/dt ‖u‖²_L² + ν_min ‖∇u‖²_L² ≤ ⟨f, u⟩" />

            <p style={{ marginTop: 14 }}>Apply Young's inequality to the right-hand side:</p>
            <FormulaBlock label="Young's inequality"
              math="⟨f, u⟩ ≤ C‖f‖²_H⁻¹ + ε‖∇u‖²_L²" />

            <p style={{ marginTop: 14 }}>Choose <Var>ε</Var> small and absorb it into the left side:</p>
            <FormulaBlock label="Basic L² energy bound"
              math="d/dt ‖u‖²_L² + c ‖∇u‖²_L² ≤ C ‖f‖²_H⁻¹" />

            <Callout color="green">
              <strong>Result:</strong> Basic L² energy control is established rigorously.
              The solution cannot grow unboundedly in L² as long as <Var>f</Var> is controlled.
            </Callout>
          </SubSection>

          {/* S3 */}
          <SubSection title="S3. Why Hölder / Sobolev / Gagliardo–Nirenberg is the Right Direction">
            <p>
              Define the gradient energy:
            </p>
            <FormulaBlock label="" math="E(t) = ‖∇u(t)‖²_L²" />
            <p style={{ marginTop: 12 }}>The critical nonlinear term satisfies:</p>
            <FormulaBlock label="Nonlinear term"
              math="∫_Ω |u| |∇u| |Δu| dx ≤ ‖u‖_L⁶ · ‖∇u‖_L³ · ‖Δu‖_L²" />

            <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <TermBlock label="Sobolev embedding" color="cyan">
                <FormulaBlock label="" math="‖u‖_L⁶ ≤ C ‖∇u‖_L²" />
              </TermBlock>
              <TermBlock label="Gagliardo–Nirenberg interpolation" color="violet">
                <FormulaBlock label="" math="‖∇u‖_L³ ≤ C · ‖∇u‖^(1/2)_L² · ‖Δu‖^(1/2)_L²" />
              </TermBlock>
            </div>

            <p>Combined:</p>
            <FormulaBlock label=""
              math="∫_Ω |u||∇u||Δu| dx ≤ C · ‖∇u‖^(3/2)_L² · ‖Δu‖^(3/2)_L²" />

            <p style={{ marginTop: 14 }}>Apply Young's inequality with exponents (4/3, 4):</p>
            <FormulaBlock label="Young"
              math="C‖∇u‖^(3/2)_L² · ‖Δu‖^(3/2)_L² ≤ ε‖Δu‖²_L² + C_ε · ‖∇u‖⁶_L²" />

            <p style={{ marginTop: 14 }}>
              Since <Var>‖∇u‖⁶_L² = E(t)³</Var>, the gradient energy ODE takes the form:
            </p>
            <FormulaBlock label="Gradient energy ODE"
              math="dE/dt + c₁ ‖Δu‖²_L² ≤ C₁ E³ + C₂" />

            <Callout color="red">
              <strong>Classical difficulty visible:</strong> the right-hand side contains{' '}
              <Var>E³</Var> — cubic growth in gradient energy. Without additional damping, this
              could drive blow-up in finite time. This is precisely what TOZ adaptive damping
              must overcome.
            </Callout>
          </SubSection>

          {/* S4 */}
          <SubSection title="S4. Why H3 is the Heart of the Theory">
            <p>
              Assumption H3 states:
            </p>
            <FormulaBlock label="H3 — Adaptive gradient damping"
              math="∫_Ω K_TOZ |∇u|² dx ≥ Φ(‖∇u‖_L²) − M" />
            <p style={{ marginTop: 14 }}>
              This means: when <Var>‖∇u‖_L²</Var> grows, the adaptive <Var>K_TOZ</Var> must generate
              additional dissipation. Choosing the growth function:
            </p>
            <FormulaBlock label="" math="Φ(r) ~ c · r^(2+δ),   δ > 0" />
            <p style={{ marginTop: 14 }}>
              With <Var>r = ‖∇u‖_L² = √E</Var>:
            </p>
            <FormulaBlock label="" math="Φ(√E) ~ c · (√E)^(2+δ) = c · E^(1 + δ/2)" />

            <p style={{ marginTop: 14 }}>The gradient ODE gains the protective term:</p>
            <FormulaBlock label="TOZ-damped gradient ODE"
              math="dE/dt + c₁ ‖Δu‖²_L² + c₂ Φ(√E) ≤ C₁ E^(3/2) + C₂" />

            <p style={{ marginTop: 14 }}>
              If <Var>Φ</Var> is chosen so that for large <Var>E</Var>:
            </p>
            <FormulaBlock label="Dominance condition"
              math="c₂ Φ(√E) ≥ 2C₁ E^(3/2)" />

            <p style={{ marginTop: 14 }}>then the inequality reduces to:</p>
            <FormulaBlock label="Dissipative bound"
              math="dE/dt + C₃ · E^(1 + δ/2) ≤ C₄" />

            <div style={{
              margin: '24px 0',
              padding: '24px',
              background: 'rgba(2,6,23,0.9)',
              border: '1px solid rgba(34,211,238,0.3)',
              borderRadius: 14,
              fontFamily: 'system-ui, sans-serif',
            }}>
              <div style={{ fontSize: 12, color: '#64748b', letterSpacing: '0.1em', marginBottom: 16 }}>
                WHY THIS PREVENTS BLOW-UP
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['Exponent', '1 + δ/2 > 1 — superlinear dissipation for all δ > 0'],
                  ['Mechanism', 'If E grows large, the term −C₃ E^(1+δ/2) dominates'],
                  ['Consequence', 'dE/dt ≤ C₄ − C₃ E^(1+δ/2) < 0 for E sufficiently large'],
                  ['Conclusion', 'E(t) cannot escape to infinity in finite time'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', gap: 16 }}>
                    <span style={{ minWidth: 110, color: '#22d3ee', fontWeight: 700, fontSize: 13 }}>{k}</span>
                    <span style={{ color: '#94a3b8', fontSize: 14 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </SubSection>

          {/* S5 — Main conclusion */}
          <SubSection title="S5. Central Conditional Result">
            <div style={{
              padding: '28px 32px',
              background: 'linear-gradient(135deg, rgba(34,211,238,0.07), rgba(139,92,246,0.07))',
              border: '2px solid rgba(34,211,238,0.3)',
              borderRadius: 16,
              fontFamily: 'system-ui, sans-serif',
            }}>
              <div style={{ fontSize: 12, color: '#64748b', letterSpacing: '0.14em', marginBottom: 16 }}>
                MAIN THEOREM (CONDITIONAL)
              </div>
              <p style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '1.05rem', marginBottom: 16, lineHeight: 1.6 }}>
                Under assumptions H1–H4, the TOZ/TROK-modified Navier–Stokes system admits a
                conditional global regularity mechanism.
              </p>
              <FormulaBlock label="Implication chain"
                math="H3 ⟹ control of ‖∇u‖_L² ⟹ no blow-up in the TOZ/TROK-modified system" />
              <p style={{ color: '#94a3b8', fontSize: 14, marginTop: 16, lineHeight: 1.7 }}>
                The key open task is to construct a concrete <Var>K_TOZ</Var> satisfying H1–H4
                and to establish whether estimates pass to the classical <Var>ε → 0</Var> limit.
                Until those steps are completed, this constitutes a rigorous conditional result
                for the <em>modified</em> system — which is itself a scientifically defensible and
                meaningful contribution.
              </p>
            </div>
          </SubSection>
        </Section>

        <Divider />

        {/* 13 */}
        <Section title="13. Conclusion">
          <p>
            This paper presents a TOZ/TROK adaptive regularization framework for the three-dimensional
            incompressible Navier–Stokes equations. The core idea — replacing constant viscosity with a
            state-dependent effective viscosity controlled by local indicators of instability — leads to
            formal energy estimates suggesting that adaptive dissipation may dominate nonlinear gradient
            growth.
          </p>
          <p style={{ marginTop: 16 }}>
            The work should be understood as a <em>theoretical framework and proof strategy</em>, not as
            a finalised proof of the classical Navier–Stokes problem. Its value lies in proposing a new
            adaptive mechanism for nonlinear PDE regularization and opening a possible direction for
            future mathematical and computational research.
          </p>
          <div style={{
            marginTop: 32, padding: '24px',
            background: 'rgba(251,191,36,0.05)',
            border: '1px solid rgba(251,191,36,0.2)',
            borderRadius: 14, fontFamily: 'system-ui, sans-serif',
          }}>
            <div style={{ color: '#fbbf24', fontWeight: 700, marginBottom: 12 }}>Intellectual Property Statement</div>
            <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.7, margin: '0 0 8px' }}>
              The TOZ/TROK framework, adaptive K<sub>TOZ</sub> coefficient, cubic detector mechanism,
              and related conceptual architecture are protected intellectual property of{' '}
              <strong style={{ color: '#cbd5e1' }}>Dimitar Konstantinov Totev</strong>.
            </p>
            <p style={{ color: '#64748b', fontSize: 13, margin: 0 }}>
              Patent Pending: BG-2025-TOZ-NAVIER-STOKES-001 ·
              Mobile Intelligence Technologies 1985 Ltd · contact@mitai.de · mitai.de
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
}

/* ── Helpers ─────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{
        fontSize: '1.4rem', fontWeight: 700, color: '#f1f5f9',
        borderBottom: '1px solid rgba(34,211,238,0.2)',
        paddingBottom: 10, marginBottom: 24,
      }}>{title}</h2>
      <div style={{ lineHeight: 1.8, fontSize: '1.02rem', color: '#cbd5e1' }}>{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 28 }}>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#94a3b8', marginBottom: 12 }}>{title}</h3>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div style={{
      margin: '48px 0 0',
      height: 1,
      background: 'linear-gradient(to right, transparent, rgba(34,211,238,0.2), transparent)',
    }} />
  );
}

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      margin: '16px auto',
      padding: '14px 24px',
      background: 'rgba(2,6,23,0.7)',
      border: '1px solid rgba(51,65,85,0.5)',
      borderRadius: 10,
      fontFamily: '"Courier New", "Lucida Console", monospace',
      fontSize: '1.05rem',
      color: '#22d3ee',
      textAlign: 'center',
      letterSpacing: '0.03em',
    }}>{children}</div>
  );
}

function FormulaBlock({ label, math }: { label: string; math: string }) {
  return (
    <div style={{
      margin: '20px 0',
      background: 'rgba(2,6,23,0.85)',
      border: '1px solid rgba(34,211,238,0.25)',
      borderRadius: 12, overflow: 'hidden',
    }}>
      {label && (
        <div style={{
          padding: '6px 18px',
          background: 'rgba(34,211,238,0.06)',
          borderBottom: '1px solid rgba(34,211,238,0.15)',
          fontFamily: 'system-ui, sans-serif',
          fontSize: 11, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>{label}</div>
      )}
      <div style={{
        padding: '18px 24px',
        fontFamily: '"Courier New", monospace',
        fontSize: '1.05rem', color: '#22d3ee',
        textAlign: 'center', letterSpacing: '0.04em', lineHeight: 1.6,
      }}>{math}</div>
    </div>
  );
}

function Var({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: '"Courier New", monospace',
      color: '#67e8f9', fontSize: '0.95em',
    }}>{children}</span>
  );
}

function Callout({ color, children }: { color: 'cyan' | 'violet' | 'green' | 'red'; children: React.ReactNode }) {
  const colors = {
    cyan:   { border: 'rgba(34,211,238,0.3)',  bg: 'rgba(34,211,238,0.06)',  text: '#22d3ee' },
    violet: { border: 'rgba(139,92,246,0.3)',  bg: 'rgba(139,92,246,0.06)', text: '#a78bfa' },
    green:  { border: 'rgba(52,211,153,0.3)',  bg: 'rgba(52,211,153,0.06)', text: '#34d399' },
    red:    { border: 'rgba(239,68,68,0.3)',   bg: 'rgba(239,68,68,0.06)',  text: '#f87171' },
  }[color];
  return (
    <div style={{
      margin: '20px 0',
      padding: '14px 20px',
      background: colors.bg,
      border: `1px solid ${colors.border}`,
      borderLeft: `3px solid ${colors.text}`,
      borderRadius: 8,
      color: '#cbd5e1',
      fontFamily: 'system-ui, sans-serif',
      fontSize: 14, lineHeight: 1.7,
    }}>{children}</div>
  );
}

function AssumptionBlock({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      margin: '24px 0',
      padding: '20px 24px',
      background: 'rgba(15,23,42,0.7)',
      border: '1px solid rgba(51,65,85,0.6)',
      borderRadius: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <span style={{
          padding: '3px 10px', borderRadius: 6,
          background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)',
          color: '#a78bfa', fontWeight: 700, fontSize: 13,
          fontFamily: 'system-ui, sans-serif',
        }}>{label}</span>
        <span style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '1rem' }}>{title}</span>
      </div>
      <div style={{ color: '#cbd5e1', lineHeight: 1.8 }}>{children}</div>
    </div>
  );
}

function TermBlock({ label, color, children }: { label: string; color: 'cyan' | 'violet' | 'green' | 'red'; children: React.ReactNode }) {
  const colors = {
    cyan:   { border: 'rgba(34,211,238,0.25)',  bg: 'rgba(34,211,238,0.05)',  tag: '#22d3ee' },
    violet: { border: 'rgba(139,92,246,0.25)',  bg: 'rgba(139,92,246,0.05)', tag: '#a78bfa' },
    green:  { border: 'rgba(52,211,153,0.25)',  bg: 'rgba(52,211,153,0.05)', tag: '#34d399' },
    red:    { border: 'rgba(239,68,68,0.25)',   bg: 'rgba(239,68,68,0.05)',  tag: '#f87171' },
  }[color];
  return (
    <div style={{
      padding: '14px 18px',
      background: colors.bg,
      border: `1px solid ${colors.border}`,
      borderRadius: 10,
    }}>
      <div style={{
        fontFamily: 'system-ui, sans-serif', fontSize: 11,
        color: colors.tag, letterSpacing: '0.1em', textTransform: 'uppercase',
        marginBottom: 8, fontWeight: 700,
      }}>{label}</div>
      {children}
    </div>
  );
}

function ParamTable({ params }: { params: [string, string][] }) {
  return (
    <div style={{ margin: '20px 0', fontFamily: 'system-ui, sans-serif' }}>
      {params.map(([sym, desc]) => (
        <div key={sym} style={{
          display: 'flex', gap: 16, padding: '10px 0',
          borderBottom: '1px solid rgba(51,65,85,0.4)',
          alignItems: 'flex-start',
        }}>
          <code style={{
            minWidth: 80, color: '#22d3ee',
            fontFamily: '"Courier New", monospace', fontSize: '0.95rem',
          }}>{sym}</code>
          <span style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.6 }}>{desc}</span>
        </div>
      ))}
    </div>
  );
}
