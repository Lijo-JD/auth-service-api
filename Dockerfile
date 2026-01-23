# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files first (better caching)
COPY package*.json ./
RUN npm ci

# Copy TypeScript config and source
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript → dist/
RUN npm run build


# ---------- Production stage ----------
FROM node:20-alpine

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy only production dependency files
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output from build stage
COPY --from=builder /app/dist ./dist

# Expose app port
EXPOSE 9000

# Start application
CMD ["node", "dist/index.js"]