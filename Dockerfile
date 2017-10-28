# Builder
FROM node:8 as builder
WORKDIR /app
COPY . /app
RUN npm install --production

# Service
FROM nginx:1.13
COPY ./etc/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app /usr/share/nginx
