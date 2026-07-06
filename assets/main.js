/* =========================================================
   Samy-Melwan Vilhes — minimalist site
   ========================================================= */
(function () {
  "use strict";

  /* Year in footer */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* Publications — single source of truth */
  var PUBS = [
    {
      year: "2025",
      title: "PatchFM — a patch-based foundation model for zero-shot time series forecasting",
      venue: "Foundation model · quantile predictions",
      links: [
        { label: "code", href: "https://github.com/vilhess/PatchFM" },
        { label: "model card", href: "https://github.com/vilhess/PatchFM/blob/main/assets/modelcard.pdf" },
        { label: "PyPI", href: "https://pypi.org/project/patchfm/" }
      ],
      html:
        '<details class="usage"><summary>usage example</summary>' +
        '<pre class="code"><code><span class="c-op">!</span>pip install patchfm\n' +
        '<span class="c-k">import</span> torch\n' +
        '<span class="c-k">from</span> patchfm <span class="c-k">import</span> Forecaster, PatchFMConfig\n' +
        'model = <span class="c-fn">Forecaster</span>(<span class="c-fn">PatchFMConfig</span>())  <span class="c-c"># pretrained, from HF Hub</span>\n' +
        'seq = torch.<span class="c-fn">randn</span>(batch_size, context_size)\n' +
        'median, quantiles = <span class="c-fn">model</span>(seq, forecast_horizon=<span class="c-num">64</span>)</code></pre></details>'
    },
    {
      year: "2026",
      title: "Does Normalization Choice Matter for Causal Large Time-Series Models?",
      venue: "ICLR 2026 · TSALM Workshop",
      spotlight: true,
      desc: "Large models for time-series forecasting have emerged as a promising paradigm for training on heterogeneous collections of signals. These models typically rely on causal autoregressive architectures, where each observation is sequentially predicted from the past. Real-world time-series exhibit non-stationarities that significantly influence predictive performance; normalization is commonly used to mitigate this, but in efficient causal settings it might induce information leakage from future observations during training. We evaluate normalization strategies for transformer-based large time-series models trained with patching and an efficient causal strategy, showing that the choice significantly influences both training convergence and forecasting performance.",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2606.09954" },
        { label: "code", href: "https://github.com/vilhess/normalizer" }
      ]
    },
    {
      year: "2025",
      title: "PatchTrAD: A Patch-Based Transformer focusing on Patch-Wise Reconstruction Error for Time Series Anomaly Detection",
      venue: "EUSIPCO 2025",
      desc: "Time series anomaly detection focuses on identifying whether observations in streaming data deviate significantly from normal patterns. We introduce PatchTrAD, a patch-based Transformer model that leverages a Transformer encoder with patches under a reconstruction-based framework. On multiple benchmarks it is on par with state-of-the-art deep learning models for anomaly detection while being time efficient during inference.",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2504.08827" },
        { label: "code", href: "https://github.com/vilhess/PatchTrAD" },
        { label: "slides", href: "files/pres_patchtrad.pdf" }
      ]
    },
    {
      year: "2024",
      title: "Understanding Neural Tangent Kernel: Key Theories and Experimental Insights",
      venue: "Open Science",
      desc: "A study of the training dynamics of artificial neural networks through the Neural Tangent Kernel. For an infinitely wide network, the NTK becomes deterministic at initialization, remains constant during training, and the network's behavior converges to kernel regression, with the NTK serving as the kernel — resting on the understanding that an infinitely wide network behaves like a Gaussian process.",
      links: [
        { label: "HAL", href: "https://normandie-univ.hal.science/hal-04784111v3" },
        { label: "code", href: "https://github.com/vilhess/NTK" }
      ]
    }
  ];

  var mount = document.getElementById("pubs");
  if (mount) {
    mount.innerHTML = PUBS.map(function (p) {
      var meta = p.venue + (p.spotlight ? ' · <span class="pub__spot">spotlight</span>' : "");
      var links = p.links.map(function (l) {
        return '<a href="' + l.href + '" target="_blank" rel="noopener">' + l.label + "</a>";
      }).join(" · ");
      var body = p.html
        ? p.html
        : '<details class="usage"><summary>abstract</summary><p class="pub__desc">' + p.desc + "</p></details>";
      return (
        '<article class="pub">' +
          '<h3 class="pub__title"><a href="' + p.links[0].href + '" target="_blank" rel="noopener">' + p.title + "</a></h3>" +
          '<div class="pub__meta">' + meta + " · " + links + "</div>" +
          body +
        "</article>"
      );
    }).join("");
  }
})();
