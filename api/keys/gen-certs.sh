#!/bin/sh
set -ex
cd $(dirname $0)
openssl req -new -x509 -batch -nodes -days 10000 -keyout ca-key.pem -out ca-cert.pem
openssl req -new -sha256 -batch -nodes -keyout spdy-key.pem -out spdy-csr.pem
openssl x509 -req -days 10000 -in spdy-csr.pem -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial -signkey spdy-key.pem -out spdy-cert.pem
cat spdy-cert.pem spdy-key.pem > spdy-fullchain.pem
rm spdy-csr.pem ca-cert.pem ca-cert.srl ca-key.pem spdy-cert.pem spdy.pfx