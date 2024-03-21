# Use the official Node.js image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . ./

# Expose port 3000 (the port that Express app is running on)
EXPOSE 3000

# Specify the command to run the app (npm start)
CMD ["npm", "run", "start"]