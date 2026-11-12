FROM docker.io/node:26.13.1-slim@sha256:e6bedef217677b276c591795e169840edd9096dbf13f29df8ef8d1856b8820bc

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
