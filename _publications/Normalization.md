---
title: "Does Normalization Choice Matter for Causal Large Time-Series Models?"
collection: publications
category: manuscripts
permalink: /publication/Normalization
date: 2025-03-02
venue: 'ICLR 2026 TSALM Workshop'
paperurl: 'https://openreview.net/pdf?id=lMNWBnFHxt'
---

Large models for time-series forecasting have been emerged as a promisingparadigm for training models on heterogeneous collections of signals. These models typically rely on causal autoregressive architectures, where each observation is sequentially predicted from past. In practice, real-world time-series exhibit non-stationarities, which significantly influence predictive performance. To mitigate this, normalization is commonly employed However, in efficient causal settings it might induce information leakage from future observations during training. Recent alternatives, including causal normalization and statistics computed from initial observations, have been proposed to address this issue, but their practical implications remain insufficiently understood. In this work, we evaluate normalization strategies for transformer-based large time-series models trained with patching and efficient causal strategy. We showcase that normalization choice significantly influences both training convergence and forecasting performance.