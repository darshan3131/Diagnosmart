#!/usr/bin/env python3
"""
Diagnosmart Breast Cancer Prediction Model
----------------------------------------
This module provides breast cancer prediction functionality using machine learning.
"""

from utils.ml_utils import validate_args, handle_prediction

# Define the features required for breast cancer prediction
FEATURES = [
    'radius_mean', 'texture_mean', 'perimeter_mean', 'area_mean',
    'smoothness_mean', 'compactness_mean', 'concavity_mean',
    'concave_points_mean', 'symmetry_mean', 'fractal_dimension_mean',
    'radius_se', 'texture_se', 'perimeter_se', 'area_se',
    'smoothness_se', 'compactness_se', 'concavity_se',
    'concave_points_se', 'symmetry_se', 'fractal_dimension_se',
    'radius_worst', 'texture_worst', 'perimeter_worst', 'area_worst',
    'smoothness_worst', 'compactness_worst', 'concavity_worst',
    'concave_points_worst', 'symmetry_worst', 'fractal_dimension_worst'
]

def main():
    """Main function to handle breast cancer prediction."""
    model_path, input_data = validate_args()
    handle_prediction(model_path, input_data, FEATURES, 'breast_cancer')

if __name__ == '__main__':
    main()