"""
Diagnosmart ML Utilities
-----------------------
Common utilities for machine learning models in the Diagnosmart platform.
"""

import json
import sys
import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler

def load_model(model_path):
    """Load a trained machine learning model from a pickle file."""
    try:
        with open(model_path, 'rb') as file:
            model = pickle.load(file)
        return model
    except Exception as e:
        print(json.dumps({'error': f'Failed to load model: {str(e)}'}))
        sys.exit(1)

def preprocess_data(data, features):
    """Preprocess input data for model prediction."""
    try:
        # Convert input data to numpy array
        input_data = np.array([float(data[feature]) for feature in features]).reshape(1, -1)
        
        # Scale the features
        scaler = StandardScaler()
        scaled_data = scaler.fit_transform(input_data)
        
        return scaled_data
    except Exception as e:
        print(json.dumps({'error': f'Data preprocessing failed: {str(e)}'}))
        sys.exit(1)

def get_prediction_result(model, data):
    """Get prediction result with probability and risk level."""
    try:
        prediction = model.predict(data)
        probability = model.predict_proba(data)[0]
        
        result = {
            'prediction': int(prediction[0]),
            'probability': float(probability[1]),
            'risk_level': 'High' if probability[1] > 0.7 else 'Medium' if probability[1] > 0.3 else 'Low'
        }
        
        return result
    except Exception as e:
        print(json.dumps({'error': f'Prediction failed: {str(e)}'}))
        sys.exit(1)

def validate_args():
    """Validate command line arguments for prediction scripts."""
    if len(sys.argv) != 4 or sys.argv[1] != '--loads':
        print(json.dumps({
            'error': 'Invalid arguments. Usage: python script.py --loads model_path data'
        }))
        sys.exit(1)
    return sys.argv[2], json.loads(sys.argv[3])

def handle_prediction(model_path, input_data, features, model_type):
    """Handle the prediction process for any disease type."""
    try:
        model = load_model(model_path)
        processed_data = preprocess_data(input_data, features)
        result = get_prediction_result(model, processed_data)
        result['model_type'] = model_type
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({'error': f'Prediction process failed: {str(e)}'}))
        sys.exit(1)
