FROM arm64v8/python:3.7-slim-buster

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update --fix-missing \
 && apt-get install -y apt-utils \
 && apt-get update --fix-missing \
 && apt-get install -y curl gnupg ca-certificates

RUN apt-get update \
 && apt-get upgrade -y \
 && apt-get autoremove -y \
 && apt-get install -y tar git python3 python3-dev python3-pip cron postgresql-client

# Copy the requirements.txt file into the container
COPY requirements.txt /app/requirements.txt

# Install dependencies globally
RUN pip3 install -r /app/requirements.txt

RUN mkdir /conf
ADD . /conf
WORKDIR /conf

COPY run_server /usr/local/bin/run_server
RUN chmod +x /usr/local/bin/run_server

WORKDIR /app

ENV DEBIAN_FRONTEND teletype
