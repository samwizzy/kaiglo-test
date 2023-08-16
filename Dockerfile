FROM node:18.15-alpine AS builder
WORKDIR /kg-frontend-buy
COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
# RUN npm install && mkdir /kg-frontend-buy && cp -R ./node_modules ./kg-frontend-buy
RUN npm install && cp -R ./node_modules ./kg-frontend-buy

COPY . .
RUN npm run build:ssr


FROM nginx:mainline-alpine as browser
COPY nginx/kg-frontend-nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /kg-frontend-buy/dist/kg-frontend-buyer-hub/browser /usr/share/nginx/html
RUN ls -al /usr/share/nginx/html


FROM node:14.16-alpine as runner
WORKDIR /kg-frontend-buy
COPY --from=builder /kg-frontend-buy/node_modules /kg-frontend-buy/node_modules
COPY --from=builder /kg-frontend-buy/dist /kg-frontend-buy/dist
COPY --from=builder /kg-frontend-buy/package*.json ./
EXPOSE 4300
CMD ["npm", "run", "serve:ssr"]
