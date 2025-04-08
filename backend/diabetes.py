#!/usr/bin/env python3
"""
Diagnosmart Diabetes Prediction Model
-----------------------------------
This module provides diabetes prediction functionality using machine learning.
"""

from utils.ml_utils import validate_args, handle_prediction

# Define the features required for diabetes prediction
FEATURES = [
    'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
    'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'
]

def main():
    """Main function to handle diabetes prediction."""
    model_path, input_data = validate_args()
    handle_prediction(model_path, input_data, FEATURES, 'diabetes')

if __name__ == '__main__':
    main()
