FROM alpine:latest
MAINTAINER Fionn Kelleher

RUN apk add --no-cache \
		git \
		go \
		hugo

WORKDIR /root

RUN go get github.com/adnanh/webhook

COPY build.sh .
RUN chmod +x build.sh
COPY hooks.json .

VOLUME /output

ENTRYPOINT ./go/bin/webhook -template -hooks hooks.json -verbose