FROM docker.io/node:24-slim

WORKDIR /app
EXPOSE 3000

COPY .output .

USER node
ENV PORT=3000

CMD ["node", \
    "--enable-source-maps", \
    "--permission", \
    "--allow-fs-read=/app", \
    "--allow-addons", \
    "./server/index.mjs"]
