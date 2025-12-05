# Use official Node LTS
FROM node:18-slim

# Create app dir
WORKDIR /usr/src/app

# Copy package files and install (cache)
COPY package.json package-lock.json* ./
RUN npm ci --only=production || npm install --only=production

# Copy app
COPY . .

# Expose port and run
EXPOSE 3000
CMD ["node", "app.js"]

