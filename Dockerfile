FROM nginx:alpine

# Build passing in the appropriate repository tags and have a TARGET env variable defined
ARG TARGET=unknown
ARG BUILDNUM

COPY nginx_configs/nginx_web_main.conf.${TARGET} /etc/nginx/conf.d/default.conf

COPY app/ /usr/share/nginx/html

LABEL build=cpms_web_main-${TARGET}-${BUILDNUM}
