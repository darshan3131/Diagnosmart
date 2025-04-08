#!/usr/bin/env python3
"""
Diagnosmart Kidney Disease Prediction Model
-----------------------------------------
This module provides kidney disease prediction functionality using machine learning.
"""

from utils.ml_utils import validate_args, handle_prediction

# Define the features required for kidney disease prediction
FEATURES = [
    'age', 'blood_pressure', 'specific_gravity', 'albumin', 'sugar',
    'red_blood_cells', 'pus_cell', 'pus_cell_clumps', 'bacteria',
    'blood_glucose_random', 'blood_urea', 'serum_creatinine', 'sodium',
    'potassium', 'hemoglobin', 'packed_cell_volume', 'white_blood_cell_count',
    'red_blood_cell_count', 'hypertension', 'diabetes_mellitus',
    'coronary_artery_disease', 'appetite', 'pedal_edema', 'anemia'
]

def main():
    """Main function to handle kidney disease prediction."""
    model_path, input_data = validate_args()
    handle_prediction(model_path, input_data, FEATURES, 'kidney')

if __name__ == '__main__':
    main()