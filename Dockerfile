FROM docker.io/node:26.12.0-slim@sha256:0d1e33586362bb9e608c4e751e7a9e7edb55c9ac11461ed5666af696cc461dd4

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
