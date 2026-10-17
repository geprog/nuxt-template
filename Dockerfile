FROM docker.io/node:26-slim

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
    "--allow-net", \
    "./server/index.mjs"]
