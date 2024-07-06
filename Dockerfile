# Stage 1: Base stage with Node.js environment
FROM node:21-alpine3.18 AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install --force
EXPOSE 3000

# Stage 2: Builder stage for building the application
FROM base AS builder
COPY . .

RUN npm run build

# Stage 3: Production stage for running the application
FROM base AS production
WORKDIR /app
ENV NODE_ENV=production


# Setting up a non-root user for better security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001
USER nextjs

# Copying necessary files from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./package*.json
COPY --from=builder /app/public ./public

CMD ["npm", "start"]

# Stage 4: Development stage (optional and can be used for development purposes)
FROM base AS dev
ENV NODE_ENV=development
RUN npm install --force
COPY . .
CMD ["npm", "run", "dev"]