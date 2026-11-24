const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function deployToStaging() {
  const token = process.env.DEPLOY_TOKEN;
  if (!token) {
    throw new Error('DEPLOY_TOKEN environment variable is not set');
  }

  const deployClient = new DeployClient(token);
  
  // Build artifact
  const artifactPath = path.join(__dirname, '../dist', 'app.zip');
  if (!fs.existsSync(artifactPath)) {
    throw new Error(`Artifact not found: ${artifactPath}`);
  }
  
  // Authenticate and push
  await deployClient.authenticate();
  await deployClient.pushArtifacts(artifactPath);
  
  console.log('Deployment to staging completed successfully');
}

class DeployClient {
  constructor(token) {
    this.token = token;
    this.baseUrl = 'https://staging-deploy.meridianlabs.internal';
  }
  
  async authenticate() {
    try {
      const response = await axios.post(`${this.baseUrl}/auth`, {
        token: this.token
      });
      
      if (response.status !== 200) {
        throw new Error(`Authentication failed with status ${response.status}`);
      }
      
      this.authToken = response.data.authToken;
      console.log('Authentication successful');
    } catch (error) {
      console.error('Authentication failed:', error.message);
      throw error;
    }
  }
  
  async pushArtifacts(artifactPath) {
    if (!this.authToken) {
      throw new Error('Not authenticated');
    }
    
    const formData = new FormData();
    formData.append('file', fs.createReadStream(artifactPath));
    
    try {
      const response = await axios.post(`${this.baseUrl}/artifacts`, formData, {
        headers: {
          'Authorization': `Bearer ${this.authToken}`
        }
      });
      
      if (response.status !== 200) {
        throw new Error(`Artifact push failed with status ${response.status}`);
      }
      
      console.log('Artifacts pushed successfully');
    } catch (error) {
      console.error('Artifact push failed:', error.message);
      throw error;
    }
  }
}

module.exports = { deployToStaging, DeployClient };
