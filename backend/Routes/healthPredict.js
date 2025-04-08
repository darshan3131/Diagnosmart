import express from "express";
import { spawn } from "child_process";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router({ mergeParams: true });

// Use path.join for cross-platform compatibility
const pythonScriptPathForSymptoms = path.join(__dirname, '..', 'symptoms.py');
const symptomsModel = path.join(__dirname, '..', 'aimodels', 'svc.pkl');

router.post("/symptoms", (req, res) => {
  let responseSent = false;
  try {
    const data = req.body.data;
    console.log({ dataInString: JSON.stringify({ data }) });
    
    const pythonProcess = spawn("python", [
      pythonScriptPathForSymptoms,
      "--loads",
      symptomsModel,
      JSON.stringify({ data }),
    ]);

    let prediction;
    pythonProcess.stdout.on("data", (data) => {
      const dataString = data.toString();
      console.log("Python script output:", JSON.parse(dataString));
      prediction = JSON.parse(dataString);
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python script error:", data.toString());
      if (!responseSent) {
        responseSent = true;
        res.status(500).json({ error: "Error processing prediction" });
      }
    });

    pythonProcess.on("close", (code) => {
      console.log("Python process closed with code:", code);
      if (!responseSent) {
        responseSent = true;
        if (code === 0 && prediction) {
          res.json({ prediction });
        } else {
          res.status(500).json({ error: "Error processing prediction" });
        }
      }
    });
  } catch (error) {
    console.error("Error in /symptoms route:", error);
    if (!responseSent) {
      responseSent = true;
      res.status(500).json({ error: "Server error" });
    }
  }
});

export default router;
