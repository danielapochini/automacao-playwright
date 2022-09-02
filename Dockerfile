FROM mcr.microsoft.com/playwright:v1.23.4-focal
RUN mkdir /playwright-docker 
WORKDIR /playwright-docker 
COPY . .

RUN npm config set unsafe-perm true
RUN npm config set "strict-ssl" false
RUN npm install 
RUN npx playwright install

ENTRYPOINT ["npm", "run"]