# Static Vanilla implementation

## Development

1. Run `npm run start` to start building the assets in watch mode
1. Generate SSL certificates to run nginx with HTTP2
    1. `mkdir certs && openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certs/nginx.key -out certs/nginx.crt -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=localhost"`
1. Start nginx by running `docker-compose up`
1. Navigate to [https://localhost](https://localhost)

## Release
1. Run `./build.sh`
1. Deploy it somewhere
