#!/usr/bin/env python3
"""
Diagnosmart Liver Disease Prediction Model
----------------------------------------
This module provides liver disease prediction functionality using machine learning.
"""

from utils.ml_utils import validate_args, handle_prediction

# Define the features required for liver disease prediction
FEATURES = [
    'Age', 'Gender', 'Total_Bilirubin', 'Direct_Bilirubin',
    'Alkaline_Phosphotase', 'Alamine_Aminotransferase',
    'Aspartate_Aminotransferase', 'Total_Proteins',
    'Albumin', 'Albumin_and_Globulin_Ratio'
]

def main():
    """Main function to handle liver disease prediction."""
    model_path, input_data = validate_args()
    handle_prediction(model_path, input_data, FEATURES, 'liver')

if __name__ == '__main__':
    main()