---
title: 'Fraudulent Credit Card Transactions Detection'
date: 2024-09-01
permalink: /posts/2024/01/cardfraud/
tags:
  - unsupervised learning
  - anomaly detection
  - pytorch
---

# Fraudulent Credit Card Transactions Detection

In this post, we explores methods to detect fraudulent credit card transactions using unsupervised learning.

Link to the code: [github repo](https://github.com/vilhess/CreditCardFraud)

The dataset used for this project is available on [Kaggle](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud).

---

## Objectives

1. Apply Unsupervised algorithms to detect anomalies in credit card transactions.
2. Compare the performance of:
   - A basic classifier trained in a supervised setting,
   - A Gradient-Boosting classifier in a supervised setting,
   - [Deep SVDD](https://proceedings.mlr.press/v80/ruff18a.html),
   - [DROCC](https://arxiv.org/abs/2002.12718).
   - A VAE using as a score the reconstruction loss.
3. Implementation of test p-values using a validation set to reject anomalous samples, based on the method proposed in the paper: [Testing for Outliers with Conformal p-values](https://arxiv.org/abs/2104.08279).
4. Performance is measured using the AUC-ROC score, F1 score, recall, precision, and accuracy.

---

## Dataset

The dataset used in this project is sourced from the following Kaggle repository:
[Credit Card Fraud Detection Dataset](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud).  
It contains transactions made by European cardholders over two days, with 492 fraudulent cases out of 284,807 transactions.

***Supervised setting***:

In the supervised setting, both the training and validation sets include labeled fraudulent transactions. This allows for the training of standard classifiers using conventional classification loss functions.

***Unsupervised setting***:
 
In the unsupervised setting, fraudulent transactions are excluded from both the training and validation sets. Consequently, these sets only contain non-fraudulent transactions.

---

## Focus on the methods

**Basic Classifiers and Gradient Boosting under Supervised Setting:**

Initially, we train basic classifiers (a neural network and a gradient boosting algorithm) to establish a baseline for comparison with our novel models trained in the unsupervised setting.

## Unsupervised Anomaly Detection Models

Here, we explore anomaly detection models trained under the unsupervised setting:

* **Deep SVDD (Support Vector Data Description):** This approach utilizes an encoder to map normal data points into a hypersphere. Anomalous data, by definition, falls outside this hypersphere. To generate a continuous anomaly score, the conformity score is calculated based on the distance from the hypersphere's center. Normal data tends to map closer to the center, while anomalies are mapped farther away. You can find more details in the following reference: [Deep SVDD](https://proceedings.mlr.press/v80/ruff18a.html).

* **DROCC (Deep Robust One-Class Classification):** This algorithm leverages adversarial training to generate anomalous data that can fool a classifier during the training phase. The objective of the model is to learn a robust representation of normal data through adversarial training, mimicking a supervised setting with a basic classification loss function. More details can be found in the following reference: [DROCC](https://arxiv.org/abs/2002.12718).

* **Variational Autoencoder (VAE):** VAEs learn a compressed representation of the data by encoding it into a latent space. The reconstruction loss, typically measured as the difference between the original input and the reconstructed output, serves as an anomaly score. Anomalous data points generally exhibit higher reconstruction errors, indicating a poorer fit to the learned data distribution.

---

## Results

| Metric               | Basic NN Supervised | Gradient Boosting | Deep SVDD | DROCC  | VAE    |
|----------------------|---------------------|-------------------|-----------|--------|--------|
| **ROC-AUC Scores**    | 0.942619            | 0.969196          | 0.946778  | 0.955337 | 0.922005 |
| **F1 Scores**         | 0.994224            | 0.995913          | 0.996056  | 0.996430 | 0.994965 |
| **Accuracy**          | 0.988526            | 0.991868          | 0.992149  | 0.992893 | 0.989986 |
| **Precision**         | 0.999716            | 0.999773          | 0.999561  | 0.999689 | 0.999319 |
| **Recall**            | 0.988792            | 0.992082          | 0.992575  | 0.993193 | 0.990648 |

---
The presented results demonstrate that unsupervised anomaly detection models, including Deep SVDD, DROCC, and the Variational Autoencoder, achieve performance levels comparable to supervised models, such as the supervised neural network and gradient boosting. This finding suggests that effective anomaly detection can be achieved without the requirement of labeled fraudulent data, which is often scarce and costly to obtain in real-world scenarios. These results highlight the potential of unsupervised methods for practical anomaly detection applications.

------
