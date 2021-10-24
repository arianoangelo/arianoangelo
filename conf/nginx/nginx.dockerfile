FROM nginx:stable

ENV DEBIAN_FRONTEND noninteractive

RUN mkdir /conf
ADD . /conf
WORKDIR /conf

RUN mkdir -p /var/certs/

COPY cert.pem /var/certs/cert.pem
COPY cert.key /var/certs/cert.key

COPY vhosts/*.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/nginx.conf

ENV DEBIAN_FRONTEND teletype