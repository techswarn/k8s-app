# k8s-app

This is a sample repo with Client and server. The client is a react frontend and server is a RESTAPI using NodeJS.

Clone the repository: https://github.com/techswarn/k8s-app.git . Run git clone https://github.com/techswarn/k8s-app.git on your local computer.

You should see two folder client and server. Also a deploy.sh script. With this sript you can Auto mate the deployment to Dockerhub and also DigitalOcean container registry.

## Server

### Lets under the server side first.

It's a NodeJS app which uses Express framework. The App exposes the endpoint: https://<youdomain>/server/api/v1/weather. It's a POST request which accepts the following body: {"lat": "12", "log": "70"}

```
curl -H "Content-Type: application/json" -d '{"lat": "12", "log": "70"}' -X POST https://docker-app-8prqz.ondigitalocean.app/server/api/v1/weather

```
