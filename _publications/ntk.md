---
title: "Understanding Neural Tangent Kernel: Key Theories and Experimental Insights"
collection: publications
category: manuscripts
permalink: /publication/ntk
excerpt: 'This paper is about fixing template issue #693.'
date: 2024-01-11
venue: 'HAL Open Science'
paperurl: 'https://normandie-univ.hal.science/hal-04784111v1/document'
citation: 'VILHES Samy. (2024). &quot;Understanding Neural Tangent Kernel: Key Theories and Experimental Insights.&quot; <i>HAL Open Science</i>.'
---

Artificial Neural Networks (ANNs)
are employed in a wide range of tasks,
including market prediction, image
classification, image generation, and
anomaly detection. Understanding
the training dynamics of ANNs is cru-
cial for improving their performance
and interpretability. The Neural Tan-
gent Kernel (NTK) appeared in 2018
in [2]. The NTK provides a power-
ful framework for studying these dy-
namics. Notably, in the case of an
infinitely wide ANN (when H → ∞
in Fig. 1), the NTK becomes deter-
ministic at initialization, remains constant during training, and the network’s behavior converges to kernel regression, with the NTK serving as the kernel. The theoretical foundation of NTK relies on the understanding that an infinitely wide ANN behaves like a Gaussian process.
The code is available in my [GitHub repo](https://github.com/vilhess/NTK)
