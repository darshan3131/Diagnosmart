import { PythonShell } from 'python-shell';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the root directory of the backend
const rootDir = path.join(__dirname, '..');

// Configure paths for Python scripts and models
const pythonScripts = {
  diabetes: path.join(rootDir, 'predict.py'),
  heart: path.join(rootDir, 'heart.py'),
  kidney: path.join(rootDir, 'kidney.py'),
  liver: path.join(rootDir, 'liver.py'),
  breastCancer: path.join(rootDir, 'breast-cancer.py'),
  malaria: path.join(rootDir, 'malaria.py'),
  pneumonia: path.join(rootDir, 'pneumonia.py'),
  symptoms: path.join(rootDir, 'symptoms.py')
};

const modelPaths = {
  diabetes: path.join(rootDir, 'aimodels', 'diabetes.pkl'),
  heart: path.join(rootDir, 'aimodels', 'heart.pkl'),
  kidney: path.join(rootDir, 'aimodels', 'kidney.pkl'),
  liver: path.join(rootDir, 'aimodels', 'liver.pkl'),
  breastCancer: path.join(rootDir, 'aimodels', 'breast_cancer.pkl'),
  symptoms: path.join(rootDir, 'aimodels', 'svc.pkl')
};

// Helper function to run Python predictions
const runPythonPrediction = async (scriptPath, modelPath, data) => {
  return new Promise((resolve, reject) => {
    const options = {
      mode: 'text',
      pythonPath: 'python3', // Use python3 command (make sure it's in PATH)
      pythonOptions: ['-u'], // Unbuffered output
      args: [
        '--loads',
        modelPath,
        JSON.stringify(data)
      ]
    };

    PythonShell.run(scriptPath, options, (err, results) => {
      if (err) {
        console.error('Python Error:', err);
        reject(err);
      } else {
        try {
          const prediction = JSON.parse(results[0]);
          resolve(prediction);
        } catch (error) {
          console.error('Error parsing prediction:', error);
          reject(error);
        }
      }
    });
  });
};

// Route handler functions
export const predictDiabetes = async (req, res) => {
  try {
    const prediction = await runPythonPrediction(
      pythonScripts.diabetes,
      modelPaths.diabetes,
      req.body
    );
    res.json({ prediction });
  } catch (error) {
    console.error('Error in diabetes prediction:', error);
    res.status(500).json({ error: 'Failed to process prediction' });
  }
};

export const predictHeart = async (req, res) => {
  try {
    const prediction = await runPythonPrediction(
      pythonScripts.heart,
      modelPaths.heart,
      req.body
    );
    res.json({ prediction });
  } catch (error) {
    console.error('Error in heart disease prediction:', error);
    res.status(500).json({ error: 'Failed to process prediction' });
  }
};

export const predictKidney = async (req, res) => {
  try {
    const prediction = await runPythonPrediction(
      pythonScripts.kidney,
      modelPaths.kidney,
      req.body
    );
    res.json({ prediction });
  } catch (error) {
    console.error('Error in kidney disease prediction:', error);
    res.status(500).json({ error: 'Failed to process prediction' });
  }
};

export const predictLiver = async (req, res) => {
  try {
    const prediction = await runPythonPrediction(
      pythonScripts.liver,
      modelPaths.liver,
      req.body
    );
    res.json({ prediction });
  } catch (error) {
    console.error('Error in liver disease prediction:', error);
    res.status(500).json({ error: 'Failed to process prediction' });
  }
};

export const predictBreastCancer = async (req, res) => {
  try {
    const prediction = await runPythonPrediction(
      pythonScripts.breastCancer,
      modelPaths.breastCancer,
      req.body
    );
    res.json({ prediction });
  } catch (error) {
    console.error('Error in breast cancer prediction:', error);
    res.status(500).json({ error: 'Failed to process prediction' });
  }
};

export const predictSymptoms = async (req, res) => {
  try {
    const prediction = await runPythonPrediction(
      pythonScripts.symptoms,
      modelPaths.symptoms,
      req.body
    );
    res.json({ prediction });
  } catch (error) {
    console.error('Error in symptoms prediction:', error);
    res.status(500).json({ error: 'Failed to process prediction' });
  }
};
