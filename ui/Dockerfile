# # build environment
# FROM node:12.2.0-alpine as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json /app/package.json
# RUN npm install --silent
# RUN npm install react-scripts@3.0.1 -g --silent
# COPY . /app
# RUN npm run build

# # production environment
# FROM nginx:1.16.0-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

## build core
FROM node:12.2.0-alpine
WORKDIR /usr/src/app/ui
COPY *.json ./
RUN yarn
COPY ./ ./

RUN chmod +x ./node_modules/.bin/react-scripts

EXPOSE 3000
CMD ["yarn", "start"]

# dev environment
# FROM docker.pkg.github.com/kaitoryouga/todo/core_ui:latest
# WORKDIR /app/ui

# # RUN rm -Rf ./src && mkdir src
# # ADD ./src ./src
# RUN cat ./src/index.js
# EXPOSE 3000
# ENTRYPOINT ["npm", "start"]