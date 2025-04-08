#!/usr/bin/env python3
"""
Diagnosmart Heart Disease Prediction Model
----------------------------------------
This module provides heart disease prediction functionality using machine learning.
"""

from utils.ml_utils import validate_args, handle_prediction

# Define the features required for heart disease prediction
FEATURES = [
    'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg',
    'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'
]

def main():
    """Main function to handle heart disease prediction."""
    model_path, input_data = validate_args()
    handle_prediction(model_path, input_data, FEATURES, 'heart')

if __name__ == '__main__':
    main()