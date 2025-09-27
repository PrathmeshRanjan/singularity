"use client";

import React from "react";

type Feature = { title: string; desc?: string };

type Props = {
  /** number of horizontal dashed rungs */
  rungs?: number;
  /** primary stroke color for edges and dashes */
  color?: string;
  /** height of the svg in px */
  height?: number;
  /** optional className for wrapper */
  className?: string;
  /** features to render inside the ladder. If not provided three defaults will be used. */
  features?: Feature[];
};

export default function HorizontalLadder({
  rungs = 5,
  color = "#a66bff",
  height = 140,
  className = "",
  features,
}: Props) {
  // default features (3) if not passed
  const defaultFeatures: Feature[] = [
    { title: "Smart Budgeting", desc: "Auto-categorize spending and get personalised budgets." },
    { title: "Automated Savings", desc: "Rules-based transfers that grow with you." },
    { title: "Investment Insights", desc: "Actionable portfolio suggestions with explanations." },
  ];
  const feats = features && features.length > 0 ? features.slice(0, 3) : defaultFeatures;

  // viewBox width is fixed (for easy arithmetic) but svg is responsive (width:100%)
  const viewW = 1000;
  const pad = 24; // left/right padding inside svg
  const leftLx = pad; // X where left L starts
  const leftHorizontalEnd = leftLx + 72; // where left horizontal arm reaches
  const rightLx = viewW - pad; // rightmost X
  const rightHorizontalStart = rightLx - 72; // where right horizontal arm starts

  const top = 20;
  const bottom = height - 20;
  const availableH = bottom - top;
  const rungCount = Math.max(1, rungs);

  const rungYs = Array.from({ length: rungCount }).map((_, i) => {
    // distribute rungs evenly from top to bottom
    const t = rungCount === 1 ? 0.5 : i / (rungCount - 1);
    return top + t * availableH;
  });

  // mid X between rails where we'll place feature cards
  const railInnerStart = leftHorizontalEnd + 8;
  const railInnerEnd = rightHorizontalStart - 8;
  const railSpan = Math.max(240, railInnerEnd - railInnerStart);
  const cardWidth = Math.min(420, Math.floor(railSpan * 0.85));

  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox={`0 0 ${viewW} ${height}`}
        width="100%"
        height={height}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Horizontal ladder with dashed rungs and features"
        className="block"
      >
        <defs>
          <linearGradient id="railGrad" x1="0" x2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.95" />
            <stop offset="100%" stopColor={color} stopOpacity="0.55" />
          </linearGradient>

          <style>{`
            .dash-anim {
              stroke-dasharray: 10 8;
              animation: dashMove 2s linear infinite;
            }
            @keyframes dashMove {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -18; }
            }
            .feat-title { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-weight: 700; }
            .feat-desc { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-weight: 400; }
          `}</style>
        </defs>

        {/* Left L (vertical down then horizontal right) */}
        <path
          d={`M ${leftLx} ${top} V ${bottom} H ${leftHorizontalEnd}`}
          stroke={`url(#railGrad)`}
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Right L (vertical down then horizontal left) */}
        <path
          d={`M ${rightLx} ${top} V ${bottom} H ${rightHorizontalStart}`}
          stroke={`url(#railGrad)`}
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* dashed horizontal rungs */}
        {rungYs.map((y, idx) => (
          <line
            key={idx}
            x1={railInnerStart}
            y1={y}
            x2={railInnerEnd}
            y2={y}
            stroke={color}
            strokeWidth={3}
            strokeLinecap="round"
            className="dash-anim"
          />
        ))}

        {/* subtle end caps to make L shape feel like a rail termination */}
        <circle cx={leftHorizontalEnd} cy={top} r={3.5} fill={color} />
        <circle cx={leftHorizontalEnd} cy={bottom} r={3.5} fill={color} />
        <circle cx={rightHorizontalStart} cy={top} r={3.5} fill={color} />
        <circle cx={rightHorizontalStart} cy={bottom} r={3.5} fill={color} />

        {/* Feature cards placed centered on three chosen rungs. We map features to the first/center/last rungs by default */}
        {feats.map((f, i) => {
          // choose rung index positions: start, middle, end (clamped by available rungs)
          const idx = i === 0 ? 0 : i === 1 ? Math.floor((rungCount - 1) / 2) : rungCount - 1;
          const y = rungYs[idx];
          const midX = Math.floor((railInnerStart + railInnerEnd) / 2);
          const cardH = 56;
          const cardW = cardWidth;
          const cardX = midX - cardW / 2;
          const cardY = y - cardH / 2 - 6; // slight lift so it sits above the rung

          return (
            <g key={i} transform={`translate(${cardX}, ${cardY})`}>
              <rect
                x={0}
                y={0}
                width={cardW}
                height={cardH}
                rx={12}
                fill="#ffffff"
                fillOpacity={0.95}
                stroke="#e9e6ff"
                strokeWidth={1}
                filter="none"
              />

              <text
                x={cardW / 2}
                y={18}
                textAnchor="middle"
                className="feat-title"
                fontSize={14}
                fill="#2b2b2b"
              >
                {f.title}
              </text>

              <text
                x={cardW / 2}
                y={36}
                textAnchor="middle"
                className="feat-desc"
                fontSize={12}
                fill="#555"
              >
                {f.desc}
              </text>
            </g>
          );
        })}
      </svg>

      {/* small usage hint */}
      <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">Adjust <code>rungs</code>, <code>color</code>, <code>height</code> or pass a <code>features</code> array prop to customise.</div>
    </div>
  );
}
