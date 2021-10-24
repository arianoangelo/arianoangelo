FROM tiangolo/uvicorn-gunicorn:python3.7

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update --fix-missing \
    && apt-get install -y apt-utils \
    && apt-get update --fix-missing \
    && apt-get install -y curl gnupg ca-certificates

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get autoremove -y \
    && apt-get install -y tar git python3 python3-dev python3-pip cron postgresql-client

RUN mkdir /conf
ADD . /conf
WORKDIR /conf

COPY run_server /usr/local/bin/run_server
RUN chmod +x /usr/local/bin/run_server

RUN pip3 install -r requirements.txt

WORKDIR /app

ENV DEBIAN_FRONTEND teletype